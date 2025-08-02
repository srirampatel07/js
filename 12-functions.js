  //   functions    // 



  function sayMyName(){     //   basic function syntax   //
    console.log("c");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");
    console.log("i");

  }

    sayMyName()


    function addTwonumbers(number1, number2){
        // let result = number1 + number2
        // return result      //   once you entered result after what ever you write it will not execute   //
        return number1 + number2
    }

    addTwonumbers(5, 3)

    const result = addTwonumbers(3, 5)
    console.log("Result: ", result);




    function loginUserMessage(username){   //  if you want by default va,ue you can add as (username = "sam")
        if(!username){       //  if condition   //     ! converts true into false and false into true   //
            console.log("please enter a username");  //  o/p is  please enter a username  //
            return

        }
        return `${username} just logged in`
    }

    console.log(loginUserMessage());






    function caluculateCartPrice (...num1){
      return num1
    }
    console.log(caluculateCartPrice(200, 500, 700, 4000));




    const user = {
      username: "chanti",
      price: 299

    }


    function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
      
    }
    handleObject(user)    //  use this type

    handleObject({      //  or this type
      username: "chanti",
      price: 299
    })



    const myNewArray = [300, 600, 900, 1200]

    function returnSecondValue(getArray){
      return getArray[1]
    }

    console.log(returnSecondValue(myNewArray));              //  use this 
    console.log(returnSecondValue([300, 600, 900, 1200]));   // or this type

    
    
    
    

