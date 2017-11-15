// var openMenu = document.getElementsByClassName('burger_nav');
// var closeMenu = document.getElementsByClassName('close_icon');
// var button = document.getElementsByClassName('burger_menu');

// button.addEventListener('click', function(){
//     openMenu.classList.add('burger_nav');
// });

// console.log(openMenu);


$(document).ready()
function changeText(){
    var $containerWidth=$(window).width();
    if ( $containerWidth <= 480){
        $('.reviews_descr_butt').text('читать отзыв')
};
console.log($containerWidth);
}

changeText();

