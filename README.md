
# flexpath-unit-testing-with-jest-exercises

## Exercise overview

These exercises will let you practice writing Unit Tests for a pre-built
application: `bookManager.js`


## Getting Started


1. Using Visual Studio Code, open the folder `flexpath-unit-testing-with-jest-exercises` 
   wherever you saved it on your device. 
2. Then open the `flexpath-unit-testing-with-jest-exercises/exercise` folder. 
   Inside this folder are the following files:
   - `bookManager.js` - a pre-built application that you will be writing tests for
   - `package.json` - manages packages and scripts for the bookManager app
   - `jest.config.js` - configuration file that tells Jest how to behave in this
                        folder
   - `EXERCISE-INSTRUCTIONS.txt` - the instructions for each exercise
   - `tests/bookManager.test.js` - the starting file where you will write your tests.

3. Before you start these exercises, open your VS code terminal,
   navigate inside of the `exercise/` folder, and run `npm install` in the terminal.
   This will install all npm packages required for you to complete these
   exercises.
4. As you work through the exercises outlined in `EXERCISE-INSTRUCTIONS.txt`, you 
   will create tests based on the exercise prompt. Each time you create a test,
   you should run it to ensure your test is behaving as expected.

   There are also some questions that don't require code for an answer. In those
   cases, save your answers for these questions directly inside of the 
   `EXERCISE-INSTRUCTIONS.txt` file.
5. You will run your tests by opening your VS Code terminal, navigating
   inside of the `exercise/` folder using the change directory `cd` command,
   and you will run the following command: `npm run test`.
6. Once you get to exercise 9, feel free to create new `[exercise_xx].test.js`
   files inside of the `/exercise/tests/` folder to organize your code.

   As long as your file name ends with `.test.js` and its in the `tests/` folder,
   Jest will be able to find it and run it when you run `npm run test` in your
   VS code terminal.
                                     

The solutions for these exercises are in their own Github repo.
The link to the GitHub repo is inside of `/solutions/exercise-solutions/solution-repo.txt`.

Make sure to fork the solution repo, THEN clone it to your local device to run the code.

We have also provided a video `jest-exercises.mp4` showing you how to 
run `npm install` in the proper locationand run Jest on your `.test.js` files.

VIDEO DISCLAIMER - You will need to clone the repo to your local device before
you can watch the .mp4 file since GitHub does not support watching it from here.


&nbsp;
---

### Summary of JavaScript Concepts Covered in These Exercises

Exercises instructions are in the EXERCISE-INSTRUCTIONS.txt file

You will be writing your tests inside of `/exercise/tests/bookManager.test.js`

For some of the exercises, feel free to create a new file inside of the 
tests folder to hold its test code.

You can name the new file anything you want, just make sure it is in the `tests` 
folder and the file name follows this format: `[filename].test.js`

Steps to run your tests:
1. Make sure you are inside of the `exercise` folder inside of this repo in your
   VS Code terminal
2. Once you are inside the `exercise` folder, you can run your tests by running
   the command `npm run test`


1. **Unit Testing Fundamentals**:
    
    - The purpose of unit tests and how they fit into the software development lifecycle.
    - Differences between manual testing and automated unit testing.
    - Test-driven development (TDD) and the benefits of writing unit tests first.
2. **Jest Basics**:
    
    - Installing Jest and setting it up for a project using npm.
    - Writing simple unit tests using Jest's `test` and `expect` functions.
    - Understanding matchers and how to use them for various types of assertions.
    - Running Jest tests using the command line and configuring Jest with a configuration file.
3. **Test File Organization**:
    
    - Structuring test files using `describe` blocks to group related tests.
    - Using hooks (`beforeAll`, `afterAll`, `beforeEach`, `afterEach`) to perform setup and teardown tasks.
4. **Common Matchers in Jest**:
    
    - Using matchers like `toBe`, `toEqual`, `toStrictEqual`, `toContain`, `toMatch`, `toBeTruthy`, `toBeFalsy`, and `toThrow`.
    - Differences between strict and loose equality checks in Jest.
5. **Mocking and Spying**:
    
    - Creating mock functions to isolate tests and avoid dependencies on external services.
    - Using Jest's automock feature to automatically mock modules.
    - Writing manual mocks to customize the behavior of mocked functions.
    - Using spies to monitor calls to functions and assert they were called correctly.
6. **Testing Asynchronous Code**:
    
    - Writing tests for asynchronous functions using Promises, async/await, and callbacks.
    - Using Jest's `resolves` and `rejects` for testing promise-based code.
    - Ensuring tests wait for asynchronous code to complete using Jest's `done` callback.
7. **Code Coverage**:
    
    - Measuring code coverage and understanding metrics like statement, branch, function, and line coverage.
    - Collecting coverage statistics using Jest and configuring thresholds to enforce code quality.
