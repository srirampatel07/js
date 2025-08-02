// const tinderUser = new Object()  //  singleton object  //  o/p is {}  //
const tinderUser = {}   //  non singleton object  //  o/p is {}   //

tinderUser.id = "chanti143"
tinderUser.name = "chanti"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //  it will show only keys  and it is array type  //  o/p is  [ 'id', 'name', 'isLoggedIn' ]   //
console.log(Object.values(tinderUser));  //  it will show values only  //  o/p is  [ 'chanti143', 'chanti', false ]   //
console.log(Object.entries(tinderUser));  //  in this the keys are given in array seperatetly, array's inside the array  // o/p is   [ [ 'id', 'chanti143' ],   [ 'name', 'chanti' ],   [ 'isLoggedIn', false ] ]  //
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //  to check the value is there or not  //  o/p is true  //





const regularUser = {

    email: "chettisrirampatel@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sriram",
            lastname: "patel"
        }

    }
}


console.log(regularUser.fullname.userfullname.firstname);





const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  //  don't use this instead of this use below syntax    //  here o/p is  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   //
// const obj3 = Object.assign({}, obj1, obj2)   //  don't use this  //

const obj3 = {...obj1, ...obj2}  //  use this it is easy to access  //
console.log(obj3);



const users = [
    {
        id: 1,
        email: "chettisrirampatel@gmail.com"
    },

    {
        id: 2,
        email: "chanti@gmail.com"
    },
]




const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "chanti"
}

const {courseInstructor: instructor} = course    //  we can use :  as short names/ alias

console.log(instructor);









