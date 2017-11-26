//team accordeon
let acc = document.querySelector('.team_list'), 
list = acc.children;

acc.addEventListener('click', event => {
	let target = event.target
  if (!target.classList.contains('team_name')) {
  	return
  }
  
  event.preventDefault()
  target = target.parentNode
  target = target.parentNode
 
  if(target.classList.contains('active')) {
  	target.classList.remove('active')
    return
  } else {
  	[...list].forEach(item => {
    	item.classList.remove('active')
      target.classList.add('active')
    })
  }
});

$(document).ready(() => {
   
 //changed text on mobile version
    var $containerWidth=$(window).width();
        if ( $containerWidth <= 480){
        $('.reviews_descr_butt').text('читать отзыв')
        };
      

// opened burger-menu
        $('.burger_nav_container').on('click', (e) => {
            e.preventDefault();
            $('.burger_nav_hidden').toggleClass('open');
            $('.burger_nav_container').css({
                'z-index': 100
            });
       });

       //change icon burger_menu
       $(".burger_nav_container").on("click", function() {
        const that = $(this);    
        if (that.hasClass("is-open")) {
          that.removeClass("is-open").addClass("is-closed");      
        } else {
          that.removeClass("is-closed").addClass("is-open");      
        }    
      });
    
 //horysontal accordeon

    const items= $('.menu_content');

$('.menu_parts').on('click',(e) => {
        
                e.preventDefault();
                
                let $this = $(e.target);
               
                if ($this.hasClass('.menu_tytle')){
                    return
                }
              
               let openCont=$this.closest('.menu_content');

             if (openCont.hasClass('menu_content active')) {
                openCont.removeClass('active');
             } else {
                items.removeClass('active');
                openCont.addClass('active'); 
             }
    });



    //popup slider
$('.goods').on('click ',(e)=>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const popups = $('.goods_popup');
    const products = $this.children('.goods_popup');
  

    if ($this.hasClass('.goods')){
        return
    }

   if (products.hasClass('opened')){
       products.removeClass('opened');
   } else {
       popups.removeClass('opened');
       products.addClass('opened');
   }

});

    });

   
    

