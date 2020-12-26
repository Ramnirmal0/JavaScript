const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


// var out="";
//   var num = userInput[0].split(' ');
//   for(var i = 0; i < num.length; i += 1) {
//   out += parseInt(num[i]) + " ";
// }
//   console.log(out.trim());


// var out2="";
//   var num2 = userInput[1].split(' ');
//   for(var j = 0; j < num2.length; j += 1) {
//   out2 += parseInt(num2[j]) + " ";
// }
//   console.log(out2.trim());
  

// for(var i=0;i<userInput.length;i++){
//     var result="";
//     var num=userInput[i].split(' ');
//     for(var j=0;j<num.length;j++){
//         result += parseInt(num[j])+" ";
//     }
//     console.log(result.trim());
// }

// var result=" ";
// for (var i=0;i<userInput.length;i++){
//     result += parseInt(userInput[i])+" ";
// }
// console.log(result.trim());

// var str= userInput[0];
// var result="";
// for(var i=0;i<str.length;i++){
//     result += str.charAt(i)+" ";
// }
// console.log(result.trim());

// var data= userInput[0].split(' ');
// console.log(data);
//   for(var i=0;i<data.length;i++){
//       var result = parseFloat(data[i]);
//       console.log(result.trim());
//   }

// var str= userInput[0];
// var result="";
// for(var i=0;i<str.length;i++){
//     console.log(str.charAt(i));
// }

var str= userInput[0];
var result="";
for(var i=0;i<(str.length);i++){
    result += str.charAt(i)+",";
}

//result=result.trim();
// var actualresult =result.charAt((result.length)-1)
// result + actualresult.replace(",","");
var actualresult="";
for(i=0;i<(result.length-1);i++){
    actualresult += result.charAt(i);
}
console.log(actualresult.trim());


});

