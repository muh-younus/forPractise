
// practice on object.
const student = {
    Name : "Muhammad Younus",
    age : 23,
    institute : "numl",
    cgpa : 3.1,
    ispass : true,
};

student["age"] = 25;
student["Name"] = "Alina Zehra";


console.log(student);
console.log(typeof[student]);
console.log(student.ispass);
console.log(student["cgpa"]);
//555console.log(student["cgpa"]);

const product = {

    title : "Pen",
    rating : 5,
    price : 270,
    offer : 5
};

product["offer"] =  product["offer"]+3;

console.log(product);




//conditional statement

let colorName = "black";
let color;

if(colorName == "white"){

    color = colorName;
}

else if(colorName == "black"){

    color = colorName;
}

else if(colorName == "yellow"){

    color = colorName;
}
else {

    document.write("invalid Name");
}

document.write("The name of color is:  " +color); // console.log("The name of color is:  " +color);

//Ternary  operator
//work on three operand

let age = 12;

let result = age >= 15 ? "adult" : "Not adult";
console.log(result);

//for of loop

let name = "Muhammad Younus";
let size = 0;

for ( let val of name){

    console.log(val);
    size++;
}

console.log("The size of name is: " + size);

//for array

let num = ['a', 'b','d'];

for(let i of num){

    console.log(i);
    size++;
}

console.log("the length of character  is: ",size);


// for of loop

let stud = {

    name : "Muhammad Younus",
    age : 23,
    roll_number : "SP21452",
    cgpa : 3.4,
}

for (let key in stud){

    console.log("key is: ",key, "value: ",stud[key]);
  
}
stud["age"] =stud["age"]+25;
console.log(stud["age"]);

// guess ransom number

let numb = 55;

let guessNumber = prompt("Pleaes enter correct number");

while(numb != guessNumber){

    guessNumber = prompt("Your enter wrong number");
}

console.log("congratulation! you enter right number: ");

