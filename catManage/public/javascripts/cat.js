
function getPageData(page) {
    $.get("http://localhost:3000/pagecats",{
        page: page,
        pagesize: 100
    }).then((res) => {
        var nr = baidu.template("tem", {
            list: res.data,
            pagecount: res.pagecount
        })
        $("#box").html(nr)
    })
}

 $.get("http://localhost:3000/users/islogin").then((res) => {
     if(res.data.login) {
         getPageData(1)
         logout($("#quitarea"));
         welcome($("#welcome"));
     }else {
         alert('请先登录');
         location.href = '/'
     }
})

$("#box").on('click',"span",function() {
    getPageData($(this).attr('data-page'))
}) 

$("#box").on('click',"#addbtn",function() {
    $.get("http://localhost:3000/add",{
        name: $("#add").val()
    }).then((res) => {
        if (res.return) {
            location.reload()
        }
    })
})

$("#box").on('click',".delbtn",function() {
    console.log($(this).attr("data-del"));
    $.get("http://localhost:3000/del/"+$(this).attr("data-del")).then((res) => {
        // console.log(res)
        if (res.return) {
            location.reload()
        }
    })
})

$("#box").on('click',".modifybtn",function() {
    // console.log($(this).attr("data-modify"));
    // location.href = `http://localhost:3000/modify.html`;
    $(".mark").css("display","block");
    $(".mark-name1").val($(this).attr("data-modify"));
    $(".mark-name2").val($(this).attr("data-modify"));
    
})
$(".close").click(function() {
$(".mark").css("display","none");
})

$("#modify").click(function() {
console.log($(this))
$.get("http://localhost:3000/modify/",{
    name1: $(".mark-name1").val(),
    name2: $(".mark-name2").val()
}).then((res) => {
    if(res.data) {
        $(".mark").css("display","none");
        location.reload()
    }
})
})