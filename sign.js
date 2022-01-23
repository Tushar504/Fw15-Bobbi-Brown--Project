 // we catch the first "form" and add evnet listener with function
 document.querySelector("form").addEventListener("submit", sign);
  
 // we store the all the data in array from localstorage
 var bobbiArr = JSON.parse(localStorage.getItem("bobbi")) || [];

 // we catch the all value with respective i.d 
 function sign(event) {
   event.preventDefault();
   var first = document.querySelector("#first").value;
   var last = document.querySelector("#last").value;
   var email = document.querySelector("#email").value;
   var month = document.querySelector("#mon").value;
   var date = document.querySelector("#date").value;
   var year = document.querySelector("#year").value;
   var pincode = document.querySelector("#pin").value;
   var text = document.getElementById("para");


   // we take one obj store the data in object type

   var bobbiObj = {
     first: first,
     last: last,
     email: email,
     month: month,
     date: date,
     year: year,
     pincode: pincode,
   };
    
   // we push obj to array

   bobbiArr.push(bobbiObj);
  
   // we check the conditon if input type length is no equl to zero then going to success signup.
   // after complete the signup directly move login page 

   if (
     first.length != 0 &&
     last.length != 0 &&
     email.length != 0 &&
     month.length != 0 &&
     date.length != 0 &&
     year.length != 0 &&
     pincode != 0
     
    
   ) 
   {
     alert("sign is succesfully");
     localStorage.setItem("bobbi", JSON.stringify(bobbiArr));
     window.location.href = "login.html";
   }
   
   // input length is zero then show the else condtion
   else {
     text.textContent = "Invalid Credentials";
     text.style.color = "red";
   }
 }