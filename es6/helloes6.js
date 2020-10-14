console.log("app started");

//javascript eventloop and messaging model
//closure
//webpack sourcemap - debugging

//async execution
setTimeout(function () {
  console.log("some task");
}, 100);

//using var (loop scope)
for (var index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log("app ended with var", index);
  }, 100 * index);
}

// using let (block scope or global scoped)
for (let index = 0; index < 5; index++) {
  setTimeout(function () {
    console.log("app ended with let", index);
  }, 100 * index);
}

//const --> readonly block scope variable
//const only detects change in reference
//object mutability is allowed
const a = 10;
// a=11; // throws error
const obj = { name: "arnab", age: 36 };
obj.age = 37;
console.log(obj);
// obj = {name:'arnab', age:37}; //ERROR: object reference changes for a const type
//immutability of objects
//objects and arrays are mutable in default

//literal destructuring
function user(firstname, lastname) {
  return {
    firstname,
    lastname,
    fullname: firstname + " " + lastname,
  };
}
const { firstname, fullname: name } = user("arnab", "bhattacharya"); // aliasing fullname as name
// console.log(fullname); //ERROR: as we are aliasing fullname as name
console.log(name);

const obj1 = {
  b: {
    c: {
      d: "arnab",
    },
  },
};

const { d } = obj1.b.c;
console.log(d);

//arrow function
//It takes scope of it's outer block
//Use this whenever using asynchrounous call
//context binding - arrow function

const person = {
  name: "mike",
  age: 13,
  greeting: function () {
    console.log("outside timeout(async)", this);
    setTimeout(function () {
      console.log("inside timeout(async)", this);
      console.log("hello from ", this.name);
    }, 2000);
  },
};

person.greeting();

const person2 = {
  name: "mike",
  age: 13,
  greeting: function () {
    console.log("outside timeout(async)", this);
    setTimeout(() => {
      console.log("inside timeout(async) arrow function", this);
      console.log("hello from ", this.name);
    }, 2000);
  },
};

person2.greeting();

const person3 = {
  name: "mike",
  age: 13,
  greeting: () => {
    console.log("outside timeout(async) arrow", this); //use scope of it's parent i.e. parent scope of person3 -> windows DOM
    setTimeout(() => {
      console.log("inside timeout(async) arrow function arrow function", this);
      console.log("hello from ", this.name);
    }, 2000);
  },
};

person3.greeting();

//array functions - map, filter and reduce
const num = [1, 2, 3, 4, 5];

// const square = num.map((n,i,arr)=>{if(n%2==0){return n*n;}}, this); //check the output :)
const square = num.map((n) => n * n);
console.log(square);

// const evenno = square.filter((n,i,arr)=>n!=undefined,this);
const evenno = square.filter((n) => n % 2 == 0);
console.log(evenno);

// const folded = evenno.reduce((n1,n2,i,arr)=>n1+n2,0);
const folded = evenno.reduce((n1, n2) => n1 + n2);
console.log(folded);

console.log(
  num
    .map((n) => n * n)
    .filter((n) => n % 2 == 0)
    .reduce((a, b) => a + b)
);


//class -> syntactic sugar
//dont use keywords at class level
class Person {
    testvariable;
    constructor() {
        this.testvariable = 10;
        console.log("constructor called");
    }
    fun1() {
        console.log(this.testvariable);
    }
    fun2() {
        this.fun1();
    }
}

const p = new Person();
console.log(p.fun2());


//rest arguments
//spread operator

//first three arguments are mandatory, all other additional arguments cud be added dynamically
function spreadoperatordemo(a, b, c, ...d) {
    console.log(a, b, c, d);
}

spreadoperatordemo(1, 4, 5);
spreadoperatordemo(1, 2, 3, 4);
spreadoperatordemo(1, 2, 3, 4, "dsdsd", 5, [1, 2, 3, 4, 5]);
spreadoperatordemo(
    1,
    2,
    3,
    4,
    "dsdsd",
    5,
    [1, 2, 3, 4, 5],
    { a: "a", b: 5 },
    true
    );
    
    const product = { id: 1000, name: "toothbrush", price: 10.0 };
    const product2 = { id: 1000, name: "toothpaste", price: 10.0 };
    const cart = [
        product,
        { ...product2 }, // copying all the values of product2 in a new object
    ];
    
    cart[0].qty = 4; // also add property qty to actual object
    cart[1].qty = 3; //does not add, as we have used spread operator
    console.log("cart", cart, "product1", product, "product2", product2);
    
    
    //promise
    
    //using callback
    function asyncWithCallback(success, fail) {
        setTimeout(function () {
            success("callback success");
        }, 2000);
        setTimeout(function () {
            fail("callback fail");
        }, 4000);
    }
    asyncWithCallback(
        function (data) {
            console.log("success", data);
        },
        function (error) {
            console.log("error", error);
        }
        );
        
        function asyncCallWithPromise() {
            return new Promise(function (success, failure) {
                setTimeout(_ => success("promise success"), 2000);
                setTimeout(_ => failure("promise failure"), 2000);
            });
        }
        
        asyncCallWithPromise()
        .then((data) => console.log("success with promise", data))
        .catch((err) => console.log("failure with promise",err));
        
        //promise chaining
        //https://github.com/myfriendarnab/promises-primer/blob/master/js/main.js

