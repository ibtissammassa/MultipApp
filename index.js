const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const a = document.getElementById("a");
const b = document.getElementById("b");
const scoreEl = document.getElementById("score");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

const Answer = num1*num2;

a.innerText = num1;
b.innerText = num2;

// get score from storage
var score = +(localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreEl.innerText=score;

// main function
formEl.addEventListener("submit",
()=>{
    const userAns = +inputEl.value;
    if(userAns==Answer){
        score++;
        UpdateLocalStorage();
    }else{
        score--;
        UpdateLocalStorage();
    }
}
)

//storing the score
function UpdateLocalStorage(){
    localStorage.setItem("score",score.toString());
}

//reset fct 
formEl.addEventListener("reset",
()=>{
    score=0;
    UpdateLocalStorage();
    scoreEl.innerText=score;
})