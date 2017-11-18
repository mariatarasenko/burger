// var openMenu = document.getElementsByClassName('burger_nav');
// var closeMenu = document.getElementsByClassName('close_icon');
// var button = document.getElementsByClassName('burger_menu');

// button.addEventListener('click', function(){
//     openMenu.classList.add('burger_nav');
// });

// console.log(openMenu);


// $(document).ready()
// function changeText(){
//     var $containerWidth=$(window).width();
//     if ( $containerWidth <= 480){
//         $('.reviews_descr_butt').text('читать отзыв')
// };
// console.log($containerWidth);
// }

// changeText();


$(document).ready(() => {
   
    //changed text on mobile version
    var $containerWidth=$(window).width();
        if ( $containerWidth <= 480){
        $('.reviews_descr_butt').text('читать отзыв')
        };
        console.log($containerWidth); 

// opened burger-menu
        $('.burger_menu').on('click', (e) => {
            e.preventDefault();
            $('.burger_nav_hidden').css({
                display:'block'
            });
       });

// closed burger-menu
       $('.close_icon').on('click',(e) => {
        e.preventDefault();
           
            $('.burger_nav_hidden').css({
                display:'none'
                });
       });
    
    //turn on accordeon
   
       $('.team_link').on('click',(e) => {

        e.preventDefault();
        const $this = $(e.currentTarget);
        const container = $this.closest('.team_list');
        const items = $('.team_member',container);
        const item = $this.children('.team_name');
        const figure = $this.children('.figure_hidden');
        const content = $this.siblings('.team_info');
        const anotherContent =$('.content_wrap', content);
        const text = $('.team_content',content);
        const contentHeight= text.outerHeight();
     

      if (content.filter(':visible')) {
         
        item.toggleClass('team_activename');
        figure.toggleClass('figure_visible');
       content.css({
            'height': contentHeight
            });
       } else {
                       content.css({
                      'height': 0
                      });
      };
        
       // item.removeClass('team_activename');

    //    item.toggleClass('team_activename'); //toggle name 
    //    figure.toggleClass('figure_visible'); //toggle figure 
    //     content.slideToggle(1000);

       console.log(items);
      
      
       });

       //horysontal acc function

    //    var contents = $('.team_info');
    //    var tytles = $('.team_link');
    //    tytles.on('click',function(e){
    //     e.preventDefault();
    //     contents.filter(':visible').slideUp(function(){
    //         $(this).prev('team_link').removeClass('active');
    //     });

    //     var content = $(this).next('.team_info');

    //     if (!content.is(':visible')){
    //         content.slideDown(function(){$(this).addClass('active')});
    //     }
    //    });

//horysontal acco
       var infos = $('.menu_content');
       var names = $('.menu_tytle');

       names.on('click',function (e) {
          e.preventDefault();
          infos.filter(':visible').removeClass(function(){
             $(this).prev('menu_content').removeClass('menu_content_active'); 
          }) ;

          var info = $(this).next('.menu_content');
          if(!info.is(':visible')){
            content.addClass(function(){$(this).addClass('menu_content_active')});
          };
       });
       

    });
    

