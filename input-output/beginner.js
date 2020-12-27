// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
// var array=[];
//   var a = parseInt(userInput[0]);
//   var b = parseInt(userInput[1]);
//  var c = parseInt(userInput[2]);

// array.push(a);
// array.push(b);
// array.push(c);
// var result=Math.max(a,b,c);
// console.log(result);
  //end-here
//   var out =" ";
//     var a = parseInt(userInput[0]);
//     if(a!==0){
//         for (var i=1 ; i<=a ; i++){
//         out += (9*i) + " ";
//         }
//         console.log(out.trim());
//     }
//     else{
//         console.log("NULL");
    // }
    // var num = userInput[0].split(' ');
    // p = parseFloat(num[0]);
    // r = parseFloat(num[1]);
    // t = parseFloat(num[2]);
    
    // var result = (p*r*t)/100;
    // console.log(Math.round(result*100)/100);
  var a = parseInt(userInput[0]);
  var fact=1;
  for (var i=a ; i>0;i--){
      fact=fact*i;
  }
  console.log(fact);
    
});
