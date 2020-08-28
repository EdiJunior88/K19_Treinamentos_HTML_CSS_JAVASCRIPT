/* Tratando o evento ready */
$(document).ready(function (){
    console.log("ready");

    /* tratando o evento resize */
    $(window).resize(function (){
        var largura = $(window).width();
        var altura = $(window).height();
        console.log("resize: (" + largura + ", " + altura + ")");
    });

    /* tratando o evento scroll */
    $(window).scroll(function (){
        var x = $(window).scrollLeft();
        var y = $(window).scrollTop();
        console.log("scroll: (" + x + ", " + y + ")");
    });

    /* tratando o evento focus */
    $("*").focus(function (){
        var tagName = this.tagName;
        var id = this.id;
        console.log("focus: (" + tagName + ", #" + id + ")");
    });

    /* tratando o evento focusin */
    $("*").focusin(function (){
        var tagName = this.tagName;
        var id = this.id;
        console.log("focusin: (" + tagName + ", #" + id + ")");
    });

    /* tratando o evento blur */
    $("*").blur(function (){
        var tagName = this.tagName;
        var id = this.id;
        console.log("blur: (" + tagName + ", #" + id + ")");
    });

    /* tratando o evento focusout */
    $("*").focusout(function (){
        var tagName = this.tagName;
        var id = this.id;
        console.log("focusout: (" + tagName + ", #" + id + ")");
    });

    /* tratando o evento select */
    $("input").select(function (){
        console.log("change: (" + $(this).val() + ")");
    });

    /* tratando o evento keydown */
    $("input").keydown(function (event){
        console.log("keydown: (" + event.which + ")");
    });

    /* tratando o evento keypress */
    $("input").keypress(function (event){
        console.log("keypress: (" + event.which + ")");
    });

    /* tratando o evento keyup */
    $("input").keyup(function (event){
        console.log("keyup: (" + event.which + ")");
    });

    /* tratando o evento click */
    $("#div1").click(function (event){
        console.log("click: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento dbclick */
    $("#div1").dblclick(function (event){
        console.log("dbclick: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mousedown */
    $("#div1").mousedown(function (event){
        console.log("mousedown: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mouseup */
    $("#div1").mouseup(function (event){
        console.log("mouseup: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mouseenter */
    $("#div1").mouseenter(function (event){
        console.log("mouseenter: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mouseleave */
    $("#div1").mouseleave(function (event){
        console.log("mouseleave: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento hover */
    $("#div1").hover(function (event){
        console.log("hover: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mouseover */
    $("#div1").mouseover(function (event){
        console.log("mouseover: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mouseout */
    $("#div1").mouseout(function (event){
        console.log("mouseout: (" + event.pageX + ", " + event.pageY + ")");
    });

    /* tratando o evento mousemove */
    $("#div1").mousemove(function (event){
        console.log("mousemove: (" + event.pageX + ", " + event.pageY + ")");
    });
});

