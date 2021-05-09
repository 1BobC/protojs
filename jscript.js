//Section 15 OOJS
//#122. Constructors (under the hood)
//constructor function - this is how we created an object with properties and values
// class User {
//     constructor(username, email){          
//         this.username= username;
//         this.email= email;
//     }       
// }
//creating a code without class syntax:
//JS uses this 'under the hood' and is how objects were created before class was introduced

function User(username, email){         //User is the construction function
    this.username= username;
    this.email= email;
    // this.login= function(){
    // console.log(`${this.username}...has logged in`);       //can add a method this way 
    //but is not the best way - better to add to the prototype - why?
    //proto methods are called with eg nums.filter(() => )
}

    //#123. Prototype Model and whatever method we want to add we code protoype.method name
    User.prototype.login= function(){
        console.log(`${this.username}...has logged in`);
        return this;            //return required for method chaining remember - undefined?
    };
    User.prototype.logout= function(){
        console.log(`${this.username}...has logged out`);
        return this;            //return required for method chaining remember - undefined?
    };

    function Admin(username, email, title){
        User.call(this, username, email);
        this.title = title;
    }

    const userOne= new User('mario', 'mario@rococode.scot');
    const userTwo= new User('luigi', 'luigi@rococode.scot'); 
    const userThree= new Admin('josh', 'josh@where.aus', 'Top Car Drifter');

    console.log(userOne, userTwo, userThree);
    // userOne.login();
    // userOne.logout(); // and now with chaining:
    userOne.login().logout();

//the new keyword
//1 - it creates a new empty object {}
//2 - it binds the value of 'this' to the new empty object
//3 - it calls the constructor function to build the object 

//#124. Prototypal Inheritance


