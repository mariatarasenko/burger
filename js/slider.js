var mySwiper = new Swiper ('.swiper-container', {
    
    
        // Optional parameters
        direction:'horizontal',
        loop:true,
        spaceBetween: 150,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
    
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar:{
          el: '.swiper-scrollbar',
          hide: false,
        },
      })
    
    mySwiper.on('slideChange', function () {
      console.log('slide changed');
    });

    