$(document).ready(function (){
    console.log("ready");
    $.ajax({
        url:"local.json",
        dataType:"json",
        async:false,
        type:"GET",
        success:function (data){
            for (var i=0;i<4;i++){
                $("#card"+i+"").append(data["teammembers"][i].number);
                $("#card"+i+"").css('font-size',40);
            }
        },
        error(){
            console.log("error");
        }
    })
})