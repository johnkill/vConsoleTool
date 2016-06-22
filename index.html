$(document).ready(function() {
    cookie.set('openid', 'sfsdfds', { expires_in: 7 });
    cookie.set('openid1', 'sfsdfds', { expires_in: 7 });
    cookie.set('openid2', 'sfsdfds', { expires_in: 7 });

    // console.log(cookies.key(1));
    //  var cookiesItem = JSON.stringify(cookies);
    // $.each(cookies,function(index,el))
    var ref = new Wilddog("https://yddf.wilddogio.com/");
    var my_code = new vConsole.VConsolePlugin('my_code', 'cookie');
    var storage = window.localStorage;
    var session = window.sessionStorage;
    storage.setItem("22", "sdfsdf");
    storage.setItem("1122", "sdfsdf");
    storage.setItem("2222", "sdfsdf");
    session.setItem("22", "sdfsdf");
    console.log("media-w:" + window.screen.width);
    console.log("media-H:" + window.screen.height);
    my_code.on('renderTab', function(callback) {
        var t = simpleTpl();
        t._('<div class="vc-log">')
        for (var i = 0, len = storage.length; i < len; i++) {
            var key = storage.key(i);
            var value = storage.getItem(key);
            if (key.indexOf("BMap") > -1 || key.indexOf("SUG") > -1) {
                continue;
            } else {
                var d = new Date();
                t._('<div class="vc-item vc-item-code"><span class="vc-item-meta">' + d.getHours() + ':' + d.getMinutes() + ":" + d.getSeconds() + '</span>')
                    ._('<div class="vc-item-content"><div class="vc-fold"><i class="vc-fold-outer">*====sessionStorage===*' + key + '</i>')
                    ._('<pre class="vc-fold-inner vc-max-height">{<i class="vc-code-key">' + key + '</i>:<i class="vc-code-string">' + value + '</i>}</pre></div></div></div>')
            };
        }
        for (var i = 0, len = session.length; i < len; i++) {
            var key = session.key(i);
            var value = session.getItem(key);
            if (key.indexOf("BMap") > -1 || key.indexOf("SUG") > -1) {
                continue;
            } else {
                var d = new Date();
                t._('<div class="vc-item vc-item-code"><span class="vc-item-meta">' + d.getHours() + ':' + d.getMinutes() + ":" + d.getSeconds() + '</span>')
                    ._('<div class="vc-item-content"><div class="vc-fold"><i class="vc-fold-outer">*====localStorage===*' + key + '</i>')
                    ._('<pre class="vc-fold-inner vc-max-height">{<i class="vc-code-key">' + key + '</i>:<i class="vc-code-string">' + value + '</i>}</pre></div></div></div>')
            };
        }
        var cookies = cookie.all();
        for (cookieitem in cookies) {
            var d = new Date();
            t._('<div class="vc-item vc-item-code"><span class="vc-item-meta">' + d.getHours() + ':' + d.getMinutes() + ":" + d.getSeconds() + '</span>')
                ._('<div class="vc-item-content"><div class="vc-fold"><i class="vc-fold-outer">*====cookie===*' + cookieitem + '</i>')
                ._('<pre class="vc-fold-inner vc-max-height">{<i class="vc-code-key">' + cookieitem + '</i>:<i class="vc-code-string">' + cookie.get(cookieitem) + '</i>}</pre></div></div></div>')
        }
        t._('</div>')
        var html = t.toString();
        callback(html);
    });
    my_code.on('ready', function() {
        $(".vc-item-code").click(function() {
            $(this).find(".vc-fold").toggleClass("vc-toggle");
        })
    });
    my_code.on('addTool', function(callback) {
        var toolList = [];

        callback(toolList);
    });
    my_code.on('addTool', function(callback) {
        var toolList = [];
        toolList.push({
            name: 'Reload',
            global: false,
            onClick: function(e) {
                location.reload();
            }
        });
        toolList.push({
            name: 'clear',
            global: false,
            onClick: function(e) {
                localStorage.clear();
                $(".vc-item-code").parent(".vc-log").empty();
                cookie.empty();
            }
        });
        callback(toolList);
    });

    vConsole.addPlugin(my_code);
    H.register = {
        init: function() {
            this.loadBox();
            //showNewLoading();
            this.jumpEvent();
        },
        jumpEvent: function() {

            var nickname = localStorage.getItem("userName");
            if (nickname) {
                toUrl("comment.html");
            } else {
                hideLoading();
                $(".main").removeClass("none");
            }
        },
        EventHander: function() {

        },
        loadBox: function() {
            var animating = false,
                submitPhase1 = 1100,
                submitPhase2 = 400,
                logoutPhase1 = 800,
                $login = $(".login"),
                $app = $(".app");

            $(document).on("click", ".login__submit", function(e) {
                if (animating) return;
                animating = true;
                var that = this;
                ripple($(that), e);
                $(that).addClass("processing");
                setTimeout(function() {
                    var userName = $("input[type=text]").val();
                    var password = $("input[type=password]").val();
                    console.log(userName);
                    console.log(password);
                    if (userName == "" || password == "") {
                        alert("请输入完整用户名和密码");
                        $(that).removeClass("processing");
                        animating = false;
                    } else {
                        localStorage.setItem("userName", userName);
                        ref.push({
                            "password": password,
                            "nicname": userName
                        });
                        toUrl("comment.html");
                    }
                }, submitPhase1);
            });
            $(".move-box").css({ "-webkit-animation": "mm 25s infinite", "animation-timing-function": "ease", "-webkit-animation-timing-function": "ease" });
        },
    }

    function ripple(elem, e) {
        $(".ripple").remove();
        var elTop = elem.offset().top,
            elLeft = elem.offset().left,
            x = e.pageX - elLeft,
            y = e.pageY - elTop;
        var $ripple = $("<div class='ripple'></div>");
        $ripple.css({ top: y, left: x });
        elem.append($ripple);
    };
    H.register.init();
});
