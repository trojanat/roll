let roll1 = document.querySelector('.roll1');
let roll2 = document.querySelector('.roll2');
let again = document.querySelector('.btnn1');
let home = document.querySelector('.home-link');
let modal = document.querySelector('.modal');
let score;
let score2;
const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');


profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})

document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);
    const isClickInsideModal = modal.contains(event.target);
    const isHomeClicked = home.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked && !isHomeClicked && !isClickInsideModal) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
        document.querySelector('.overlay22').style.display = 'none';
        modal.classList.add('modDisplay');
        modal.classList.add('modal');
    }
});



function rollDice() {
    score = parseFloat(document.querySelector('.score1').innerText);
    let randNum = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice').style.backgroundImage = `url(img/diceNum${randNum}.jpg)`;
    score += randNum;
    console.log(score);
    document.querySelector('.score1').innerText = score;
    document.querySelector('.roll1').style.display = 'none';
    document.querySelector('.roll2').style.display = 'block';

    if (score >= 15) {
        score = 15;
        str="PLAYER 1";
        document.querySelector('.dice').style.backgroundImage = ``;
        document.querySelector('.roll1').style.display = 'none';
        document.querySelector('.roll2').style.display = 'none';
        document.querySelector('.score1').innerText = score;
        document.querySelector('.btnn1').style.display = 'block';
        showPopup(str);
    }
}

function homePage(){
    modal.classList.remove('modDisplay');
    document.querySelector('.overlay22').style.display = 'block';
}


roll1.addEventListener('click',rollDice);
roll2.addEventListener('click',rollDice2);
again.addEventListener('click', playAgain);
home.addEventListener('click', homePage);


function rollDice2() {

    score2 = parseFloat(document.querySelector('.score2').innerText);
    var randNum2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice').style.backgroundImage = `url(img/diceNum${randNum2}.jpg)`;
    score2 += randNum2;
    console.log(score2);
    document.querySelector('.score2').innerText = score2;
    document.querySelector('.roll1').style.display = 'block';
    document.querySelector('.roll2').style.display = 'none';
 
    if (score2 >= 15) {
        score2 = 15;
        str2="PLAYER 2";
        document.querySelector('.dice').style.backgroundImage = ``;
        document.querySelector('.roll1').style.display = 'none';
        document.querySelector('.roll2').style.display = 'none';
        document.querySelector('.score2').innerText = score2;
        document.querySelector('.btnn1').style.display = 'block';
        showPopup(str2);

    }
}


function playAgain() {
    document.querySelector('.score1').innerText = '0';
    document.querySelector('.score2').innerText = '0';
    document.querySelector('.roll1').style.display = 'block';
    document.querySelector('.roll2').style.display = 'block';
    document.querySelector('.dice').style.backgroundImage = `none`;
    console.clear();
}

function showPopup(recived) {
    
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.querySelector('.win-message').textContent=recived;
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
