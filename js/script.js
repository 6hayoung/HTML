$(function(){
    //console.log('connect')

    //상단메뉴 fixed 이벤트
    $(window).on('scroll',function(){
        let topScroll = $(window).scrollTop();
        //console.log(topScroll)
        if(topScroll > 199) {
            $('.fixed_top').removeClass('none')
        }else{
            $('.fixed_top').addClass('none')
        }
    })

   
    //뉴스라인 자동 재생 이벤트
    $('.news_bd > ul').slick({
        autoplay:true,
        arrows:false,
        vertical:true,
    })

    //console.log($newsIndex)
})