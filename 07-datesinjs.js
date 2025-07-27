  //   Dates


  let myDate = new Date()  //  it will give today's date  //
  console.log(myDate);  //  o/p is 2025-07-27T17:54:52.293Z  //  it will not readable  //
  console.log(myDate.toString());  //  o/p is Sun Jul 27 2025 23:26:34 GMT+0530 (India Standard Time  //  it is somewhat readiabl  //
  console.log(myDate.toDateString());  // o/p is Sun Jul 27 2025  //  it will give exact readiable date //
  console.log(myDate.toLocaleString());  // it will give both date and time  //  o/p is  7/27/2025, 11:32:48 PM  //


  console.log(typeof myDate);  //  the data type of date is object  //

  let myCreatedDate = new Date(2025, 3, 27)  //  format is  year, month, date, 0 = jan, in month it starts from 0 not 1, o - 11  // if we want to create a specific date write in b/w ()  // 
  console.log(myCreatedDate.toDateString()); 


  let newCreatedDate = new Date(2025, 3, 27, 18, 21, 23)  //  format is year, month, date, gours, minutes, seconds  //
  console.log(newCreatedDate.toLocaleString());  //  toLocaleString is used for time  //


  let ourNewDate = new Date('05, 09, 2025')  // to use month - date - year format write in ""  //
  console.log(ourNewDate.toDateString());


    //     to compare fastest response time      //

  let myTimeStamps =  Date.now    //  to see ho have completes in the fastest or in loww time it will show in milliseconds
  console.log(myTimeStamps());
  console.log(myCreatedDate.getTime());  // it will give the milli seconds from above myCreatedDate (2025, 3, 27)  //



  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth());   // to check month
  console.log(newDate.getDay());  //  to check day  mon or tues...
  console.log(newDate.getMonth()+1);  // by adding +1 it will start counting jan as 1 month not 0 in this case months are from 1 - 12  not fronm 0 - 11  //


  console.log(newDate.toLocaleString("default", {

    weekday: "long"}));  //  after () we use object{} to define any thing  //  we can customize we want long or medium or short //  ex: day is mon use "long" it converts to full as monday 
    
    // ex: ("default", {
    // weekday: "long"
    // timeZone:""}));   
  
  
  

  
  
  
  
  
  
  
  

  
  
  
  