$(function() {
    $('#link-login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    $('#link-reg').on('click', function() {
            $('.login-box').hide()
            $('.reg-box').show()
        })
        // 校验
    var form = layui.form
    form.verify({
            pwd: [
                /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
            ],
            repwd: function(value) {
                var pwd = $('.reg-box input[name=password]').val()
                if (pwd !== value) {
                    return "两次输入的密码不一致"
                }
            }
        })
        // 注册表单提交
    $('#form-reg').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            data: {
                username: $('.reg-box input[name=username]').val(),
                password: $('.reg-box input[name=password]').val()
            },
            success: function(res) {
                if (res.status !== 0) {
                    return alert(res.message)
                }
                alert(res.message)
            }
        })
    })
})