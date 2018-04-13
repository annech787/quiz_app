let numA = QUIZ_SOURCE.A;
let numB = QUIZ_SOURCE.B;
let currentQuestion = 0;
let num = 1;

function startQuiz(){
    $('.submit').click(function ()
    { 
        console.log('startQuiz, ran');    
        renderQuestion();
       
    });
   
    
}

function submit(){
    
    $('#main').on('click','.enter', function (event){
    
        event.preventDefault();   
        let answer = parseInt($("input:checked").val(), 10);
  
        if(answer == 1){
            $('.feedback').text('You selected personality A answer.');
            numA++;
            $('.next').toggleClass('hidden');  
            $('.enter').hide();    
        }
        else if (answer == 2){
            $('.feedback').text('You selected personality B answer.')
            numB++;
            $('.next').toggleClass('hidden');  
            $('.enter').hide();
        }
        else {
            $('.feedback').text('Please select an answer.')
        }
        result(numA, numB);
    });
    
}


function next(){
    $('#main').on('click','.next', function(event) {   
    
        console.log('Next, ran');
        event.preventDefault();

    
        if(currentQuestion < SOURCE.length-1){    
            currentQuestion++;
            num++;
            renderQuestion();
    
        }
     
    
        else{
            resultPage();
            result(numA,numB);
        }
     
    });
  
}

function renderQuestion(){
    const availableChoices=handleChoices()
    $('#main').html(
        ` <div class="picture"><img src="images/big_head.png" alt="human head"/></div>	
        <form class ='form'>
            <h1>Question ${num} of ${SOURCE.length} </h1>
            <div class="score">
                <span class="A">
                    A:${numA}
                </span>
                <span class="B">
                    B:${numB}
                </span>
            </div>
            <p class="questions">
                ${SOURCE[currentQuestion].question}
            </p>
            <section role= "region">
                ${availableChoices}
            </section>
            <section role="region"class="feedback">
            </section>   
                <button type='submit'class='enter'>
                    Submit
                </button>      
            <div class="text-center float-left"> 
                <button type='next' class='next hidden'>
                    Next
                </button>
            </div>
        </form>`
    
    )
}
    
function handleChoices (){
    let choices = [];
    let choiceArray = SOURCE[currentQuestion].choices
    for(let i = 0; i< choiceArray.length;i++){
         
        choices.push(`<input type="radio" name="feelings-2" id="ans" value="${choiceArray[i].type}" ><label for="ans-${i+1}">${choiceArray[i].choice}</label>
        <br>`);
        
    }
    return choices.join("");   
}
       




function initialPage(){
    $('#main').html(
    `<div class = "row">
   	    <div class="col-12">
            <div class="heading">
   	            <h1> Personality A or B ?</h1>
            </div>
        </div>
    </div>
    <div class = "row">
   	    <div class = "col-12">
   	        <div class="container">
   	            <img src="images/big_head.png" alt="human head"/>	
            </div>
        </div>
    </div>  
    <div class = "row">
        <div class = "col-12">
            <button type="Enter" class="submit">Click Here To Find Out</button>
        </div>
    </div>`) 
    startQuiz();
}    

function restart(){
    $('#main').on('click','.restart',function(){
        currentQuestion = 0;
        num= 1;
        numA=0;
        numB=0; 
        initialPage();
    });
    
}
    

function result(numA, numB){
    
    if(numA > numB){
         
        $('.content').text(`You answer ${numA} out of 10 that are leaning toward personality A. You are personality A`) 
    }
    else if(numA < numB) {
          
        $('.content').text(`You answer ${numB} out of 10 that are leaning toward personality B. You are personality B`)
    }
     else if (numA == numB) {
        $('.content').text(`You answer ${numA} that are considered personality A. You answer ${numB} that are considered personality B. You are considered personality A and B`)
    }
    
}
function resultPage(){
     
    $('#main').html(
        `<div class="result">
   	        <h1>Result:</h1>
            <p class = "content">
            </p>
            <button class = "restart">
                Restart
            </button>
        </div>
        `
    )
    
}


function renderFunction(){
    startQuiz();
    submit();    
    next();
    restart();      
  
}


$(renderFunction);
