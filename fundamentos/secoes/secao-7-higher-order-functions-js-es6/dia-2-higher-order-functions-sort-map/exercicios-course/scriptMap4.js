const students = [
    {
      firstName: 'João',
      lastName: 'Silva',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      firstName: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      period: 'Tarde',
      subjects: [
        { name: 'Matemática', grade: '59' },
        { name: 'Português', grade: '80' },
        { name: 'Química', grade: '78' },
        { name: 'Biologia', grade: '92' },
      ],
    },
    {
      firstName: 'Jorge',
      lastName: 'Santos',
      age: 15,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '76' },
        { name: 'Português', grade: '90' },
        { name: 'Química', grade: '70' },
        { name: 'Biologia', grade: '80' },
      ],
    },
    {
      firstName: 'Maria',
      lastName: 'Silveira',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '91' },
        { name: 'Português', grade: '85' },
        { name: 'Química', grade: '92' },
        { name: 'Biologia', grade: '90' },
      ],
    },
    {
      firstName: 'Natalia',
      lastName: 'Castro',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '70' },
        { name: 'Português', grade: '70' },
        { name: 'Química', grade: '60' },
        { name: 'Biologia', grade: '50' },
      ],
    },
    {
      firstName: 'Wilson',
      lastName: 'Martins',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '80' },
        { name: 'Português', grade: '82' },
        { name: 'Química', grade: '79' },
        { name: 'Biologia', grade: '75' },
      ],
    },
  ];

//   const findStudent = (name, students) => {
//     for (let index = 0; index < students.length; index += 1) {
//       if (students[index].firstName === name) {
//         return students[index];
//       }
//     }
//   };
  
//   const reportStatus = (name, students) => {
//     const getStudent = findStudent(name, students);
//     const report = [];
//     for (let index = 0; index < getStudent.subjects.length; index += 1) {
//       if (getStudent.subjects[index].grade >= 60) {
//         report.push(`${getStudent.subjects[index].name} - Aprovado`);
//       } else {
//         report.push(`${getStudent.subjects[index].name} - Reprovado`);
//       }
//     }
//     return report;
//   };
  
const reportStatus = (name,students) => {
    const infoStudent = students.find((student) => student.firstName === name);
    return infoStudent.subjects.map((subject) => (`${subject.name} - ${(subject.grade >= 60)? 'Aprovado':'Reprovado'}`))
};
console.log(reportStatus('Wilson', students));
// O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar
//  os dados da pessoa estudante. O objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado
//  para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.
  