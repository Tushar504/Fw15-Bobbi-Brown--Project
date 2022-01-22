  // we catch the first "form" and add evnet listener with function

  document.querySelector("form").addEventListener("submit" ,signup);

  // we store the all the data in array from localstorage

   var newAct=JSON.parse(localStorage.getItem("customer"))||[];
  //  console.log(newAct)
  function signup(event){
      event.preventDefault();
      var email = document.querySelector("#email").value;
      var pass =  document.querySelector("#pass").value;
      var text = document.getElementById("para")

      var userData = {
          mail:email,
          password:pass,
      }
      newAct.push(userData);

      if(email.length != 0 && pass.length !=0){
          alert("sign is succesfully")
           localStorage.setItem("customer",JSON.stringify(newAct));
           window.location.href ="login.html";
      }
      else{
          text.textContent = "Invalid Credentials"
          text.style.color = "red"
      }
  }

  document.querySelector("#form").addEventListener("submit",logIn);
  console.log(newAct);


function logIn(event){
  event.preventDefault();
  var emai=document.querySelector("#mail").value;
  var paswd=document.querySelector("#pas").value;
  var text = document.getElementById("login-para")
  console.log(newAct)
  for(var i=0; i<newAct.length; i++){       
      if(newAct[i].mail== emai && newAct[i].password == paswd){
          alert("login succes");
          // we add the location here home.html
            window.location.href ="home.html";
         }
        else if(emai.length == 0 && paswd.length == 0){
          event.preventDefault()
          text.textContent = "Please Enter Valid Username/Password and sign up first"
          text.style.color = "red"
      }
  //     else{
  //       alert("sign up first");
  //       window.location.href = "sign.html";
  // }   
  } 
  

}