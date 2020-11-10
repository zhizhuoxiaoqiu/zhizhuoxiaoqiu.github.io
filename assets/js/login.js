// if ('addEventListener' in window) {
//     window.addEventListener('load', function () {
//         document.body.className = document.body.className.replace(/\bis-preload\b/, '');
//     });
//     document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
// }

function login() {
    var login = {
        "username": null,
        "password": null
    }
    var re = {
        "status": 500,
        "reason": "",
        "body": {
            "nickname": "nickname",
            "Profile": "../../iimages/avatar.jpg"
        }
    }
    login.username = document.getElementById("username").value;
    login.password = document.getElementById("password").value;
    if (login.username == "") {
        re.reason = "请输入用户名";
    } else if (login.password == "") {
        re.reason = "请输入密码";
    } else if (login.username != "admin" || login.password != "admin") {
        re.reason = "用户名或密码错误";
    } else {
        re.body = {
            "nickname": "nickname",
            "Profile": "../../images/1.jpg"
        }
        re.reason = "登陆成功";
        re.status = 400;
    }
    window.alert(re.reason);
    if (re.status == 400) {
        window.location.href = "login.html";
    }

}