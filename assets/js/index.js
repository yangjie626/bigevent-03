$(function() {
    getUserInfo()
})

function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg(res.message)
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(user) {
    var name = user.nickname || user.username
    $('#welcome').html('hello' + name)
    var text = name[0].toUpperCase()
    if (user.user_pic !== null) {
        $('.layui-nav-img').show().attr('src', 'user.user_pic')
        $('.text-img').hide()
    } else {
        $('.layui-nav-img').hide()
        $('.text-img').show().html(text)
    }
}