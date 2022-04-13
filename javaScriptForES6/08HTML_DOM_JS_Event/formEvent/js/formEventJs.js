let idForm = document.frm01;
let pwForm = document.frm02;
let resultIDTxt;
let resultPWTxt;

function fnCheckID() {
    if (idForm.userID.value == "") {
        resultIDTxt = "아이디를 입력하세요.";
    } else {
        resultIDTxt = "멋진 아이디네요!";
        document.getElementById("resultID").style.color = "#08a600";
    }
    document.getElementById("resultID").innerText = resultIDTxt;
}    
function fnCheckPW() {
    if (pwForm.userPW.value == "") {
        resultPWTxt = "패스워드를 입력하세요.";
    } else {
        resultPWTxt = "";
    }
    document.getElementById("resultPW").innerText = resultPWTxt;
}    