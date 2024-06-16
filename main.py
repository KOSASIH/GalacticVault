#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
GalacticVault Main Script

This script serves as the entry point for the GalacticVault project, a cutting-edge AI platform.
It provides a robust command-line interface to interact with the AI-related modules, featuring:

* Modular architecture with dependency injection
* Type hints and docstrings for improved code readability
* Advanced logging with log rotation and error handling
* Support for multiple AI models and frameworks
* Integration with popular libraries for image and natural language processing
* Command-line argument parsing with validation and help messages

Usage:
    python main.py [command] [options]

Commands:
    image_segmentation  Perform image segmentation using the AI module
    natural_language_processing  Perform natural language processing using the AI module
    train_model  Train a new AI model using the specified dataset
    evaluate_model  Evaluate the performance of a trained AI model
    help  Display this help message

Options:
    -h, --help  Display this help message
    -v, --verbose  Enable verbose mode
    -m, --model  Specify the AI model to use (e.g., tensorflow, pytorch)
    -d, --dataset  Specify the dataset to use for training or evaluation
    -c, --config  Specify the configuration file for the AI module
"""

import argparse
import logging
import logging.config
import os
import sys
from typing import Dict, List

# Set up logging with log rotation and error handling
logging.config.fileConfig('logging.conf')
logger = logging.getLogger(__name__)

# Import AI-related modules with type hints
from src.ai.image_segmentation import ImageSegmentation
from src.ai.natural_language_processing import NaturalLanguageProcessing
from src.ai.model_trainer import ModelTrainer
from src.ai.model_evaluator import ModelEvaluator

# Define a dictionary to store AI models and their corresponding frameworks
ai_models: Dict[str, str] = {
    'tensorflow': 'TensorFlow',
    'pytorch': 'PyTorch',
    'klearn': 'Scikit-Learn'
}

def main():
    # Parse command-line arguments with validation and help messages
    parser = argparse.ArgumentParser(description="GalacticVault Main Script")
    parser.add_argument("command", help="Command to execute")
    parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose mode")
    parser.add_argument("-m", "--model", choices=list(ai_models.keys()), help="Specify the AI model to use")
    parser.add_argument("-d", "--dataset", help="Specify the dataset to use for training or evaluation")
    parser.add_argument("-c", "--config", help="Specify the configuration file for the AI module")
    args = parser.parse_args()

    # Set up verbose mode
    if args.verbose:
        logger.setLevel(logging.DEBUG)

    # Execute the specified command
    if args.command == "image_segmentation":
        image_segmentation = ImageSegmentation(args.config)
        image_segmentation.run()
    elif args.command == "natural_language_processing":
        natural_language_processing = NaturalLanguageProcessing(args.config)
        natural_language_processing.run()
    elif args.command == "train_model":
        model_trainer = ModelTrainer(args.model, args.dataset, args.config)
        model_trainer.train()
    elif args.command == "evaluate_model":
        model_evaluator = ModelEvaluator(args.model, args.dataset, args.config)
        model_evaluator.evaluate()
    elif args.command == "help":
        parser.print_help()
    else:
        logger.error("Invalid command: {}".format(args.command))
        parser.print_help()
        sys.exit(1)

if __name__ == "__main__":
    main()
