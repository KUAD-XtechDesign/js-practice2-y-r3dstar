$(function(){ 

    let txt01 = "ねむねむにゃんこ";
    let txt02 = "💯";
    let num01 = 100;
    let num02 = 2000;
    //""で囲むと文字として扱われる 数字として(数値)使いたいときは不要

    function sayhello(){
        $("#content").text("こんにちは");
    }

    function saySomething(txt){
        $("#content").text(txt01);
    }

    function samTwo(arg01,arg02){
        $("#content").append(arg01 + arg02);
    }

    $("#button01").on("click",function(){
       sayhello();
       //カッコをつけて実行のあいず
    })

    $("#button02").on("click",function(){
        saySomething();
    })

    $("#button03").on("click",function(){
        samTwo(txt01,txt02);
    })

    $("#button04").on("click",function(){
       // $("#content").text(num01 + num02);
       samTwo(num01,num02);
    })

    $('#button05').on("click",function(){
        samTwo(txt01,txt02);
        samTwo(num01 + num02);
    })
    // + - * /
    $('#button06').on("click",function(){
        $("#content").text(num01 + "÷"  + num02  + "=" + (num01 / num02) );
    })
})