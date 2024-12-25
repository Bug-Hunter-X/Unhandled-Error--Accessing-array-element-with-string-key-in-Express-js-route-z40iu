# Unhandled Error: Accessing array element with string key in Express.js route

This repository demonstrates a common error in Express.js applications: directly accessing array elements using string keys from request parameters without proper error handling.  This can lead to unexpected errors if the provided key does not exist in the array.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version with improved error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js`. 
5. Access the route `/users/1` (this will work).
6. Access the route `/users/5` (this will cause an error because we haven't defined user with ID 5).

## Solution

The solution involves adding error handling to check if the user ID exists before accessing the array element.  This is demonstrated in `bugSolution.js`.