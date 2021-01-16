(
    function () {

        const rockPaperAndScissorImgs =
            document.querySelectorAll('.main__gameStart img'),
            gameStepOne = document.querySelector('.main'),
            gameStepTwo = document.querySelector('.answer'),
            gameRulesButton = document.querySelector('footer button'),
            gameRulesImg = document.querySelector('.footer__rule'),
            humanPicked = gameStepTwo.querySelector('.game img');

        rockPaperAndScissorImgs.forEach(img => {
            img.addEventListener('click', showGameStepTwo)

        })

        // Game Rules
        gameRulesButton.addEventListener("click", showGameRule);

        // Functions 
        function showGameStepTwo() {
            const imageClicked = this;
            gameStepOne.classList.remove('active'); //After User Clicks One Of The Buttons, Show THe Next Step
            gameStepTwo.classList.add('active'); //Next Step
            humanPicked.setAttribute('src', imageClicked.src);
            humanPicked.parentNode.classList.add(imageClicked.parentNode.classList.value)
            console.log(imageClicked.parentNode.classList.value);

            // Computer Random values
            const mappedArray = [...rockPaperAndScissorImgs].map(img => img.src);
            console.log(mappedArray[Math.floor(Math.random() * mappedArray.length)]);

        }

        function showGameRule() {
            gameRulesImg.classList.toggle("active")
            //  if rules image is down    
            if (gameRulesImg.classList.contains('active')) {
                gameRulesButton.innerHTML = 'x';
                gameRulesButton.classList.add('active')
                return;
            }
            gameRulesButton.classList.remove('active');
            gameRulesButton.innerHTML = 'RULES';
            console.log(this.innerHTML, "was clicked");
            return;
        }
    }
)()