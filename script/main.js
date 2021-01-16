let game = (function () {
    const gameStepOne = document.querySelector('.main'),
        gameStepTwo = document.querySelector('.mainTwo'),
        nextStep = gameStepTwo.querySelectorAll('.circle img'),
        [humanPicked, computerPicked] = nextStep,

        // Footer 
        rulesButton = document.querySelector('.footer__btn button'),
        rulesImg = document.querySelector('.footer__img'),
        closeImgButton = document.querySelector('.footer__img button'),

        rockPaperAndScissor = document.querySelectorAll('.main__games img');


    rulesButton.addEventListener('click', openRule)// Open Rules Image
    closeImgButton.addEventListener('click', closeRule) //close RUles Image

    rockPaperAndScissor.forEach(img => (img.addEventListener('click', showStepTwo)))


    function openRule() {
        rulesImg.classList.add('active')
    }

    function closeRule() {
        rulesImg.classList.remove('active')

    }


    function randomImageColors() {

    }
    function showStepTwo() {
        let imageClicked = this;
        gameStepOne.classList.remove('active');
        gameStepTwo.classList.add('active');

        let changeRandomImages = setInterval(() => {
            const randomImg = [...rockPaperAndScissor].map(img => img.src);
            const rnd = Math.floor(Math.random() * randomImg.length)
            computerPicked.src = randomImg[rnd];
        }, 350);
        console.log(computerPicked);

        randomImageColors()
        humanAnswer();
        computerAnswer()

        function humanAnswer() {
            humanPicked.src = imageClicked.src; //Human Picked Answer === imagePicked answer
            humanPicked.parentNode.classList.add(imageClicked.parentNode.classList.value)
        }

        function computerAnswer() {
            const randomImg = [...rockPaperAndScissor].map(img => img.src);
            const rnd = Math.floor(Math.random() * randomImg.length)
         
            setTimeout(() => {
                clearInterval(changeRandomImages)
                computerPicked.src = randomImg[rnd];
            }, 4500);

        }
    }
})();