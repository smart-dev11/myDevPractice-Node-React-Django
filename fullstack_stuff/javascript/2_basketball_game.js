var comScore = 0
var userScore = 0

function onComputerShoot() {

    var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score');

    var shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType === 2){
        if(Math.random() < 0.5){
            textElem.innerHTML = "Sucess Shooting 2 score"

            comScore += 2;
            comScoreElem.innerHTML = comScore;

        } else {
            textElem.innerHTML = "Fail Shooting 2 score"
        }
    } else {
        if(Math.random() < 0.33){
            textElem.innerHTML = "Sucess Shooting 3 score"

            comScore += 3;
            comScoreElem.innerHTML = comScore;

        } else {
            textElem.innerHTML = "Fail Shooting 3 score"
        }
    }
}

function onUserShoot(shootType) {

    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    if(shootType === 2){
        if(Math.random() < 0.5){
            textElem.innerHTML = "Sucess Shooting 2 score"

            userScore += 2;
            userScoreElem.innerHTML = userScore;

        } else {
            textElem.innerHTML = "Fail Shooting 2 score"
        }
    } else {
        if(Math.random() < 0.33){
            textElem.innerHTML = "Sucess Shooting 3 score"

            userScore += 3;
            userScoreElem.innerHTML = userScore;

        } else {
            textElem.innerHTML = "Fail Shooting 3 score"
        }
    }
}