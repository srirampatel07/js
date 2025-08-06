  //  if 

    // <  lessthan,
    //  > greaterthan,
    //  <= lessthan (or) equal,
    //  >= greaterthan (or) equal,
    //  == is equal,
    //  === it will also check data type,
    //  != not equal,
    //  !== it will also check data type


  // const isUserLoggedIn = true

  const temperature = 41



  if ( temperature === 41) {
    console.log("less than 50");
    
  } else {
    console.log("greater than 50");
    
  }



  const score = 200

  if (score >100) {
    const power = "fly"
    console.log(`user power: ${power}`);
    
  }



  const balance = 1000
  
  if (balance < 500) {
    console.log("less than 500");
    
  }else if (balance < 750) {
    console.log("less than 750");
  }else if (balance < 900) {
    console.log("less than 900");
  }else {
    console.log("less than 1200");
  }




  const isUserLoggedIn = true
  const debitCard = true
  const loggedInFronGoogle = false
  const loggedInFromEmail = true

  if (isUserLoggedIn && debitCard) {      //   && is used to check multiple conditions but, all conditions are true then only it will execute  //
    console.log("allow to buy course");
    
  }

  if(loggedInFronGoogle || loggedInFromEmail){   //   || are also used to check multiple conditions, if any one condition is true it will execute    //
    console.log("user logged in");
    
  }
