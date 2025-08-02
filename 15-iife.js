//    Immediately Invoked Function Expression (IIFE)



(function chai() {     //  it is names IIFI cause we written name as chai              //  this syntax is known as IIFE,  in this we use () starting of the function  and another () in end 
    console.log(`BD CONNECTED`);     //  in first () we write function defination,  in second () is for execution
    
})();


( (name) => {      //  it is unnamed IIFI, it is an arrow function
    console.log(`BD CONNECTED TWO ${name}`);

})("chanti")
