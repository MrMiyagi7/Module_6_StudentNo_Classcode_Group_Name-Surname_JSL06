# [JSL06] Submission: CodeCuisine Menu Display System Challenge

# Menu and Order System

## Overview

This project is a simple menu and order system implemented using JavaScript. It dynamically populates menu items on the webpage and allows users to add items to their order. The total price is automatically calculated and updated. The project demonstrates the use of functions, callbacks, closures, function expressions, and anonymous functions.

## Objectives

- Create and use functions to dynamically populate the menu items on the page.
- Implement a callback function to handle adding items to the order.
- Use closures to maintain the state of the order.
- Utilize function expressions and anonymous functions.
- Call built-in functions and create custom functions to manage the menu and order system.

## File Structure

- index.html: Contains the HTML structure and includes the JavaScript script.
- style.css: Optional file for additional styling.
- script.js: Contains the JavaScript code to manage the menu and order system.

# Instructions

## HTML Structure

The HTML file defines the structure for the menu and order display, including sections for the menu and the order.

## JavaScript Code

1. Create and use functions to dynamically populate the menu items on the page
   The displayMenuItems function iterates over the menu object and creates HTML elements to display the categories and their respective items.

2. Implement a callback function to handle adding items to the order
   The addToOrder function is used as a callback to handle the click event on menu items.

3. Use closures to maintain the state of the order
   The state of the order (total price) is maintained through the closure created by the addToOrder function. The function updates the total price each time a new item is added to the order.

4. Utilize function expressions and anonymous functions
   Anonymous functions are used as event handlers for the click events on menu items.

5. Call built-in functions and create custom functions to manage the menu and order system
   The code makes use of several built-in functions such as querySelector, createElement, forEach, and textContent. Custom functions (displayMenuItems and addToOrder) are created to manage the menu and order system.

## Initialization

The initMenuSystem function initializes the menu system by calling displayMenuItems.

## Running the Project

- Open index.html in a web browser.
- The menu items will be displayed under the "Menu" section.
- Click on a menu item to add it to the order.
- The selected items will be listed under the "Order" section, and the total price will be updated accordingly.

# Conclusion

This project demonstrates how to dynamically populate a webpage with data, handle user interactions with callback functions, and maintain state using closures. The use of function expressions and anonymous functions adds flexibility and conciseness to the code.
