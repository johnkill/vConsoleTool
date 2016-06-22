
var __ns = function (fullNs) {
    var nsArray = fullNs.split('.');
    var evalStr = '';
    var ns = '';
    for (var i = 0, l = nsArray.length; i < l; i++) {
        i !== 0 && (ns += '.');
        ns += nsArray[i];
        evalStr += '( typeof ' + ns + ' === "undefined" && (' + ns + ' = {}) );';
    }
    evalStr !== '' && eval(evalStr);
}
var __noop = function () { };
var W = W || window;
__ns('H');
//加载的loading
var showNewLoading = function($container, tips) {
    var t = simpleTpl(),
        spinnerSize = 100,
        width = $(window).width(),
        height = $(window).height(),
        $container = $container || $('body'),
        $fond = $container ? $container.find('#fond') : $('body').children('#fond'),
        tips = tips || '努力加载中~~~';
    if ($fond.length > 0) {
        $fond.remove();
    };
    t._(' <div align="center" class="fond" id="fond">')
        ._('<div class="contener_general">')
        ._('<div class="contener_mixte"><div class="ballcolor ball_1">&nbsp;</div></div>')
        ._('<div class="contener_mixte"><div class="ballcolor ball_2">&nbsp;</div></div>')
        ._('<div class="contener_mixte"><div class="ballcolor ball_3">&nbsp;</div></div>')
        ._('<div class="contener_mixte"><div class="ballcolor ball_4">&nbsp;</div></div>')
        ._('</div>')
        ._('<p class="fond-text">' + tips + '</p>')
        ._('</div>')
    $container.append(t.toString());
    $(".fond").css({
        'top': (height - $(".fond").height()) / 2,
        'left': (width - $(".fond").width()) / 2
    });
};
//隐藏loading
var hideLoading = function($container) {
    if ($container) {
        $container.find('.fond').hide();
    } else {
        $('body').children('.fond').hide();
    }
};
var simpleTpl = function(tpl) {
    tpl = $.isArray(tpl) ? tpl.join('') : (tpl || '');

    return {
        store: tpl,
        _: function() {
            var me = this;
            $.each(arguments, function(index, value) {
                me.store += value;
            });
            return this;
        },
        toString: function() {
            return this.store;
        }
    };
};
var toUrl = function(url) {
    var delay = Math.ceil(3000 * Math.random() + 500);
    setTimeout(function() {
        window.location.href = url
    }, 200);
};
