function OtherBtn(){

    var otherCheckbtn = document.getElementById("other-btn");

    var otherText = document.getElementById("otherText");

    if(otherCheckbtn.checked){
        otherText.style.display ='block';

    } else{
        otherText.style.display = 'none';
    }

}

function textBoxOption(){
    var radioCheck = document.getElementById("yes");
    var message = document.getElementsById("message");

    if(radioCheck.checked){
        message.style.display = 'block';
    }else{
        message.style.display = 'none;'
    }
}