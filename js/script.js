
(function ($) {
	"use strict";

///////////////////////////////////////////////////////

// MOBILE-MENU START 

const menu = document.querySelector(".nav-menu");
const menuMain = menu.querySelector(".menu-items");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}

// MOBILE-MENU END 

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// STICKY-HEADER START 

$(window).on("scroll", function(){
  if ($(window).scrollTop() >= 50) {
      $('body').addClass('fixed-header');
  }
  else {
      $('body').removeClass('fixed-header');
  }
});


// STICKY-HEADER END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// HEADER-POPUP START 

document.querySelector("#header-popup").addEventListener("click", function(){
  document.querySelector(".popup-wraper").classList.add("active");
})
document.querySelector(".popup-wraper .close-btn").addEventListener("click", function(){
  document.querySelector(".popup-wraper").classList.remove("active");
})

document.querySelector("#header-popup1").addEventListener("click", function(){
  document.querySelector(".popup-wraper1").classList.add("active");
})
document.querySelector(".popup-wraper1 .close-btn").addEventListener("click", function(){
  document.querySelector(".popup-wraper1").classList.remove("active");
})

document.querySelector("#header-popup2").addEventListener("click", function(){
  document.querySelector(".popup-wraper2").classList.add("active");
})
document.querySelector(".popup-wraper2 .close-btn").addEventListener("click", function(){
  document.querySelector(".popup-wraper2").classList.remove("active");
})


// HEADER-POPUP END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// TOGGLE-BUTTON START

const toggleButton = document.getElementById('toggleButton');

// Get the content element
const content = document.getElementById('content');

// Toggle the content when the button is clicked

toggleButton.addEventListener('click', function() {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});


// TOGGLE-BUTTON END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// EV ANIMATION START 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('anim-show');
    } else{
      entry.target.classList.remove('anim-show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.anim-hidden');
hiddenElements.forEach((el) => observer.observe(el));


// EV ANIMATION END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// TIMMER-ONE START

$(document).ready( function() {
  // Set the target date and time for the countdown (2 days from now)
  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  var targetTime = targetDate.getTime();

  // Update the countdown every 1 second
  var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var timeLeft = targetTime - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the countdown in the respective elements
      $("#days1, #days2").text(days);
      $("#hours1, #hours2").text(hours);
      $("#minutes1, #minutes2").text(minutes);
      $("#seconds1, #seconds2").text(seconds);

      // If the countdown is over, display a message and clear the interval
      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          $("#days1,#days2").text('0');
          $("#hours1, #hours2").text('0');
          $("#minutes1, #minutes2").text('0');
          $("#seconds1, #seconds2").text('0');
      }
  }, 1000); // Update every 1 second
});

// TIMMER-ONE END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
// TIMMER-TWO START 

$(document).ready(function() {
  // Set the target date and time for the countdown (2 days from now)
  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  var targetTime = targetDate.getTime();

  // Update the countdown every 1 second
  var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var timeLeft = targetTime - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the countdown in the respective elements
      $("#days2").text(days);
      $("#hours2").text(hours);
      $("#minutes2").text(minutes);
      $("#seconds2").text(seconds);

      // If the countdown is over, display a message and clear the interval
      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          $("#days2").text('0');
          $("#hours2").text('0');
          $("#minutes2").text('0');
          $("#seconds2").text('0');
      }
  }, 1000); // Update every 1 second
});

// TIMMER-TWO END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// PROGRESS-BAR START 


//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 10,
	  max: 500,
	  values: [ 10, 50 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});

// PROGRESS-BAR END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// HERO-SLIDER START 

var swiper = new Swiper(".hero-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// HERO-SLIDER END 

  ///////////////////////////////////////////////////////

 

  ///////////////////////////////////////////////////////

  // PRODUCT-SLIDER START 

  var swiper = new Swiper(".product-slider", {
    loop:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        with: 320,
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      567: {
        with: 567,
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        with: 1024,
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
 

  // PRODUCT-SLIDER END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // TESTIMONIAL-SLIDER START 

  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 480px

      767: {
        with: 767,
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        with: 1024,
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });

  // TESTIMONIAL-SLIDER END 

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // TESTIMONIAL-SLIDER-TWO START 

  var swiper = new Swiper(".testimonial-slider-two", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        with: 360,
        slidesPerView: 1,
        spaceBetween: 20
      },
      767: {
        with: 767,
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        with: 1024,
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        with: 1200,
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
  });


  // TESTIMONIAL-SLIDER-TWO END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // NEWS-SLIDER START

  var swiper = new Swiper(".news-slider", {
    slidesPerView: 1,
    loop:false,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        with: 320,
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      567: {
        with: 567,
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        with: 1024,
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });


  // NEWS-SLIDER END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // BRAND-SLIDER START
  
  var swiper = new Swiper(".brand-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    breakpoints: {
      360: {
        with: 360,
        slidesPerView: 2,
        spaceBetween: 20
      },
      567: {
        with: 567,
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        with: 767,
        slidesPerView: 3,
        spaceBetween: 20
      },
      991: {
        with: 991,
        slidesPerView: 4,
        spaceBetween: 30
      },
      1024: {
        with: 1024,
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });

  // BRAND-SLIDER END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

// TES-THREE-SLIDER START 

  var swiper = new Swiper(".tes-three-slider", {
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // TES-THREE-SLIDER START 

   ///////////////////////////////////////////////////////


   ///////////////////////////////////////////////////////

   // SINGLE-PRODUCT-THUMBS-SLIDER START 

  const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical', 
    slidesPerView: 4, 
    spaceBetween: 15, 
    navigation: { 
      nextEl: '.slider__next',
      prevEl: '.slider__prev'
    },
    freeMode: true, 
    breakpoints: { 
      0: { 
        direction: 'horizontal',
      },
      992: {
        direction: 'vertical',
      }
    }
  });

  ///////////////////////////////////////////////////////

  const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical', 
    slidesPerView: 1, 
    spaceBetween: 20, 
    mousewheel: true, 
    grabCursor: true, 
    thumbs: { 
      swiper: sliderThumbs 
    },
    breakpoints: { 
      0: { 
        direction: 'horizontal',
      },
      992: { 
        direction: 'vertical',
      }
    }
  });


  // SINGLE-PRODUCT-THUMBS-SLIDER START 

  ///////////////////////////////////////////////////////



  ///////////////////////////////////////////////////////

  // FEATURED-SLIDER START

  var swiper = new Swiper(".featured-product-section-two-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // FEATURED-SLIDER END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // FEATURED-SLIDER-TWO START

  var swiper = new Swiper(".featured-section-two-slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // FEATURED-SLIDER-TWO END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // SINGLE-PRODUCT-SLIDER START
  
  var swiper = new Swiper(".single-product-slider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        with: 320,
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      567: {
        with: 567,
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        with: 1024,
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        with: 1024,
        slidesPerView: 4,
        spaceBetween: 30
      }
      
    }
  });

  // SINGLE-PRODUCT-SLIDER END

   ///////////////////////////////////////////////////////

   
  ///////////////////////////////////////////////////////

  // INCREMENT AND DECREMENT START 

  $(function() {
    $('[data-decrease]').click(decrease);
    $('[data-increase]').click(increase);
    $('[data-value]').change(valueChange);
  });
  
  function decrease() {
    var value = $(this).parent().find('[data-value]').val();
    if(value > 1) {
      value--;
      $(this).parent().find('[data-value]').val(value);
    }
  }
  
  function increase() {
    var value = $(this).parent().find('[data-value]').val();
    if(value < 100) {
      value++;
      $(this).parent().find('[data-value]').val(value);
    }
  }
  
  function valueChange() {
    var value = $(this).val();
    if(value == undefined || isNaN(value) == true || value <= 0) {
      $(this).val(1);
    } else if(value >= 101) {
      $(this).val(100);
    }
  }

  // INCREMENT AND DECREMENT END
  
  ///////////////////////////////////////////////////////

  
  ///////////////////////////////////////////////////////

  // SINGLE-SHOP MENU JS START 

  $(document).ready(function(){
    $('.accordion-wrapper > ul > li:has(ul)').addClass("accordion-content");
  
    $('.accordion-wrapper > ul > li > a').on("click", function() {
      var checkElement = $(this).next();
     
      $('.accordion-wrapper li').removeClass('accordion-active');
      $(this).closest('li.accordion-content').addClass('accordion-active');	
      
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('accordion-active');
        checkElement.slideUp('normal');
      }
      
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('.accordion-wrapper ul ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }
      
      if (checkElement.is('ul')) {
        return false;
      } else {
        return true;	
      }		
    });
  });

  // SINGLE-SHOP MENU JS END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // COMMON-BTN JS SATART 

  var btn = $('#button');

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  // COMMON-BTN JS END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // REVIEW-COUNTER-STAR START 

  $('.star').on("click", function(e){
    var length = $('.review-container .star').length;
    var selected = $('.review-container .star').index($(this));
    
    $( ".review-container .star" ).each(function( index ) {
    if(index <= selected){
      
    $(this).addClass("active"); 
      
    }else{
      $(this).removeClass("active");
      
    }
      
  });
    
  });

  // REVIEW-COUNTER-STAR END
  
  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // RADIO-ITEM JS START 

  $(".radio-items .radio-item span").on("click", function(){
    var clickedItem = $(this).closest("li");
    
    // Toggle the active class for the clicked item
    clickedItem.toggleClass("active-text");
    
    // Close others by removing the active class from siblings
    clickedItem.siblings().removeClass("active-text");
  });

  // RADIO-ITEM JS END 

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // PLAETTE-ITEM js START 

  $(".palette li span").on("click", function(){
    var clickedItem = $(this).closest("li");
    
    // Toggle the active class for the clicked item
    clickedItem.toggleClass("active-color");
    
    // Close others by removing the active class from siblings
    clickedItem.siblings().removeClass("active-color");
  });

 // PLAETTE-ITEM js END

  ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////

  // PRODUCT-COLOR JS START 

  $(".product-color li p").on("click", function(){
    var clickedItem = $(this).closest("li");
    
    // Toggle the active class for the clicked item
    clickedItem.toggleClass("active-color");
    
    // Close others by removing the active class from siblings
    clickedItem.siblings().removeClass("active-color");
  });

  // PRODUCT-COLOR JS END

  ///////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////

  // TEXTBTN JS STAST 

  
  $(document).ready(function() {

    $('.filterBox').click(function() {
      $(this).toggleClass('active');
    });

     $('.filter-list li').on('click', function () {
      var selectedValue = $(this).text();
      $('.filterBtn').val(selectedValue);
    });


  });



// TEXTBTN JS END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// MAP-SECTION START 

$(document).ready(function() {
  let mapOptions = {
    center: [23.8041, 90.4152],
    zoom: 12
  };

  // Verify that the map container with the ID 'map' exists
  if ($('#map').length) {
    let map = L.map('map', mapOptions);

    let layer = L.tileLayer('../../../%7bs%7d.tile.openstreetmap.org/%7bz%7d/%7bx%7d/%7by%7d.png');
    map.addLayer(layer);

    let customIcon = {
      iconUrl: "./images/contact/marker-icon.png",
      iconSize: [60, 55]
    };

    let myIcon = L.icon(customIcon);

    let iconOptions = {
      title: "company name",
      draggable: true,
      icon: myIcon
    };

    let marker = new L.Marker([23.8041, 90.4152], iconOptions);
    marker.addTo(map);
  }
});
  
// MAP-SECTION END

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// CONTACT FORM START 


$(function() {
    // Here is the form
    var form = $('#evani-contact');

    // Getting the messages div
    var formMessages = $('.form-message p');


    // Setting up an event listener for the contact form
  $(form).submit(function(event) {
      // Stopping the browser to submit the form
      event.preventDefault();
      
      // Serializing the form data
    var formData = $(form).serialize();

    // Submitting the form using AJAX
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response) {
      
        // Making the formMessages div to have the 'success' class
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Setting the message text
        $(formMessages).text(response);

        // Clearing the form after successful submission 
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputPhone').val('');
        $('#inputMessage').val('');
    }).fail(function(data) {
      
        // Making the formMessages div to have the 'error' class
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Setting the message text
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

  });

});

// CONTACT FORM END

///////////////////////////////////////////////////////


})(jQuery);