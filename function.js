
// Getting random two numbers 
const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);


//returning a random operator
function returnRandomeOperator(arr){
      const index = Math.floor(Math.random()*arrayoperator.length);
      const item = arr[index];
      return item;
}
const arrayoperator = [ "+" , "-" , "/" , "*"];
const a = returnRandomeOperator(arrayoperator);
console.log(a);
 var ans;
if( a == "+")
{
     ans = num1 + num2;
}
else if ( a == "-")
{
     ans = num1 - num2;
}
else if ( a == "/")
{
     ans = num1 / num2;
}
else if ( a == "*")
{
     ans = num1 * num2;
}

//Entering the question into Html
const question = document.getElementById("head");
question.innerHTML = `What is  ${num1} ${a} ${num2} ?`;

let score =JSON.parse (localStorage.getItem("score"));

if(!score)
{
    score = 0;
}
else{
 if(score<0)
{
    score = 0;
    document.getElementById("score").innerHTML=`You lose!`
}

else if(score>0 && score<3)
{
    document.getElementById("score").innerHTML=`Score : ${score}`;
}
else 
{
    score = 0;
    document.getElementById("score").innerHTML=`You Win!`;
    updateLocalStorage();
}
}
const inputE = document.getElementById("input");

const formjava = document.getElementById("form");
formjava.addEventListener("submit", ()=> {
    const x = +inputE.value;
     if( x == ans)
     {
        score++;
        updateLocalStorage();

     }
     else
     {
        score--;
        updateLocalStorage()
     }

})


function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score)); 
}

