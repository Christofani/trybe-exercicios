
let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student,'nome','Rodrigo Cesar Christofani Junior');
addProperty(student,'email','christofanir@gmail.com');
addProperty(student,'telefone','11-97744-7662');
addProperty(student,'linkedIn','https://www.linkedin.com/in/devchristofani/');
addProperty(student,'Github','https://github.com/Christofani')

console.table(student)