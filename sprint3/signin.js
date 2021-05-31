function loginButton(){
    var username=document.getElementById("userName").value;
    var password=document.getElementById("surName").value;
    if(username=="admin" && password=="admin"){
        var url = "http://stackoverflow.com";
        $(location).attr('href',url);
        window.location.href="http://stackoverflow.com"
        return false;
    }
    else
        alert("Şifre veya username yanliş.Tekrar deneyiniz")
}