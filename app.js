

function calc(){
    var amount = parseInt(document.querySelector('#amount').value);
    var people = parseInt(document.querySelector('#people').value);
    var serv = document.querySelector('#service').value;
    var calculate;


    if(document.querySelector('#amount').value == ""  || document.querySelector('#people').value ==  ""){
        alert('please enter values')
    }
    if (people < 1 || people == 0 ) {
        people = 1;
        document.getElementById("tip").style.display = "none";
      } else {
        document.getElementById("tip").style.display = "block";
      }
  
  
   if(serv == "outstanding"){
       calculate = (amount * 0.3)/people
   }else if(serv == "good"){
       calculate = (amount * 0.2)/people
   }else if(serv == "okay"){
       calculate = (amount * 0.15)/people
   }else if(serv == "bad"){
       calculate = (amount * 0.1)/people
   }else if(serv == 'terrible'){
       calculate = (amount * 0.05)/people
      }
   

  document.querySelector('#tip').innerHTML = "<span>$</span>" + Math.floor(calculate) + " <span>each</span>";
  
  document.querySelector('#amount').value = "";
  document.querySelector('#people').value = ""
}
