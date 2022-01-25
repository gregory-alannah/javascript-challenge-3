// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function run () {
    const run = "Today's exercise: running"; 
    return run;
};
function swim () {
    const swim = "Today's exercise: swimming"; 
    return swim;
};
console.log(run()); 
console.log(swim());


// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                        // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//prints "Each person gets 2.67 slices of pizza"

function sharePizza (x) {
    const cutPizzaSlices = x; 
    const division = 2; 
    result = cutPizzaSlices / division; 
    return `Each person should get ${result} pizza slices`; 
}; 
console.log(sharePizza(8));
console.log(sharePizza(3));


// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

class Security {
    firstName; 
    constructor(){
        this.firstName = "John"; // acessible     
    };
    #socialSecurityNum() {
        this.ssN =  "000-00-0000"; //accessible without # and unacessiable with #  
    };
};

const pii = new Security(); 
console.log(pii.firstName)
console.log(pii.socialSecurityNum)


// VERY HARD: Object prototype chain and prototypal inheritance exercise.

// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

class Person {
    constructor(firstName, job, age) {
        this.firstName = firstName; 
        this.job = job; 
        this.age = age; 
        
    }

    exercise() {
        console.log(`${this.firstName} is mountain climbing`);
    }

    fetchJob() {
        console.log(`${this.firstName} is a back-end developer `);
    }
}

class Programmer {
    constructor(firstName, job, age, languages, learnLangauges) {
        this.firstName = firstName; 
        this.job = job; 
        this.age = age; 
        this.languages = languages; 
        let busy = true;  
    }
    completeTask() {
        busy = false; 
    }

    acceptNewTask() {
        busy = true; 
    }

    offerNewTask(){
        if(this.isBusy) {
        this.isBusy = true;
        console.log(`${this.firstName} can't accept any new tasks right now`);

        }
        else {
            console.log(`${this.firstName} would love to take on a new responsibility `);
        }
    }

    listLangauges(){
        let learnLangauges  =  ["English"];
        this.firstName = learnLangauges;
        let newLangauges = ["Spanish", "French", "Japanese"];
        console.log("John knows " + learnLangauges + " " +  newLangauges );
     
    }
 }

const john = new Programmer("John");
john.offerNewTask();
john.listLangauges();
john.listLangauges;



