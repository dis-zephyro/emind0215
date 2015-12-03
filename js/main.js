// Header Nav

$(function() {
    var pull = $('.nav-toddle');
    var menu = $(pull.attr("data-target"));

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(0);
    });
});



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
            obj.placeholder.text('г. ' + obj.val + ':');
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

var h = $(window).height() + 'px';
$('.index').css('height', h);


$(window).resize(function(){

    var h = $(window).height() + 'px';
    $('.index').css('height', h);

});



$(document).ready(function(){
    $(".content-box-text").mCustomScrollbar();
});