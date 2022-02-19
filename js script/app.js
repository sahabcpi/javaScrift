
// hw-1 

function sum(num1,num2) {
    document.write(num1+num2+"<br>")
}
sum(15,15)
function minus(num1,num2) {
    document.write(num1-num2+"<br>")
}
minus(60,15)
function	multiplication(num1,num2) {
    document.write(num1*num2+"<br>")
}
multiplication(15,15)
function	divition(num1,num2) {
    document.write(num1/num2+"<br>")
}
divition(1245,15)
function	modulus(num1,num2) {
    document.write(num1%num2+"<br>")
}
modulus(1520,15)
function	abc(num1,num2) {
    document.write(num1**num2+"<br>")
}
abc(8,8)
// hw-2

// FOR Loof Array



for(i=1;i<=100; i++){
    document.write(i+"<br>")
}




var firstName ="Md.Sahab Uddin";
for( i=1; i<15 ;i++){ 
document.write(firstName+"<br>")
 }



 function generateOption(selector,minValue, maxValue) {
    var jsSelector = document.getElementById(selector);
    
  
    for (var i = minValue; i <= maxValue; i++) {
      var option = document.createElement("option");
      var optionText = document.createTextNode(i);
  
      option.appendChild(optionText);
      jsSelector.appendChild(option);
    }
  }
  
  

  generateOption('day',1,31)
  generateOption('month',1,12)
  generateOption('year',1950,2030)



  
  