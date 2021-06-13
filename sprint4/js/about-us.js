$(document).ready(function (){
    console.log("11111111");
        $.ajax({
            url:"https://baconipsum.com/api/?type=all-meat/?rapidapi-key=40daeb0035mshe68bf59f968a5b6p13313bjsnce52ffff1fd7",
            dataType:"json",
            async:false,
            type:"GET",
            success:function (data){
                for (var i=1;i<4;i++){
                    $("#listgroup"+i+"").append(data[i]);
                }
            },
            error(){
                console.log("error");
            }
        })
    })