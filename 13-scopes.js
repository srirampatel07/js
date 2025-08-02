
//  outside if is called global scope and inside if is called block scope   


let a = 300
if (true){
    const a = 10
    let b = 20
    var c = 30      //  don't use var   
    console.log("Inner: ",a);
    
}

// console.log(a);   //  if we use const o/p is not printed
// console.log(b);   //  if we use let o/p is not printed
// console.log(c);      //  if we use var o/p is printed      //   



     //   nested scope    //


     function one(){
        const username = "chanti"

        function two(){
            const website = "youtube"
            console.log(username);
            
        }
        // console.log(website);
        two()
        }
     one()





     if (true) {
        const username = "chanti"
        if (username === "chanti") {
            const website = " youtube"
            console.log(username + website);
            
        }
        
     }






     ////// +++++++++++++++ intresting ++++++++++++ //////////

     function addone(num) {     //  here only value declared
        return num + 1
     }
     console.log(addone(5));


     const addtwo = function(num) {   //  here after declaration we holded in variable
        return num + 2
     }
     console.log(addtwo(5));
     



