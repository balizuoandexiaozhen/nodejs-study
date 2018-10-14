var logout = (node) => {
    var tem = `<button id="quit">退出</button>`
    node.html(baidu.template(tem));
    node.on("click","#quit",function() {
        $.get('http://localhost:3000/users/logout').then((res) => {
            // console.log(res)
            if (res.data.logout) {
                alert("谢谢使用");
                location.href = '/';
            }
        })
    })
}