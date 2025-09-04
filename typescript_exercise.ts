
/*
//Exercise 1:
// declare types above arrow functions
type IDType = number | string;

const showID = (personalId: IDType) => {
    return `Your ID is: ${personalId}`;
};

console.log(showID("lars"));
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


    //2 .Exercise 1:
    
    interface Book {
        title: string;
        pages: number;
        }   

const describeBook = (book: Book) => {
console.log(`The book ${book.title} has ${book.pages} pages`);}

describeBook({
    title: "No Logo", pages: 324 
});
  

    //2. Exercise 2:

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



    //2. Exercise 3:

interface Car {
    brand: string
    year: number
}

const printCar = (car:Car) =>
    console.log (`My favorite car is a " ${car.year} ${car.brand}`)

printCar({brand: "Plymouth Special Deluxe", year: 1946})

 //3. Exercise 1:


enum ColorChoice {
    Red,
    Green,
    Blue,
}


const ColorAction = (color: ColorChoice)=>
 {

  if (color === ColorChoice.Red) {
        console.log ("You chose Red!")
    } else if (color === ColorChoice.Green) {
        console.log ("You chose Green!")
    } else if (color === ColorChoice.Blue) {
        console.log ("You chose Blue!")
    }
}
ColorAction (ColorChoice.Green)


//3. Exercise 2:

enum PizzaSize {
    Small,
    Medium,
    Large,
}

const OrderPizza = (size: PizzaSize)=>
    
{
if (size === PizzaSize.Small) {
    console.log (`You ordered a small pizza`)
} else if (size === PizzaSize.Medium) {
    console.log ("You ordered a small pizza")
} else if (size === PizzaSize.Large) {
    console.log ("You ordered a small pizza")
}}


OrderPizza (PizzaSize.Small)




   
   
    //3. Exercise 3:

    enum Role {
        Admin,
        User,
        Guest,
    }
    
    const StatusCheck = (role: Role)=>
        
    {
    if (role === Role.Admin) {
        console.log (`You have full access`)
    } else if (size === Role.User) {
        console.log ("You have limited access")
    } else if (size === Role.Guest) {
        console.log ("You have guest access")
    }}
    
    
    StatusCheck (Role.Guest)


 

//4. Generics

const WrapInArray = <T>(input: T): T[] =>
    { return [input];
    }
    
    console.log(WrapInArray("cat"));

    

///////
    //map first item?

    
    


const FirstItem = <T>(array: T[]): T => {
  return array[0];
};

console.log(FirstItem([1,2,3]));
console.log(FirstItem(["a","b,","c"]));





const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));





// Expected output: 3



//////// .reverse er at swappe

const SwapArray = <T>(input1: T, input2: T): T[] =>
    { return [input2, input1];
    }
    
    console.log(SwapArray("hello", "world"));
    
    

/*
const firstItem = <T>(arrray: T[]) =>
    return Array
console
swap swaps two numbers 1,2 */
