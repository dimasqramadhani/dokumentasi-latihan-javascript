# **Destructuring Array and Object**

This project contains JavaScript exercises to practice destructuring arrays and objects. The goal is to extract values efficiently using **ES6** destructuring syntax.

### **Practice 1: Object Destructuring**

#### **Task:**

- Extract `name`, `age`, and `city` property from the `user` object and display them in the **console**.

#### **Practice 1 Data:**

```javascript
const user = {
    name: 'Dimasqi Ramadhani',
    age: 23,
    address: {
        city: 'Bontang',
        country: 'Indonesia'
    }
};
```

#### **Result:**
The result should look like this:
```bash
name: Dimasqi Ramadhani  
age: 23  
city: Balikpapan  
```

### **Practice 2: Array and Object Destructuring**

#### **Task:**

- Extract the first employee's `name` and `position` property.

- Extract the second employee's `salary` property using the variable `secondSalary`.

- Extract only the last data employee.

#### **Practice 2 Data:**
```javascript
const employee = [
    { id: 1, name: 'Alya', position: 'Developer', salary: 8000 },
    { id: 2, name: 'Raka', position: 'Designer', salary: 7500 },
    { id: 3, name: 'Sinta', position: 'Manager', salary: 10000 }
];
```

#### **Result:**
The result should look like this: 
```bash
name: Alya, position: Developer  
second employee's salary: 7500  
last employee: { id: 3, name: 'Sinta', position: 'Manager', salary: 10000 }
```

### **Practice 3: Advanced Destructuring**

#### **Task:**

- Extract the `name` and `location` property of the `company` object.

- Extract the second employee's `name` and `position` property.

- Extract the first employee's `skill` property.

- Extract the `revenue` property for the year 2024 using variable `revenue2024`.

- Use the rest operator `...` to keep `employees` property except the first one in variable `otherEmployees`.

#### **Practice 3 Data:**

```javascript
const company = {
    name: 'Tech Corp',
    location: 'Jakarta',
    employees: [
        { id: 1, name: 'Alya', position: 'Developer', salary: 8000, skills: ['JavaScript', 'React', 'Node.js'] },
        { id: 2, name: 'Raka', position: 'Designer', salary: 7500, skills: ['Figma', 'Adobe XD', 'Illustrator'] },
        { id: 3, name: 'Sinta', position: 'Manager', salary: 10000, skills: ['Leadership', 'Communication', 'Strategy'] }
    ],
    revenue: {
        year2023: 500000,
        year2024: 600000
    }
};
```

#### **Result:**
The result should look like this:

```bash
company: Tech Corp, location: Jakarta  
second employee's name: Raka, position: Designer  
first employee's skills: JavaScript  
revenue 2024: 600000  
another employee: [ 
  { id: 2, name: 'Raka', position: 'Designer', salary: 7500, skills: [Array] }, 
  { id: 3, name: 'Sinta', position: 'Manager', salary: 10000, skills: [Array] }
]

```

## **How to Run?**

1. Copy the JavaScript code from any practice section, i already commented each practice in this code.

2. if you use this file inside this repo, comment another practice before you want to try each practice to avoid some error.

3. if not, **copy** and **paste** this script to your own file `script.js` and linked to your html `index.html` file.

4. open your browser with your own html `index.html` file, open **inspect** and find **console** to see the result.

## **Summary**

This practice helps in understanding how to efficiently extract data from objects and arrays using destructuring in JavaScript. Happy coding!

## **Author**
Dimasqi Ramadhani
