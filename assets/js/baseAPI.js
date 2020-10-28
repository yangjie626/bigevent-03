var baseURL = 'http://ajax.frontend.itheima.net'
$.ajaxPrefilter(function(option) {
    option.url = baseURL + option.url

    if (option.url.indexOf('/my/')) {
        option.headers = {
            Authorization: localStorage.getItem('token')
        }
    }
})