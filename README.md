# Flashcards Solo Project

## Overview: 

This project sought to hone and refine the tenets of OOP through classes, as well the principals of TDD and SRP. The end result is a flashcards game that exists on the CLI (command line interface) where a user is prompted with a question, presented three options to select from, and outputted a result of whether their guess was correct or not. Repeating until all objects in the deck have been cycled through. 

### GAMEPLAY

Users will be able to play through a deck of 30 cards, prompted with questions regarding Javascript array prototype methods, objects, functions, and arrays. As each card generates to the terminal the user is presented with a question and three options to choose from.

![flashcards-start](https://user-images.githubusercontent.com/27719824/66172023-9b873600-e607-11e9-8061-bf4b2bffba93.gif)

 Using the arrow keys they can select their guess and hit enter to submit. Once submitted the terminal will output a message informing whether or not the user's guess was correct. User will need to hit enter to proceed to the next question.

![flashcards-gameplay](https://user-images.githubusercontent.com/27719824/66172049-ba85c800-e607-11e9-81c4-42691c6927bd.gif)

After all cards in the deck have been attempted, a message will output indicating that the round is over and what percentage of questions were answered correctly.

![flashcards-roundover](https://user-images.githubusercontent.com/27719824/66172098-cf625b80-e607-11e9-8e26-75dba7fd06da.gif)


### SETUP INSTRUCTIONS

To set up and play, create a directory in your terminal that you would like the game to reside. Once you have changed into that directory enter 
``` git clone https://github.com/JamesRexMiller4/flashcards-starter.git ```

Next run 
``` npm install ```

This will install node.js onto your terminal and allow you to play. Once all dependecies have been added run 

``` node index.js ```

And the game will begin. Happy Coding!
