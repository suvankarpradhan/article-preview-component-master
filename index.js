$('.share').click(()=>{
$('.visibility').toggleClass('popup');
if($(window).width() < 375)
{
    if($('.article-writer').css('background-color')==='rgb(72, 85, 106)'){
        $('.article-writer').css('background-color','white');
        $('.share').css('background-color','hsl(210, 46%, 95%)');
        $('.share>img').attr('src','images/icon-share.svg');
    }else{
        $('.article-writer').css('background-color','rgb(72, 85, 106)');
        $('.share').css('background-color','hsl(214, 17%, 51%)');
        $('.share>img').attr('src','images/share.ico');        
    }
}
})