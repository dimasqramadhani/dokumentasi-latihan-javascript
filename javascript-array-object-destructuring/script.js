`
    practice 1

    use destructuring for take name, age, city from object data, then display the data into console.
`
// user data
const user = {
    name: 'Dimasqi Ramadhani',
    age: 23,
    address: {
        city: 'Bontang',
        country: 'Indonesia'
    }
};

// answer
const {name, age, address: {city}} = user;
console.log(`
name: ${name}
age: ${age}
city: ${city}
`);

`
    practice 2

    use array and object destructuring for:
    
    1). take the first employee name and position data.
    2). take the second employee salary using secondSalary variable name.
    3). take last employee data.
`
// employee's data
const employee = [
    {
        id: 1,
        name: 'Alya',
        position: 'Developer',
        salary: 8000
    },
    {
        id: 2,
        name: 'Raka',
        position: 'Designer',
        salary: 7500
    },
    {
        id: 3,
        name: 'Sinta',
        position: 'Manager',
        salary: 10000
    }

];

// 1. take first employee data (name and position)
const [{name: firstName, position: firstPosition}] = employee;
console.log(`name: ${firstName}, position: ${firstPosition}`);

// 2. take second employee data (salary)
const [, {salary: secondSalary}] = employee;
console.log(`second employee salary: ${secondSalary}`);

// 3. take all last employee data
const [, , lastEmployee] = employee;
console.log('last employee:',lastEmployee);

`
    practice 3

    use destructuring for:

    1). take name and location company
    2). take the second name and employee position
    3). take first employee skill
    4). take 2024 revenue with variable name revenue2024
    5). use rest operator (...) to keep employee beside first employee in variable otherEmployees
`
// company data
const company = {
    name: 'Tech Corp',
    location: 'Jakarta',
    employees: [
        {id: 1, name: 'Alya', position: 'Developer', salary: 8000, skills: ['JavaScript', 'React', 'Node.js']},
        {id: 2, name: 'Raka', position: 'Designer', salary: 7500, skills: ['Figma', 'Adobe XD', 'Illustrator']},
        {id: 3, name: 'Sinta', position: 'Manager', salary: 10000, skills: ['Leadership', 'Communication', 'Strategy']}
    ],
    revenue: {
        year2023: 500000,
        year2024: 600000 
    }
}; 

// take the company data (name and location)
const {name:companyName, location:companyLocation} = company;
console.log(`company: ${companyName}, location: ${companyLocation}`);

// take the employee name and position
const {employees: [, {name: secondEmployeeName, position: secondEmployeePosition}]}= company;
console.log(`second employee's name: ${secondEmployeeName}, position: ${secondEmployeePosition}`);

// take first employee skill
const {employees: [{skills: [firstSkill]}]} = company;
console.log(`first employee skills: ${firstSkill}`);

// take 2024 year revenue
const {revenue: {year2024:revenue2024}} = company;
console.log(`revenue 2024: ${revenue2024}`);

// Another Employee
const {employees: [, ...otherEmployees]} = company;
console.log('another employee:',otherEmployees);
