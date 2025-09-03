

//Exercise 1:
// declare types above arrow functions
type IDType = number | string;

const showID = (personalId: IDType) => {
    return `Your ID is: ${personalId}`;
};

console.log(showID("lars123"));
console.log(showID(123))



//Exercize 2:

type fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: fruit) => {
    console.log("You at and " + fruit)
};

eatFruit("apple");
eatFruit("orange");


//const typeFruit = (apple: string | banana: string): string => {
 //   return `You ate an ${fruit}`;
//};


//Exercise 3:

type result = true | false;

const printResult = (result: result) => {

    if (result === true) {
        console.log("Pass");
    }
    else { console.log("Fail");
    };
};

    printResult(true);


    //Exercise 4:
    
    interface Book {
        title: string;
        pages: number;
        }   

        type SchoolTeacher = Teacher & Employee;

const describeBook = (schoolTeacher: SchoolTeacher) => {
console.log(`The book ${bookType.name} has ${schoolTeacher.subject}`);}

printTeacherInfo({
    name: "Michiel", subject: "Backend development", email: "m@m.se", id: 123 
});
  

    //Exercise 5:

    interface Teacher {
        name: string;
        subject: string;
        }

    interface Employee {
        email: string;
        id: number;
        }


type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (schoolTeacher: SchoolTeacher) => {
console.log(`Name: ${schoolTeacher.name} subject: ${schoolTeacher.subject} email: ${schoolTeacher.email} id: ${schoolTeacher.id}`);}

printTeacherInfo({
    name: "Michiel", subject: "Backend development", email: "m@m.se", id: 123 
});