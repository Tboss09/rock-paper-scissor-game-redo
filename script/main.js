let game = (function () {
    const gameStepOne = document.querySelector('.main'),
        gameStepTwo = document.querySelector('.mainTwo'),
        nextStep = gameStepTwo.querySelectorAll('.circle img'),
        [humanPicked, computerPicked] = nextStep,

        // Footer 
        rulesButton = document.querySelector('.footer__btn button'),
        rulesImg = document.querySelector('.footer__img'),
        closeImgButton = document.querySelector('.footer__img button'),

        // Lose Or Win
        winOrLose = document.querySelector('.mainTwo__game--winOrLose'),
        winOrLoseAnswer = winOrLose.querySelector('p'),

        //scoreIndicator

        // Play Again
        playAgainButton = document.querySelector(".mainTwo__game--winOrLose")

    // rock paper scissors img
    rockPaperAndScissor = document.querySelectorAll('.main__games img');


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
    function restartGame() {
        gameStepOne.classList.add('active');
        gameStepTwo.classList.remove('active');
    }
    function showStepTwo() {
        let imageClicked = this;
        gameStepOne.classList.remove('active');
        gameStepTwo.classList.add('active');
        let lastImage;


        // randomImageColors()
        humanAnswer();
        computerAnswer()

        // getResult();

        function humanAnswer() {
            // Shows what the user picked
            humanPicked.src = imageClicked.src; //Human Picked Answer === imagePicked answer
            humanPicked.parentNode.classList.add(imageClicked.parentNode.classList.value)
            return humanPicked.src;
        }

        function computerAnswer() {

            function getRandomIng() {
                const randomImg = [...rockPaperAndScissor].map(img => img.src);
                const rnd = Math.floor(Math.random() * randomImg.length)
                if (lastImage === randomImg[rnd]) {
                    console.log("Same Number Pls")
                    return getRandomIng();
                }    
                
                lastImage = randomImg[rnd];
                return randomImg[rnd];
            }

            setTimeout(() => { //show the image after 2 secs
                computerPicked.src = getRandomIng();

                if (humanAnswer() === computerPicked.src) {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = " A draw"
                    return;
                }

                // Paper
                else if (humanAnswer() === "http://127.0.0.1:5500/images/icon-paper.svg" && computerPicked.src === "http://127.0.0.1:5500/images/icon-rock.svg") {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = " You WIn"
                    score++;
                    pTwo.textContent = score;

                    console.log(score)
                    return;
                }

                // Scissors
                else if (humanAnswer() === "http://127.0.0.1:5500/images/icon-rock.svg" && computerPicked.src === "http://127.0.0.1:5500/images/icon-scissors.svg") {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = " You Win"
                    score++;
                    pTwo.textContent = score;
                    return;
                }
                // Scissors
                else if (humanAnswer() === "http://127.0.0.1:5500/images/icon-scissors.svg" && computerPicked.src === "http://127.0.0.1:5500/images/icon-paper.svg") {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = " You Win"
                    score++;
                    pTwo.textContent = score;
                    return;
                }
                else {
                    winOrLose.classList.add('active');
                    winOrLoseAnswer.textContent = " You Lose"
                    score--;
                    pTwo.textContent = score;
                    return;

                }
            }, 2000);


            setTimeout(() => {
                console.log(humanAnswer());
                console.log(computerPicked.src);

            }, 5000);
            // return computerPicked.src;
        }


        // function getResult() {
        //     setTimeout(() => {

        //         // if (humanAnswer() === "http://127.0.0.1:5500/images/icon-scissors.svg") {

        //         //     // if (computerAnswer() === "http://127.0.0.1:5500/images/icon-paper.svg") {
        //         //     //     console.log(computerAnswer())
        //         //     // }
        //         // }
        //         console.log(humanAnswer());
        //         console.log(computerAnswer());
        //     }, 5000);

        // }

    }

})();