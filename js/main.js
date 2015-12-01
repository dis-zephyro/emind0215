/*
$(function() {
    var pull = $('.header-city');
    var menu = $(pull.attr("data-target"));

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(0);
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу

        if (!pull.is(e.target) // если клик был не по нашему блоку
            && pull.has(e.target).length === 0) { // и не по его дочерним элементам
            menu.hide();
        }
    });
});

*/




function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('.city-active');
    this.opts = this.dd.find('ul.city-nav > li span');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {

    var dd = new DropDown( $('.header-city') );

    $(document).click(function() {
        // all dropdowns
        $('.header-city').removeClass('active');
    });

});


//  Modal

$(".btn-modal").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.btn-close').click(function(){
    $.fancybox.close();
});