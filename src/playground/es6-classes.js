class Person {

    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `this is ${this.name} and age is ${this.age}`;
    }

}

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    getGreeting(){
        let description=super.getGreeting();

        if(!!this.homeLocation){
            description+=`. This is home location ${this.homeLocation}`;
        }
        return description;
    }
}


// const person =new Person();
// person.getGreeting();

// const person2=new Person('dummy',99);
// person2.getGreeting();


const travel1=new Traveller('maja',99,'USA');
console.log(travel1.getGreeting());


const travel2= new Traveller();
console.log(travel2.getGreeting())  ;

