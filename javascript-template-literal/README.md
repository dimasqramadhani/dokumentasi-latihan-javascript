# Template Literal in JavaScript

This repository contains three JavaScript exercises that demonstrate the use of objects, arrays, and template literals to dynamically generate HTML content.

## Practice 1: Student List

This exercise creates an array of students, each with a name and email. The student data is then dynamically rendered as an unordered list inside a `<div>` element.

### Code Explanation:
- The `students1` array stores student objects.
- The `map()` function iterates through the array and generates HTML list elements.
- The generated HTML is inserted into the `document.body`.

## Practice 2: Song Information

This exercise defines an object representing a song with properties such as title, singer, and featured artist. The song information is displayed in an unordered list inside a `<div>` element.

### Code Explanation:
- The `song` object contains the song's `title`, `singer`, and optional `feat` property.
- A template literal dynamically constructs the HTML content.
- The `document.body.innerHTML` is updated with the generated song details.

## Practice 3: Student Courses

This exercise defines a student object with details such as name, semester, and a list of courses. The courses are displayed as an ordered list inside a `<div>` element.

### Code Explanation:
- The `student2` object contains the student's information.
- The `renderCourses()` function uses the `map()` function to create an ordered list of courses.
- The `document.body.innerHTML` is updated with the generated student information and course list.

## How to Run
Simply copy and paste the code into an HTML file within a `<script>` tag or link it as an external JavaScript file, comment `<!- -->`one of the practice code in javascript file if you want to see each practice. 

I already signed it each practice with comment so you can see easily know part of the code, 

then open the HTML file in a web browser.

## Author
Dimasqi Ramadhani

