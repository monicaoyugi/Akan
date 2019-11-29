function checkName(){
    var dd, mm , yyyy;
     dd = document.getElementById("dd").value;
     mm = document.getElementById("mm").value;
     yyyy = document.getElementById("yyyy").value;
 
     var cc = parseInt(yyyy.slice(0,2));
     var yy = parseInt(yyyy.slice(2,4));
    
 
     if(document.getElementById("inlineRadioMale").checked){
         gender = "Male";
     }else if(document.getElementById("inlineRadioFemale").checked){
         gender = "Female";
     }else(alert("Please choose gender"));
     
 
     if(dd<1 && dd>31){
        alert("Please enter a valid date");
     }
 
     if(mm<1 && mm>12){
    alert("Please enter a valid month");
     }
 
     var f =  ( (cc/4) -((2*cc)-1) + ((5*yy)/4) + (26*(mm+1)/10) + dd ) % 7;
     alert(f)
   
 if(f<6.3 && gender==="Female"){
   alert("AFUA")
  }else if(f<6.3 && gender==="Female"){
   alert("AFUA")
  }
 }   
      