let game = (function () {
    const gameStepOne = document.querySelector('.main'),
        gameStepTwo = document.querySelector('.mainTwo'),
        nextStep = gameStepTwo.querySelectorAll('.circle img'),
        playAgainButton = gameStepTwo.querySelector('.mainTwo__game--winOrLose'),
        [humanPicked, computerPicked] = nextStep,

        // Footer 
        rulesButton = document.querySelector('.footer__btn button'),
        rulesImg = document.querySelector('.footer__img'),
        closeImgButton = document.querySelector('.footer__img button'),

        rockPaperAndScissor = document.querySelectorAll('.main__games img');


    // Event Listeners
    rulesButton.addEventListener('click', openRule)// Open Rules Image
    closeImgButton.addEventListener('click', closeRule) //close RUles Image
    playAgainButton.addEventListener("click", restartGame)
    rockPaperAndScissor.forEach(img => (img.addEventListener('click', showStepTwo)))

    function openRule() { //Shows you should follow if the (Rule button is clicked) 
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
        humanAnswer(); //Shows WHat User Picks
        computerAnswer()

        // getResult();

        function humanAnswer() {
            // Shows what the user picked
            humanPicked.src = imageClicked.src; //Human Picked Answer === imagePicked answer
            humanPicked.parentNode.classList.add(imageClicked.parentNode.classList.value)
            return humanPicked.src;
        }. 0000000000000000

        function computerAnswer() {
            // Picks Random Value
            const randomImg = [...rockPaperAndScissor].map(img => img.src);
            const rndb.= Math.floor(Math.random() * randomImg.length)

            setTimeout(() => { //Shows What computer picked after 3secs 
                // clearInterval(changeRandomImages)
                computerPicked.src = randomImg[rnd];
                return computerPicked.src;
            }, 3000);

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