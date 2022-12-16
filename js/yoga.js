$(function(){
    let vw = $(window).width();
    let vh = $(window).height();

    $(window).on("scroll",function () {
        let y = $(this).scrollTop();

        $(".part").each(function () {
            containerTop = $(this).offset().top - 110;
            if ($(document).scrollTop() > containerTop) {
                thisOff = $(this).attr("id");
                $(".part").removeClass("activew");
                ActiveID = $(this).addClass("activew").attr("id");
            }
        })
        $(".wrap-0 ul li").each(function () {
            thisChildren = $(this).children("a");
            thisChildrenHref = $(this).children("a").attr("href");
            if (thisChildrenHref === "#" + ActiveID) {
                $(".wrap-0 ul li a,.wrap-0 ul li button").removeClass("activea");
                $(thisChildren).addClass("activea");

            }
        })

        {
            if (y <= vh / 2) {
                $(".wrap-0 ul li a,.wrap-0 ul li button").removeClass("activea");
                $(".top").hide();
            }
            else {
                $(".top").show();
               
            }
        }

    })
    $(".top").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        })
    })
    $(".btn-mob").on("click", function () {
        $(".collapse").slideToggle();
        $(".dropdown-B").slideUp("slow");
        $(".dropdown-A").slideUp("slow");
    })
 
    
    $(".drop-A").on("click", function (e) {
        e.preventDefault();
        $(".dropdown-A").slideToggle("slow");
        $(".wrap-0 ul li a,.wrap-0 ul li button").removeClass("activea");
        $(this).addClass("activea");
        $(".dropdown-B").slideUp("slow");


    })
    $(".drop-B").on("click", function (e) {
        e.preventDefault();
        $(".dropdown-B").slideToggle("slow");
        $(".wrap-0 ul li a,.wrap-0 ul li button").removeClass("activea");
        $(this).addClass("activea");
        $(".dropdown-A").slideUp("slow");

    })
    $(".dropdown-A a").on("click", function (e) {
        $(".dropdown-B").slideUp("slow");
        $(".dropdown-A").slideUp("slow");
        $(".activea").removeClass("activea");
         $(this).addClass("activea");


    }) 

    $(".dropdown-B a").on("click", function (e) {
        $(".dropdown-B").slideUp("slow");
        $(".dropdown-A").slideUp("slow");
        $(".activea").removeClass("activea");
         $(this).addClass("activea");

    })


     $(".wrap-0  ul li a").on("click", function (e) {
          e.preventDefault();

         let v = $(this).attr("href");
          let st = $(v).offset().top - 100;
          $("body,html").animate({
             scrollTop: st
         })

         $(".dropdown-B").slideUp("slow");
         $(".dropdown-A").slideUp("slow");
         $(".activea").removeClass("activea");
         $(this).addClass("activea");


         if (vw < 767) {
            $(".collapse").slideUp();
        }
     })

     $(".demo").on("click",function(){
        window.open('demo.html','_self');
        
     })
   
     $(".back").on("click",function(){
        window.open('index.html','_self');
        
     })


})
