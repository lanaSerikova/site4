const Victorina=[{
question:"Какой язык работает в браузере?",
answer:['Java','C#',"Python","Java Script"],
correct:4,

},{
    question:"Что означает CSS?",
    answer:['Central Style Sheets',
    'Cascading Style Sheets',
    "Cascading Simple Sheets",
    "Cars SUIS Sailboats"],
    correct:2,
},]
//===========================
let testQwest=document.getElementById('testQwest')
let listAnswer=document.getElementById('listAnswer')
const btn=document.getElementById('rezult')
//==============================
//переменные игры
//========================
let score=0;
let questionIndex=0;

clearPage();
showQuestion();

//=================
//проверка нажатие на кнопку
//======================
btn.onclick=checkAnswer;


function clearPage(){
    testQwest.innerHTML='';
    listAnswer.innerHTML='';
}
function showQuestion(){
   // console.log('вопрос')
//вопрос
const Question=`<h2>${Victorina[questionIndex]['question']}</h2>`
testQwest.innerHTML=Question
//console.log(Victorina[questionIndex]['question'])
//варианты ответов
for(let i=0;i<Victorina[questionIndex]['answer'].length;i++){
//    console.log(Victorina[questionIndex]['answer'][i])
const Answer=`<label class="answ"> <input type="radio" value="${i+1}" >${Victorina[questionIndex]['answer'][i]}</label>`
listAnswer.innerHTML+=Answer;
        }
}
function checkAnswer(){
console.log('hi')
const checkedRadio=listAnswer.querySelector('input[type=radio]:checked')
//console.log(checkedRadio.value)

if(!checkedRadio){
    btn.blur();
    return;
}
const userAnswer=+checkedRadio.value;

if(userAnswer===Victorina[questionIndex]['correct']){
score++;
}
console.log(score)
//проверка вопросов
//===========================
if(questionIndex!==Victorina.length-1){
    console.log("Это не последний вопрос")
questionIndex++;
clearPage();
showQuestion();
return;
}
else{
    console.log("Это  последний вопрос")
clearPage();
showResult();
}

}
function showResult(){
    console.log("show")
    let message, rez=score*100/Victorina.length;
    if(rez==100){
        message='молодец!!!'
    }
    else if(rez>=50 && rez<100)
    {
        message='уже неплохо'
    }
    else {
        message='необходимо повторить материал'
    }
const result=` <h2>${message}</h2>
<h3> ваш результат: ${rez}%</h3>
<p class="p"> вы ответили ${score} из ${Victorina.length}</p>`
listAnswer.innerHTML=result



}