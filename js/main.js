  $(document).ready(()=>{
    
    //disable Pre loader
    setTimeout(() => {
      $('.preloader').fadeOut(500)
    }, 5000);

    //Get Element Has Data-color
    let elements = document.querySelectorAll(".color-box-setting .color-options ul li");

    //Check If Local Storege Has Color Value or Not to set value of --main-color and add (selected) class
    colorValue = localStorage.getItem('color-value');
    if(colorValue != null){
      document.documentElement.style.setProperty('--main-color', colorValue);
      elements.forEach(li=>{
        li.classList.remove('selected');
        if(li.dataset.color === colorValue){
          li.classList.add('selected');
        }
      })
    }else{
      document.documentElement.style.setProperty('--main-color', '#f9b707');
    }

    //Default value to navbar and upper section when document loaded
    $('.upper-section').css('display','block');
    $('nav').css({
      'background-color':'transparent',
      'top' : 60
    });    
    $('.navbar-nav .nav-item').css('margin-top', 13);

    //New value to navbar and upper section when document Scroll
    if(window.pageYOffset >= 60){
      $('nav').css({
        'background-color':'#272727',
        'top' : 0
      });
      $('.upper-section').css('display','none');
      $('.navbar-nav .nav-item').css('margin-top', 0);
    }else{
      $('nav').css({
        'background-color':'transparent',
        'top' : 60
      });
      $('.upper-section').css('display','block');
      $('.navbar-nav .nav-item').css('margin-top', 13);
    }

    window.onscroll=()=>{
    
      // Add style to navbar and upper section when Scroll 
      if(window.pageYOffset >= 60){
        $('nav').css({
          'background-color':'#272727',
          'top' : 0
        });
        $('.upper-section').css('display','none');
        $('.navbar-nav .nav-item').css('margin-top', 0);
      }else{
        $('nav').css({
          'background-color':'transparent',
          'top' : 60
        });
        $('.upper-section').css('display','block');
        $('.navbar-nav .nav-item').css('margin-top', 13);
      }

      // Show-hide scroll to top button
      if(window.pageYOffset >= 350){
        $('.arrow-to-top').css('display', 'block')    
      }else{
        $('.arrow-to-top').css('display', 'none')  
      }    
    }
    // scroll top top
    $('.arrow-to-top .fa').on('click', ()=>{
      $("html, body").animate({ scrollTop: 0 }, 600);
    })

    //toggle display search input in upper section
    $('.search_form .fa').on('click', ()=>{
      $('.search_input').toggleClass('displayBlock');
    })

    //Toggle color Box Setting Display
    $('.color-box-setting .fa').click(()=>{
      $('.color-box-setting .fa').toggleClass('fa-spin');
      $('.color-box-setting .color-options').fadeToggle(100);
    })

    //Switch color
    elements.forEach(element => {
      element.addEventListener('click',() => {
        let color = element.dataset.color;
        document.documentElement.style.setProperty('--main-color',color);
        localStorage.setItem('color-value',color);
        elements.forEach(li=>{
          li.classList.remove('selected');
        })
        element.classList.add('selected');
      }) 
    });
  })