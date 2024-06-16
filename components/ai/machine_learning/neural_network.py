import numpy as np
from keras.models import Sequential
from keras.layers import Dense

class NeuralNetwork:
    def __init__(self, input_dim, hidden_dim, output_dim):
        self.model = Sequential()
        self.model.add(Dense(hidden_dim, activation='relu', input_dim=input_dim))
        self.model.add(Dense(output_dim, activation='softmax'))
        self.model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

    def train(self, X_train, y_train, epochs=10, batch_size=32):
        self.model.fit(X_train, y_train, epochs=epochs, batch_size=batch_size)

    def predict(self, X_test):
        return self.model.predict(X_test)

    def evaluate(self, X_test, y_test):
        loss, accuracy = self.model.evaluate(X_test, y_test)
        return accuracy

# Example usage
nn = NeuralNetwork(input_dim=784, hidden_dim=256, output_dim=10)

# Load MNIST dataset
from keras.datasets import mnist
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Preprocess data
X_train = X_train.reshape(60000, 784)
X_test = X_test.reshape(10000, 784)
X_train = X_train.astype('float32')
X_test = X_test.astype('float32')
X_train /= 255
X_test /= 255
y_train = np_utils.to_categorical(y_train, 10)
y_test = np_utils.to_categorical(y_test, 10)

# Train the network
nn.train(X_train, y_train, epochs=10, batch_size=128)

# Evaluate the network
accuracy = nn.evaluate(X_test, y_test)
print("Accuracy:", accuracy)

# Make predictions
predictions = nn.predict(X_test)
