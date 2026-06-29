# Simon Game

A classic, fully responsive Simon memory game built from scratch using strict HTML, CSS, and JavaScript. 

This project focuses on clean state management, optimized DOM manipulation, and style CSS animations without relying on external libraries.

## Live Demo
You can play the game here: [https://aman-2698.github.io/simon-say-game/]

## Features
* **Dynamic Sequence Generation:** Uses randomized arrays to generate progressively difficult memory sequences.
* **Persistent High Score:** Tracks current score and overall session high score.
* **Arcade Visual Feedback:** Custom CSS `@keyframes` create a violent "Screen Shake" effect upon game over.
* **Strict Input Validation:** Guard clauses prevent bugs from accidental clicks outside the game area or during system pauses.

## Technical Highlights
As an engineering exercise, this project was built with a focus on performance and clean architecture:
* **Event Delegation:** Instead of attaching individual listeners to every color block, a single master `click` listener is attached to the `document`. It uses `e.target` and array checking to route logic, significantly reducing memory overhead.
* **Synchronized State Management:** Game states (`started`, `level`, `currentCombination`) are tightly controlled to prevent race conditions (e.g., users clicking buttons before the game has officially initialized a level).
* **DOM Reflow Optimization:** Visual flashes and state changes use asynchronous `setTimeout` queues to ensure the browser rendering engine paints frames smoothly.

## How to Run Locally
1. Download or clone this code to your computer.
2. Open the index.html file in any web browser to start playing.