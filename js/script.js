$(function(){
    //console.log('connect')

    
    
    function newsInt(){
        const $news = $('.news_bd > ul > li');
        let newsIdx = $news.index();

        $news.stop().animate({top:-18*newsIdx})
        
        
        console.log(newsIdx)

    }
    $(window).on('load',function(){
        newsInt()
    })

})