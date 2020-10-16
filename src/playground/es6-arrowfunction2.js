const multiplier ={
     numbers: [5,21,32],
     muliplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num*this.muliplyBy);
    }
};


console.log(multiplier.multiply());