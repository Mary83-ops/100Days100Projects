let questions = [
    {
        numb: 1,
        question: "What is JavaScript?",
        answer: "A programming language used for developing client-side scripts.",
        options: [
            "A programming language used for developing client-side scripts.",
            "A markup language used for building web pages.",
            "A database language used for managing data.",
            "I don't know"
        ]
    },

    {
        numb: 2,
        question: "What are some of the data types in JavaScript?",
        answer: "Number, String, Boolean, Null, Undefined.",
        options: [
            "Number, String, Boolean, Null, Undefined.",
            "Integer, Float, Double, Character, Boolean.",
            "String, Text, Date, Time, Timestamp.",
            "None of the above"
        ]
    },

    {
        numb: 3,
        question: "What is the difference between == and === in JavaScript?",
        answer: "== only checks for value equality, while === checks for value and type equality.",
        options: [
            "== checks for value and type equality, while === only checks for value equality.",
            "== only checks for value equality, while === checks for value and type equality.",
            "There is no difference, they both check for value and type equality.",
            "None of the above"
        ]
    },

    {
        numb: 4,
        question: "How do you declare a variable in JavaScript?",
        answer: "All of the above.",
        options: [
            "var variableName;",
            "let variableName;",
            "const variableName;",
            "All of the above."
        ]
    },

    {
        numb: 5,
        question: "What are some of the different types of loops in JavaScript?",
        answer: "for, while, do...while, foreach.",
        options: [
            "for, while, do...while, foreach.",
            "for, while, until, do...until.",
            "for, until, do...while, foreach.",
            "if, if...else, while"
        ]
    },

    {
        numb: 6,
        question: "How do you add an element to an array in JavaScript?",
        answer: "array.push(element);",
        options: [
            "array.add(element);",
            "array.push(element);",
            "array.append(element);",
            "None of the above"
        ]
    },

    {
        numb: 7,
        question: "How do you remove an element from an array in JavaScript?",
        answer: "array.splice(index, 1);",
        options: [
            "array.remove(element);",
            "array.splice(index, 1);",
            "array.pop();",
            "array.shift();"
        ]
    },

    {
        numb: 8,
        question: "What is a callback function in JavaScript?",
        answer: "A function that is passed as an argument to another function and is executed inside that function.",
        options: [
            "A function that is called immediately when it is defined.",
            "A function that is passed as an argument to another function and is executed inside that function.",
            "A function that is called when an event occurs, such as a button click or a mouse movement.",
            "A function that is called when it is not defined"
        ]
    },

    {
        numb: 9,
        question: "What is an anonymous function in JavaScript?",
        answer: "A function that has no name and is defined using the function keyword.",
        options: [
            "A function that has no name and is defined using the function keyword.",
            "A function that is called without any arguments.",
            "A function that is executed automatically when the page loads.",
            "I don't know"
        ]
    },

    {
        numb: 10,
        question: "How do you create a new object in JavaScript?",
        answer: "Both a and b.",
        options: [
            "var obj = {};",
            "var obj = new Object();",
            "Both a and b.",
            "None of the above"
        ]
    },
]





const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue);
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine);
        showResult(); 
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");
  
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}
function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){
       
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}
function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}