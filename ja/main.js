// ! дестуриктизация 


// let user = {
//     name: "Aisultan",
//     age: 20,
//     language: {
//         english: "2 level",
//         french: "3 level"
//     },
// };

//let user2 = user // это не копирование
// Поверхностное копирование корректно работает тогда, когда нет вложенных обьектов, либо массивов

// let user2 = { ...user } // точки это spread(распаковщик)  оператор
// console.log(user);
// user2.name = "Beka";
// user2.age = 26;
// user2.language.english = "6 level"


// console.log(user2);


// ! ГЛУБОКОЕ КОПИРОВАНИЕ происходит за счет того, что мы приводим наш обьект в строку и в этот мосент обрываеться связь с исходным обьектом, затем мы из строки делаем наш формат
// ! JSON.stringify() приводит в строку
// ! JSON.parse() из строки в наш формат

// let user = {
//     name: "Aisultan",
//     age: 20,
//     language: {
//         english: "2 level",
//         french: "3 level"
//     },
// };

// let user2 = JSON.parse(JSON.stringify(user))
// user2.name = "Bakyt";
// user2.language.french = "advanced"

// user2.language.russian = "1 level"

// user.language.chinese = "6 HSK"
// console.log(user);
// console.log(user2);


// ! Дестркутиризация Это специальный синтаксис, при помощи которого мы можем брать свойства у обЬектов либо же элементов у массивов и сразу же из записывать в переменных.

// let student = {
//     name: "Melis",
//     lastName: "Batyrov",
// }

// let studentName = student.name

// let studentLastName = student.lastName

// // console.log(studentLastName)

// let { name, lastName } = student;
// console.log(name, lastName);


// let student2 = {
//     name: "Aibek",
//     lastName: "Sapashov"
// }

// let { name: student2Name, lastName: student2LastName } = student2

// console.log(student2Name, student2LastName);



// let library = {
//     title: "Bootstrap",
//     version: {
//         first: "2015",
//         second: "2013",
//         third: "2021"
//     }
// }

// let { version: { first: firstVersion, third: thirdVersion } } = library

// console.log(firstVersion, thirdVersion);


// let arr = ["true", 10, 77, false]

// let [boolean, num, , bool] = arr


// console.log(boolean, num, bool);


// let nums = [43, 55, 86, 90, 115];

// let [first, third, ...rest] = nums;
// console.log(first, third, rest);

// let project = {
//     name: "Narket Place",
//     frameworks: ["Anugular", "Djano API"],
//     libriraries: ["React", "Express JS"],
//     team: {
//         frontEnd: ["JS15", "JS13"],
//         backEnd: ["PY-16", "PY-7-EN"],
//     }
// }

// let { libriraries: secondLibrary
//  } = project;

// console.log(secondLibrary)


// let obj = {
//     title: "h2",
//     subTitle: "h3",

// }


// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.


let user = {
    name: "Jonh",
    // age: 22
}

let { name, age = prompt("Enter age") } = user

console.log(name, age);