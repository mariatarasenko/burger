//team accordeon
let acc = document.querySelector('.team_list'),
list = acc.children;
console.log( list);

acc.addEventListener('click', event => {
	let target = event.target
  if (!target.classList.contains('team_name')) {
  	return
  }
  
  event.preventDefault()
  target = target.parentNode
  target = target.parentNode //сделала это, чтобы добраться до  прародителей. так вообще можно делать?
  console.log(target);
  if(target.classList.contains('active')) {
  	target.classList.remove('active')
    return
  } else {
  	[...list].forEach(item => {
    	item.classList.remove('active')
      target.classList.add('active')
    })
  }
})

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
    
 //horysontal accordeon

    const items= $('.menu_content');

    $('.menu_parts').on('click',(e) => {
        
                e.preventDefault();
                
                const $this = $(e.target);
               
                if ($this.hasClass('.menu_tytle')){
                    return
                }
              
               const openCont=$this.closest('.menu_content');

             if (openCont.hasClass('menu_content active')) {
                openCont.removeClass('active');
             } else {
                items.removeClass('active');
                openCont.addClass('active'); 
             }
    });

    });

   
    

