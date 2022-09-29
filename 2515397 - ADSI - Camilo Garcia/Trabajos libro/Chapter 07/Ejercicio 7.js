class Person { 
    constructor(firstname, lastname) { 
    this.firstname = firstname; 
    this.lastname = lastname; 
    } 
} 
let person1 = new Person("Maaike", "van Putten");
let person2 = new Person("Laurence", "Svekis");
console.log("hello " + person1.firstname);
console.log("hello " + person2.firstname);

class Person { 
    constructor(firstname, lastname) { 
    this.firstname = firstname; 
    this.lastname = lastname;
    } 
    fullname(){
        return this.firstname + " " + this.lastname;
    }
} 
let persona1 = new Person("Maaike", "van Putten");
let persona2 = new Person("Laurence", "Svekis");
console.log(person1.fullname());
console.log(person2.fullname());

class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.eat = function () {
    return this.species + " is eating";
}
let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");
cat.speak();
console.log(dog.eat());
console.log(dog);
