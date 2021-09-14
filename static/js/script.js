// challenge: your age in days

function ageInDays(){
    var birthYear = prompt('what year were you born in');
    var ageindayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');//create h1
    var textAnswer = document.createTextNode('You are '+ageindayss + ' days old');
    console.log(textAnswer);
    h1.setAttribute('id', 'ageInDays' ); 
    //give h1 we created id of ageInDays
    h1.appendChild(textAnswer); //adding textAnswer to h1
    console.log(h1);
    document.getElementById('flex-box-result').appendChild(h1);
    //append everything to flexboxresult
    
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//excercise 2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/giphy.gif";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id; //its pressed rock humanChoice="rock"
    botChoice=numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice,botChoice);//[0,1] human lost bot won
    message = finalMessage(results);//{message: you won, color: 'green'}
    rpsFrontEnd(yourChoice.id, botChoice, message);
    //remove images and put our choice and botchoice on front end and say if we won or not

}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
    //if i gave it 1 it will return paper
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return[yourScore, computerScore];
}