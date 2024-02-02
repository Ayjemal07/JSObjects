//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFood(person3){
    for (let i=0; i<Object.keys(person3).length; i++) {
        if(Array.isArray(Object.values(person3)[i])){
            if (Object.values(person3)[i].length>1){
                for (var food of Object.values(person3)[i]){
                    console.log(food);
                }

            }
            else{
                for (var shake of Object.values(person3)[i]) {
                    for (let io=0; io<Object.keys(shake).length; io++) {
                        console.log(Object.keys(shake)[io] + ": " + Object.values(shake)[io]);
                    }
                    
                }
            }
            }

        else if(typeof (Object.values(person3)[i])==="string"){
            console.log(Object.values(person3)[i])
        }

        else if(typeof (Object.values(person3)[i])==="object"){
            if (Object.values(person3)[i].length>1){
                for (var item of Object.values(person3)[i]){
                    console.log(item);
                }
            }
            
            else{
                console.log(Object.values(person3)[i])
            }
        }

        else{
            console.log(Object.values(person3)[i])
        }
    }
}


displayFavoriteFood(person3)

//better way to parse thru the list, it is faster, dynamic and can work with different data sets
function parse(item){

    if (Array.isArray(item)){
        for(let i of item){
            parse(i)
        }
    }
    else if (typeof item ==="string"){

        console.log(item)
    }

    else if (typeof item==="object"){
        for (let key in item){
            parse(item[key])
        }
    }

}


parse(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name,age){
    this.name=name;
    this.age=age;

    this.printInfo=()=>{
        return `Name: ${this.name}\n Age: ${this.age}`
    }

    this.addAge=(years=1)=>{
        this.age+=years

    }
}

let mary= new Person('Mary',21)

let sam=new Person('Sam',35)
console.log(sam.printInfo())
mary.addAge()
sam.addAge()
mary.addAge(3)
console.log(mary.printInfo())





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



let whichWord=(word)=> {
    return new Promise ((resolve,reject)=>{

        if(word.length>10){
            resolve(true)
        }
        else{
            reject(false)
        }
    })
}


whichWord("Hello, do you know the meaning of conflagration?")
.then((result)=> {
    console.log("Big word")
})
.catch((error)=>{
    console.log("Small Number")
})


//a different way of doing it


function PromTest(stringgg){

    return new Promise(function(resol, rejec){
        if (stringgg.length>10){
            resol("Big Word")
        }
        else{
            rejec("Small Number")
        }
    })
}

let mystring="Hi whatup"

let mypromise=PromTest(mystring)

mypromise.then(
    function(success){
        console.log(success)
    },
    function(fail){
        console.log(fail)
    }
)