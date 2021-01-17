let game = (function () {
    const gameStepOne = document.querySelector('.main'),
        gameStepTwo = document.querySelector('.mainTwo'),
        nextStep = gameStepTwo.querySelectorAll('.circle img'),
        [humanPicked,] = nextStep,
        computerPicked = document.querySelector('.theHouseAnswer'),
        // Footer 
        rulesButton = document.querySelector('.footer__btn button'),
        rulesImg = document.querySelector('.footer__img'),
        closeImgButton = document.querySelector('.footer__img button'),

        // Lose Or Win
        winOrLose = document.querySelector('.mainTwo__game--winOrLose'),
        winOrLoseAnswer = winOrLose.querySelector('p'),


        // Play Again
        playAgainButton = document.querySelector(".mainTwo__game--winOrLose"),

        // rock paper scissors img
        rockPaperAndScissor = document.querySelectorAll('.main__games img');

    let lastImagePicked;

    //scoreIndicator
    let scoreIndicator = document.querySelectorAll('.header__score p'),
        [, pTwo] = scoreIndicator,
        score = 0;
    pTwo.textContent = score;

    // Opens Rule Image
    rulesButton.addEventListener('click', openRule)// Open Rules Image
    closeImgButton.addEventListener('click', closeRule) //close RUles Image
    playAgainButton.addEventListener("click", replayGame)
    rockPaperAndScissor.forEach(img => (img.addEventListener('click', showStepTwo)))

    function replayGame() {
        gameStepOne.classList.add('active');
        gameStepTwo.classList.remove('active');
        winOrLose.classList.remove('active');
    }

    function openRule() {
        rulesImg.classList.add('active')
    }

    function closeRule() {
        //closes the rules img) 
        rulesImg.classList.remove('active')

    }



    function showStepTwo() {
        let imageClicked = this;
        gameStepOne.classList.remove('active');
        gameStepTwo.classList.add('active');
        humanAnswer();
        computerAnswer();
        function humanAnswer() {
            // Shows what the user picked
            humanPicked.src = imageClicked.src; //Human Picked Answer === imagePicked answer
            humanPicked.parentNode.classList.add(imageClicked.parentNode.classList.value)
            return humanPicked.src;
        }

        function computerAnswer() {


            let interval = setInterval(() => {
                computerPicked.innerHTML = randomImg();
            }, 200);

            setTimeout(() => {
                clearInterval(interval);
                computerPicked.innerHTML = randomImg();
                const game = {
                    scissor: "http://127.0.0.1:5500/images/icon-scissors.svg",
                    rock: "http://127.0.0.1:5500/images/icon-rock.svg",
                    paper: "http://127.0.0.1:5500/images/icon-paper.svg"
                }
                const computerImg = computerPicked.querySelector('img').src;
                console.log(computerPicked.querySelector('img').src)

                // if (humanAnswer() === game.rock && computerImg === game.scissor) {
                //     winOrLose.classList.add('active');
                //     winOrLoseAnswer.textContent = "You Won"
                //     console.log('same');
                // }
                if (humanAnswer() === game.rock && computerImg == game.scissor 
                ||humanAnswer() === game.paper && computerImg == game.rock 
                ||humanAnswer() === game.scissor && computerImg == game.paper 
                ) {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = "You Won"
                    score++;
                    pTwo.textContent = score;
                }

                else if (humanAnswer() === computerImg) {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = "A Draw"
                }

                else {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = "You Lose"
                    score--;
                    pTwo.textContent = score;
                }
            }, 2000);
        }

        function randomImg() {
            let computerImage = [
                `  <div class="mainTwo__game--computer pulse main__games--hand  circle ">
             <img src="images/icon-paper.svg" alt="icon-paper">
<p>The House Picked</p>
</div>`,

                `  <div class="mainTwo__game--computer pulse main__games--rock  circle ">
<img src="images/icon-rock.svg" alt="icon-paper">
<p>The House Picked</p>
</div>`,

                `  <div class="mainTwo__game--computer pulse main__games--scissors  circle ">
<img src="images/icon-scissors.svg" alt="icon-paper">
<p>The House Picked</p>
</div>`
            ];
            //  Random Image the computer gets
            let rnd = Math.floor(Math.random() * computerImage.length);

            // if (lastImagePicked === computerImage[rnd]) {
            //     return randomImg();
            // }
            // lastImagePicked = computerImage[rnd];
            return computerImage[rnd];
        }
    }


    // return {
    //     computer: randomImg
    // }
})();