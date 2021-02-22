//Made by Daniel Shiffman (Coding Train, youtube, p5js, processing.org), extended by Sebastian Höfner (07.09.2018)
// Other techniques for learning

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y) {
  // return sigmoid(x) * (1 - sigmoid(x));
  return y * (1 - y);
}

function ReLU(x) {
  if (x > 0) {
    return x;
  } else {
    return 0;
  }
}

function dReLU(y) {
  if (y > 0) {
    return 1 / y;
  } else {
    return 0;
  }
}


function LReLU(x) {
  if (x <= 0) {
    return 0.01 * x;
  } else {
    return x;
  }
}

function dLReLU(y) {
  if (y < 0) {
    return -0.01;
  } else {
    return 1;
  }
}

function tanh(x) {
  return (Math.tanh(x) + 1) / 2;
}

function dtanh(y) {
  return (1 - (y * y)) / 2;
}

function identity(x) {
  return x;
}

function didentity(y) {
  return 1;
}

function softmax(x) {
  return Math.log(1 + Math.exp(x));
}

function dsoftmax(y) {
  //falsch
  return 1 / (1 + Math.exp(-y));
}

function gaussian(x) {
  return Math.exp(-x * x);
}

function dgaussian(y) {
  //falsch
  return -2 * y * (Math.exp(y), -y * y);
}

//function sinusoid(x) {
//  return (sin(x) + 1) / 2;
//}

//function dsinusoid(y) {
//  return Math.pow(0.5 - y * y / 4, 0.5);
//}
//Andere Version aus Paper
function sinusoid(x) {
  if (x < -Math.PI / 2) {
    return 0;
  } else if (x < Math.PI / 2) {
    return (sin(x) + 1) / 2;
  } else {
    return 1;
  }
}

function dsinusoid(y) {
  if (y < -Math.PI / 2) {
    return 0;
  } else if (y < Math.PI / 2) {
    return Math.pow(0.5 - y * y / 4, 0.5);
  } else {
    return 0;
  }
}
class NeuralNetwork {
  constructor(input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes;
    // Checking if hidden nodes is an integer
    // If so convert it to an array with one entry
    if (Number.isInteger(hidden_nodes)) {
      this.hidden_nodes = [hidden_nodes];
    } else {
      this.hidden_nodes = hidden_nodes;
    }
    this.output_nodes = output_nodes;
    this.setLearningRate();
    this.setActivationFunction();
    this.setDActivationFunction();
    // Creating the Layers of the Neural Network
    // ! The last Layer is the output layer
    this.layer = [];
    this.layer.push(new NeuralNetworkLayer(this, this.input_nodes, this.hidden_nodes[0]));
    // Loop hidden layers except for the first and last, set manuelly
    for (let i = 1; i < this.hidden_nodes.length; i++) {
      // input_nodes for NeuralNetworkLayer is always the previous Layer
      this.layer.push(new NeuralNetworkLayer(this, this.hidden_nodes[i - 1], this.hidden_nodes[i]));
    }
    // hidden_nodes.length is the last entry at that time
    this.layer.push(new NeuralNetworkLayer(this, this.hidden_nodes[this.hidden_nodes.length - 1], this.output_nodes));
  }
  predict(input_array) {
    let inputs = Matrix.fromArray(input_array);
    let prediction = inputs;
    // Loop layer over the inputs
    for (let i = 0; i < this.layer.length; i++) {
      prediction = this.layer[i].predict(prediction);
    }
    // Sending prediction to the caller!
    return prediction.toArray();
  }
  setLearningRate(learning_rate = 0.1) {
    this.learning_rate = learning_rate;
  }
  setActivationFunction(Fun = sigmoid) {
    this.activation_function = Fun;
  }
  setDActivationFunction(dFun = dsigmoid) {
    this.d_activation_function = dFun;
  }
  train(input_array, target_array) {
    // Convert input arrays to matrix objects
    let inputs = Matrix.fromArray(input_array);
    let targets = Matrix.fromArray(target_array);
    let predictions = [];
    let prediction = inputs;
    // Loop layer over the inputs
    for (let i = 0; i < this.layer.length; i++) {
      prediction = this.layer[i].predict(prediction);
      predictions.push(prediction);
    }
    // Last layer == output layer
    let outputs = predictions[predictions.length - 1];
    // Calculate the error
    // ERROR = TARGETS - OUTPUTS
    let current_errors = Matrix.subtract(targets, outputs);
    for (let i = this.layer.length - 1; i >= 0; i--) {
      // Calculate deltas
      if (i == 0) {
        current_errors = this.layer[i].applyError(predictions[i], inputs, current_errors);
      } else {
        current_errors = this.layer[i].applyError(predictions[i], predictions[i - 1], current_errors);
      }
    }
  }
  serialize() {
    //BROKEN
    return JSON.stringify(this);
  }
  static deserialize(data) {
    //BROKEN
    if (typeof data == 'string') {
      data = JSON.parse(data);
    }
    let nn = new NeuralNetwork(data.input_nodes, data.hidden_nodes, data.output_nodes);
    return nn;
  }
}

class NeuralNetworkLayer {
  constructor(parent, input_nodes, nodes) {
    this.parent = parent;
    this.weights = new Matrix(nodes, input_nodes);
    this.weights.randomize();
    this.bias = new Matrix(nodes, 1);
    this.bias.randomize();
  }
  predict(input_matrix) {
    let prediction = Matrix.multiply(this.weights, input_matrix);
    prediction.add(this.bias);
    prediction.map(this.parent.activation_function);
    return prediction;
  }
  applyError(prediction, previousPrediction, current_errors) {
    // Calculate the gradients for the layer
    let gradients = Matrix.map(prediction, this.parent.d_activation_function);
    gradients.multiply(current_errors);
    gradients.multiply(this.parent.learning_rate);
    // Calculate deltas
    let previousPredictionTranspose = Matrix.transpose(previousPrediction);
    let weight_deltas = Matrix.multiply(gradients, previousPredictionTranspose);
    //Apply Errors to the weights and the bias
    this.weights.add(weight_deltas);
    this.bias.add(gradients);
    // Calculate the next layer errors
    let weightsTranspose = Matrix.transpose(this.weights);
    current_errors = Matrix.multiply(weightsTranspose, current_errors);
    return current_errors;
  }
}