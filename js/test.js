function ktemail(){
    var email = document.getElementById("email").value; 
    var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regexEmail.test(email))
    {
        document.getElementById("Mail").innerHTML ="Sai Định Dạng";
        return false;
    } 
    else
    {
        document.getElementById("Mail").innerHTML ="";
       return true;
    }
};
function ktmk(){
    var password = document.getElementById("password").value; 
    var regexPS = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;   
    if(!regexPS.test(password)) 
    {
        document.getElementById("Pass").innerHTML="Password gồm chữ cái, chữ số và từ 6 ký tự trở lên";
        return false;
    }
    else
    {
        document.getElementById("Pass").innerHTML="";
        return true;
    }   

};
function ktmang(){
    let Account=['tranhoanglong720@gmail.com','tranvukhai720@gmail.com'];
    var email = document.getElementById("email").value; 
    if(!Account.includes(email))
    {
        alert("Ban nhap sai tai khoan vui long nhap lai");
        return false;
    }
    else
    {
        alert("dang nhap thanh cong");
        data-dismiss;
        return true;
    }
}