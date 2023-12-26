// js code:
const textarea1=document.getElementById('textarea');
const totalCharacter1=document.getElementById('total-character');
const reaminingCharacter1=document.getElementById('remaining-character');

textarea1.addEventListener('keyup',()=>{
    console.log("Key-pressed");
    updateCounter();

});

function updateCounter(){
    totalCharacter1.innerText=textarea1.value.length;
    reaminingCharacter1.innerText= textarea1.getAttribute('maxlength')-textarea1.value.length;
}

updateCounter();