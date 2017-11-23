    const display = $('.main_content');
    const sections = $('.section');

    let inScroll = false;

    const mobileDetect = new MobileDetect(window.navigator.userAgent);
    const isMobile = mobileDetect.mobile();

    const showMenuActiveClass = sectionEq => {
        $('.main_links_item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
    }
    
    const performTransition = sectionEq => {
        
        if (inScroll) return
        inScroll = true

            const position = (sectionEq * -100) + '%';

            display.css({
                'transform':`translate(0, ${position})`,
                '-webkit-transform':`translate(0, ${position})`
    
            })
    
            sections.eq(sectionEq).addClass('dynamic')
            .siblings().removeClass('dynamic');

        setTimeout(()=>{
            inScroll = false;
            showMenuActiveClass(sectionEq);
        },1300);
      }

     const defineSections = sections => {
        const activeSection = sections.filter('.dynamic');
        return{
            activeSection: activeSection,
            nextSection: activeSection.next(),
            prevSection : activeSection.prev()
        }
     }
    
     const scrollToSection = direction => {
         const section = defineSections(sections)

         if (inScroll) return;

         if (direction === 'up' && section.nextSection.length){
             performTransition(section.nextSection.index())
         }

         if (direction === 'down' && section.prevSection.length){
            performTransition(section.prevSection.index())
         }
     }

         $('.wrapper').on({
        wheel :  e => {
            const deltaY = e.originalEvent.deltaY;
         
    
           let direction = (deltaY > 0) 
                 ? 'up' 
                 : 'down' 

    scrollToSection(direction);
        },
        touchmove: e => (e.preventDefault())
    });
   

    $(document).on('keydown', e =>{
 const section = defineSections(sections);

    if (inScroll) return
        switch (e.keyCode){
            case 40: //up
            if(!section.nextSection.length) return;
            performTransition(section.nextSection.index());
            break;

        case 38: //down
            if(!section.prevSection.length) return;
            performTransition(section.prevSection.index());
            break;


        }
    });


    if (isMobile) {
        $(window).swipe({
          swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            console.log(direction);
            scrollToSection(direction);
          }
        })
      }

    $('[data-scroll-to]').on('click touchstart', e =>{
        e.preventDefault();
        const $this = $(e.currentTarget);
        const sectionIndex =parseInt($this.attr('data-scroll-to'));
        
        performTransition(sectionIndex);
        
    });
