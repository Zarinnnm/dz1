//regExp

const gmailInput = document.querySelector('#gmail_input'),
 gmailButton = document.querySelector('#gmail_button'),
 gmailResult = document.querySelector('#gmail_result');

const regExp =  /^(.+)@(gmail.com)$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'ERROR'
        gmailResult.style.color = 'red'
    }
}


//push mini block
const childBlock = document.querySelector('.child_block')
let counterPositionY = 0
let counterPositionX = 0
const counterBlockMini = () => {
    if(counterPositionX <= 450){
        counterPositionX++
        childBlock.style.left = counterPositionX + 'px'
        setTimeout(counterBlockMini, 0)
        console.log(counterPositionX)
    }else if(counterPositionY <= 450){
        counterPositionY++
        childBlock.style.top = counterPositionY + 'px'
        setTimeout(counterBlockMini, 0)
    }

}
counterBlockMini()