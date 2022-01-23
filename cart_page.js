 var dataforcart=JSON.parse(localStorage.getItem("cartdata"))||[];
    mapping(dataforcart);
    subtotal(dataforcart)
    document.querySelector("#bag").textContent=`SHOPPING BAG  (${dataforcart.length})`
  
    if(dataforcart.length==0){
       document.querySelector(".head").innerHTML="";
    }
  
  
    function mapping(dataforcart){
    dataforcart.map(function(elem,index){
     
        var divmain=document.createElement("div");
        divmain.setAttribute("id","prod")
         
        var div1=document.createElement("div");
         div1.setAttribute("id","map")
        var imgdiv=document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",elem.cartimg);

        imgdiv.append(img);

       var textdiv=document.createElement("p");
       
       textdiv.textContent=elem.product_name
       
       div1.append(imgdiv,textdiv);

    var div2=document.createElement("div");
    div2.setAttribute("id","sec")
    div2.textContent=`$ ${elem.price}.00`
     
    var div3=document.createElement("span");
    div3.textContent="";
    div3.setAttribute("id","butt");
    div3.setAttribute("class","fas fa-trash-alt")
    div3.addEventListener("click",function(){
        removefromcart(index);
    })
   
    divmain.append(div1,div2,div3);

    document.querySelector("#container").append(divmain)
 })
   }


//    function for remove Button

   function removefromcart(index){
    document.querySelector("#container").innerHTML="";
    dataforcart.splice(index,1)
    localStorage.setItem("cartdata",JSON.stringify(dataforcart))
   mapping(dataforcart)
   document.querySelector("#bag").textContent=`SHOPPING BAG  (${dataforcart.length})`
   subtotal(dataforcart)
   if(dataforcart.length==0){
       document.querySelector(".head").innerHTML="";
    }
   }

//    function for subtotal

function subtotal(dataforcart){
 var res=dataforcart.reduce(function(sum,elem){
     return sum+elem.price;
 },0)
 
 
 if(res>65){
 document.querySelector("#pricepush").textContent=`$ ${res}`;
 document.querySelector("#ship").textContent=`FREE`;
 document.querySelector("#ship").style.color="purple";
 document.querySelector("#ship").style.fontWeight="bold"
 document.querySelector("#total").textContent=`$ ${res}`;
 }
 else{
    document.querySelector("#pricepush").textContent=`$ ${res}`;
    if(dataforcart.length>0){
     document.querySelector("#ship").textContent=`$ ${15}`;
     var select=15;
   }
   else{
    document.querySelector("#ship").textContent=`$ ${0}`;
    var select=0
   }
   document.querySelector("#total").textContent=`$ ${res+select}`;
 }

}



// Function for Apply Button

document.querySelector("#bu").addEventListener("click",discount)
function discount(){
    var code=document.querySelector("#get").value
    if(code=="masai20"){
     var res=dataforcart.reduce(function(sum,elem){
     return sum+elem.price;
 },0)
 if(res>65){
 document.querySelector("#pricepush").textContent=`$ ${res-((res*20)/100)}`;
 document.querySelector("#ship").textContent=`FREE`;
 document.querySelector("#ship").style.color="purple";
 document.querySelector("#ship").style.fontWeight="bold"
 document.querySelector("#total").textContent=`$ ${res-((res*20)/100)}`;
 }
 else{
    document.querySelector("#pricepush").textContent=`$ ${res-((res*20)/100)}`;
    if(dataforcart.length>0){
     document.querySelector("#ship").textContent=`$ ${15}`;
     var select=15;
   }
   else{
    document.querySelector("#ship").textContent=`$ ${0}`;
    var select=0
   }
   document.querySelector("#total").textContent=`$ ${(res-((res*20)/100))+select}`;

}
 alert("masai20 offer code applied")
 
 document.querySelector("#get").value="";
}
}