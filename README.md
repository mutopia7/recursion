# Recursion Algorithms

Welcome to the **Recursion Algorithms** repository! 🔄

This project showcases recursive and iterative approaches to two popular problems: **Fibonacci sequence generation** and **Merge Sort**. Each problem is implemented in JavaScript and demonstrates the power of recursion in problem-solving.

## 📚 What's Included?

### 🔢 Fibonacci Sequence (`fibs.js`)
This file contains:
- **`fibs(num)`**: Generates the first `num` Fibonacci numbers using an iterative approach.
- **`fibsRec(num, memo)`**: Generates the first `num` Fibonacci numbers using a recursive approach with memoization for optimization.

#### Example:
```javascript
console.log(fibs(9));      // Output: [0,1,1,2,3,5,8,13,21]
console.log(fibsRec(9));   // Output: [0,1,1,2,3,5,8,13,21]


# Merge Sort Algorithm

This repository contains an implementation of the **Merge Sort** algorithm in JavaScript. Merge Sort is an efficient, general-purpose, comparison-based sorting algorithm that uses a divide-and-conquer approach to recursively split the array and merge sorted subarrays.

## 📚 How It Works
1. **Divide**: The input array is recursively divided into two halves until each subarray contains a single element (or no elements).
2. **Conquer**: The sorted subarrays are merged together by comparing elements and creating a new sorted array.
3. **Combine**: This process continues until all subarrays are merged into a fully sorted array.

### 🧩 Key Functions
- **`mergeSort(array)`**: Recursively splits and sorts the array.
- **`merge(leftArray, rightArray)`**: Merges two sorted arrays into a single sorted array.

## 💻 Example Usage
```javascript
let sample = [105, 79, 100, 110];
console.log(mergeSort(sample));  // Output: [79, 100, 105, 110]
