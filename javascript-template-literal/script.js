// practice 1
const students1 = [
    {
        name: 'Dimasqi Ramadhani',
        email: 'dimasqiramadhani@gmail.com'
    },
    {
        name: 'Bintang Cantika Ayuni',
        email: 'bintangcantikaayuni@gmail.com'
    },
    {
        name: 'Sigit Hari Prasetyo',
        email: 'sigithariprasetyo@gmail.com'
    }
];

const element1 = `
<div class="students">
    ${students1.map(s => `
    <ul>
        <li>name: ${s.name}</li>
        <li>email: ${s.email}</li>
    </ul>`).join('')}
</div>`;

document.body.innerHTML = element1;


// practice 2
const song = {
    title: 'Tetap Dalam Jiwa',
    singer: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
};

const element2 = `<div class="song">
    <ul>
        <li>song: ${song.title}</li>
        <li>singer: ${song.singer} ${song.feat ? `(feat. ${song.feat})` : ``}</li>
    </ul>
</div>`;

document.body.innerHTML = element2;


// practice 3
const student2 = {
    name: 'Dimasqi Ramadhani',
    semester: 5,
    courses: [
        'web engineering',
        'information systems analysis and design',
        'interactive systems programming',
        'object-oriented system design'
    ]
};

function renderCourses(courses) {
    return `
    <ol>
        ${courses.map(course => `<li>${course}</li>`).join('')}
    </ol>
    `;
}

const element3 = `
<div class="student">
    <p>Name: ${student2.name}</p>
    <p>Semester: ${student2.semester}</p>
    <p>Courses: ${renderCourses(student2.courses)}</p>
</div>
`;

document.body.innerHTML = element3;
