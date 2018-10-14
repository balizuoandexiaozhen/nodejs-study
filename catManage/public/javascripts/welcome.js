var welcome = (node) => {
    $.get('http://localhost:3000/users/islogin').then((res) => {
        if (res.data.login) {
            var tem = `您好 <a><%= name %></a>`
            node.html(baidu.template(tem,{
                name: res.data.username
            }))
        }
    })
}