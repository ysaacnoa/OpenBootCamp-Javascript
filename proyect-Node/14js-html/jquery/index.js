//$(selector).accion();

/* $(document).ready(() =>{

}) */

$(()=>{
    //selectores
    //id="el-1" -> "#el-1"
    /* $("#el-1").hide(); */
    $(".hide-btn").click(()=>{
        /* $("h1").hide() */
        $("h1").fadeOut();
    })
    $(".show-btn").click(()=>{
        /* $("h1").show() */
        $("h1").fadeIn();
    })
    $("li").click(()=>{
        $("h1").css({color:"green"})
    })
    $(".add-btn").click(()=>{
        /* $("ul").append("<li>Element n</li>") */
        $("ul").prepend("<li>Element n</li>")
    })

    $("li").mouseenter((elem)=>{
        elem.target.style.color="red";
    })
    $("li").mouseleave((elem)=>{
        elem.target.style.color="black";
    })
})