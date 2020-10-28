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
            url: '/api/reguser',
            data: {
                username: $('.reg-box input[name=username]').val(),
                password: $('.reg-box input[name=password]').val()
            },
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                $('#link-login').click()
                $('#form-reg')[0].reset()
            }
        })
    })

    // 登录区域
    $('#form-login').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: {
                username: $('.login-box input[name=username]').val(),
                password: $('.login-box input[name=password]').val()
            },
            success: function(res) {
                console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg(res.message)
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }

        })
    })



})