$(document).ready(function () {
    $(".productItem").on("mouseenter", function () {
        $(this).find(".addToCart").css("display", "inline-block");
        /* wl.emitEvent("product-hover", {"prodId": productId}); */
    }).on("mouseleave", function () {
        $(this).find(".addToCart").css("display", "none")
    });
    var winW = $(window).width();
    $(".tumkategoriler").click(function () {
        $("#tumkategorilerBlock").toggle();
        if (winW < 992) {
            $("#tumkategorilerBlockIndex").toggle();
        }
    });
    // if (winW < 767) {
    // 		var ZWrapper = $(".zoomWrapper").height();
    // 		alert(ZWrapper);
    // 		$(".zoomWrapper").css('height', ZWrapper);
    // }
    $(".mblMenu").click(function () {
        $(".kategoriMmenu").css("z-index", "99");
        $(".leftMmenu").css("z-index", "100");
    });
    $(".filtre").click(function () {
        $(".leftMmenu").css("z-index", "99");
        $(".kategoriMmenu").css("z-index", "100");
    });
    $(".lMFirstUl2 li a").click(function () {
        $(".rAcKat").stop().hide(300);
        $(this).parent().find(".rAcKat").stop().slideToggle(300);
        $(this).parent().toggleClass("active");
    });
    $(".kategoriMbl li").click(function () {
        $(".kategoriMbl li").removeClass("active").find('.kategoriMblAlt').hide();
        $(this).find('.kategoriMblAlt').toggle();
        $(this).toggleClass("active");
    });
    var zoomWidth = $(".zoomWrapper").width();
    // alert(zoomWidth);
    $(".zoomWrapper").css('height', zoomWidth);
    try {
        $('.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            margin: 10
        });
        $('.owl-product').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            singleItem: true
        });
        $('.fancybox-buttons').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: {
                    type: 'inside'
                },
                buttons: {}
            },
            afterLoad: function () {
                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
            }
        });
    } catch (e) {
    }
// $(".filtre").click(function(){
//
// });
    var lazySay = $(".lazySay").length;
    var lazySayNew = lazySay / 3;
    var elems = [lazySayNew];
    var data = jQuery.makeArray(elems);
    for (var i = 0; i < elems; i++) {
        data[i] = $(".lazySay:eq(" + i + ")").find('img').attr("src");
    }
    for (var j = 0; j < elems; j++) {
        $(".owl-product").find(".owl-dots").find(".owl-dot:eq(" + j + ")").append('  <img src="' + data[j] + '" >	');
    }
// pink more
    // $(window).resize(function () {
    //     location.reload();
    // });
    $(".hamburgerMenu").click(function () {
        $("body").addClass("active");
        $(".blockL").addClass("active");
        $(".leftMenu").addClass("active");
    });
    $(".userHeader").click(function () {
        $("body").addClass("activeR");
        $(".blockL").addClass("active");
        $(".rightMenu").addClass("active");
    });
    $(".mblFilter a").click(function () {
        $("body").addClass("active");
        $(".blockL").addClass("active");
        $(".katMenu").addClass("active");
    });
    $(".blockL").click(function () {
        $("body").removeClass("active").removeClass("activeR");
        $(".blockL").removeClass("active");
        $(".leftMenu").removeClass("active");
        $(".rightMenu").removeClass("active");
        $(".katMenu").removeClass("active");
    });
    var winodwW = $(window).width();
    if (winodwW < 992) {
        $("#navMenu").appendTo(".leftMenu");
        $("#headerRight").appendTo(".rightMenu");
        $("#filtreler").appendTo(".katMenu");
        $(".yBarInput a").click(function () {
            $(".yBarInput").hide();
            $(".inputOpen").show();
        });
    }
    $(".filtreList li a").click(function () {
        $(this).parent().find(".acList").stop().slideToggle(165);
        $(this).parent("li").toggleClass("active");
    });
    $('.select').change(function () {
        $(this).parent().find('span').html($(this).val());
    });
    $(".inputOpen").click(function () {
        $(this).hide();
        $(".yBarInput").show();
    });
});
