$('.share').click(()=>{
$('.visibility').toggleClass('popup');
if($(window).width() < 375)
{
    if($('.article-writer').css("background-color")==='rgb(72, 85, 106)'){
        $('.article-writer').css('background-color','white');
    }else{
        $('.article-writer').css('background-color','rgb(72, 85, 106)');
    }
}
})