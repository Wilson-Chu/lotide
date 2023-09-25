const assertEqual = require('../assertEqual');
const head = require('../head.js');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(8, 8.00);
assertEqual('pizza', 'pizza');
assertEqual(42, 24);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), head([0]));