
# flexpath-unit-testing-with-jest-exercises

## [Getting Started]

- include gifs here
- Include relevant steps to run exercise files or start the app
- "Open the file located at exercise-repo-name/whatever in VS Code"

- Also, include instructions on how to open their terminal in 

- WHILE DOING THIS, LOOK OUT FOR ANY POTENTIAL WINDOWS FILE PATH ISSUES in exercises


## Exercise overview

Give quick overview about context of exercises and their intention


## Specific exercises listed in numbered order

Add disclaimer if exercises are stored inside of specific files as comments

Also, for a plain text reference, theres always the `EXERCISE-INSTRUCTIONS` files to pop open

To answer questions that don't require coding, please create a file in the repo named 
[exercise_number_answer].txt.

For example, if in one of the exercise repos question 13 just asked a question to explain a programming concept, store your answer inside of a new file named exercise_13_answer.txt.

## Testing / Verification

Include relevant details here about where solution files are stored

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
