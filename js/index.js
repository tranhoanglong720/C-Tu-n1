function isEmail(inputEmail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
	return inputPassword.length > 4;
}

function dangnhap(){
    $('#email').change(function(){
        var email = $(this).val().trim();
        // alert(`email = ${JSON.stringify(email)}`)
        if(!isEmail(email)) {
            //Error ?
            $(".emailError").html("Email is not valid format");
        } else {
            $(".emailError").html("");
        }
    });
    $('#password').change(function(){
        var password = $(this).val();	
        if(!validatePassword(password)) {
			$(".passwordError").html("Password must be at least 5 characters");
		} else {
			$(".passwordError").html("");
		}
    });
}
function ktemail(){
    var email = document.getElementById("txtemail").value; 
    var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regexEmail.test(email))
    {
        document.getElementById("dkemailerror").innerHTML ="Sai Định Dạng";
        return false;
    } 
    else
    {
        document.getElementById("dkemailerror").innerHTML ="";
       return true;
    }
};
function ktmk(){
    var password = document.getElementById("txtmk").value; 
    var regexPS = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;   
    if(!regexPS.test(password)) 
    {
        document.getElementById("dkmkerror").innerHTML="Password gồm chữ cái, chữ số và từ 6 ký tự trở lên";
        return false;
    }
    else
    {
        document.getElementById("dkmkerror").innerHTML="";
        return true;
    }   

};
function ktten(){
    var Ten = document.getElementById("txtten").value; 
    var regexHoten = /^[A-Z]+[A-Za-z]*(\s*[A-Z]+[A-Za-z]*)$/;
    if(!regexHoten.test(Ten)) 
    {
       document.getElementById("tenerror").innerHTML="Họ Tên Phải Bắt đầu bằng chữ in hoa";
       return false;
    }
    else
    {
        document.getElementById("tenerror").innerHTML="";
        return true;
    }  
}
function ktns(){
    var ns=document.getElementById("txtns").value;
    if(ns.trim=='') 
    {
        document.getElementById("nserror").innerHTML="Ngay Sinh Bat buoc nhap";
        return false;
    }
    else
    {
        document.getElementById("nserror").innerHTML="";
        return true;
    }
};
function ktsdt(){
    var sdt= document.getElementById("txtsdt").value;
    var regexsdt=/((03|07|08)+([0-9]{8})\b)/g;
    if(!regexsdt.test(sdt))
    {
       document.getElementById("sdterror").innerHTML="Số phải bắt đầu bằng 03 hoac 07 hoac 08";
       return false;
    }
    else
    {
        document.getElementById("sdterror").innerHTML="";
        return true;
    }   
};
function nlmk(){
    var nlpassword = document.getElementById("txtnlmk").value; 
    var password = document.getElementById("txtmk").value; 
    if(password==nlpassword)
    {
        document.getElementById("nlmkerror").innerHTML="";
    }
    else
    {
        document.getElementById("nlmkerror").innerHTML="Không trùng khớp";
    }

}
function dangky(){ 
    var email = document.getElementById("txtemail").value; 
    var password = document.getElementById("txtmk").value; 
    
    var Ten = document.getElementById("txtten").value; 
    var sdt= document.getElementById("txtsdt").value;
    var ns=document.getElementById("txtns").value;   
    var nam=document.getElementById("rdNam").value;
    var nu=document.getElementById("rdNu").value;
    var gioitinh="";
    if(nam.checked)
    {
        gioitinh=nam;
    }
    else
    {
        gioitinh=nu;
    }
  var chon= confirm('Thông Tin Đã Đăng kí: \n'+email+"\n"+password+"\n"+Ten+"\n"+ns+"\n"+sdt+"\n"+gioitinh);
  if(chon==1)
  {
      alert('Đăng kí thành công');
  }
  return true;
} ;
