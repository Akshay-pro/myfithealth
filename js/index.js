
//jquery touchstart event

jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ) {
      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};

// Start of Instruct Section carousel

$('.carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:10,
    nav:false,
 
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
})
// End of Instruct Section carousel


// Start of Testimonial Section carousel
$('.testimonial-body').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// End of Testimonial Section carousel


//Start of Responsive Menu Bar Toggle Effect 

$(document).ready(function(){
	$(".hamburger-line").on("click",function(e){
		$(".mob-navbar").show('ease-in');
		 // $(".mob-nav").show();
         $(".hamburger-line").hide('ease-in');
		 $(".hamburger-cross").show('ease-in');

	});
	$(".hamburger-cross").on("click",function(e){
		$(".mob-navbar").hide('ease-in');
        // $(".mob-nav").hide();
		 $(".hamburger-line").show('ease-in');
		 $(".hamburger-cross").hide('ease-in');

	});
	$(".mob-nav-menu").on("click",function(e){
		$(".mob-navbar").hide('ease-in');
		$(".hamburger-line").show();
		 $(".hamburger-cross").hide();
	});
	
});



$(document).ready(function() {

 var getMax = function() {
  return $(document).height() - $(window).height();
 }

 var getValue = function() {
  return $(window).scrollTop();
 }

 if ('max' in document.createElement('progress')) {
  var progressBar = $('progress');
  
  progressBar.attr({
   max: getMax()
  });

  $(document).on('scroll', function() {
   progressBar.attr({
    value: getValue()
   });
  });

  $(window).resize(function() {
   
   progressBar.attr({
    max: getMax(),
    value: getValue()
   });
  });

 } else {

  var progressBar = $('.progress-bar'),
   max = getMax(),
   value, width;

  var getWidth = function() {
   
   value = getValue();
   width = (value / max) * 100;
   width = width + '%';
   return width;
  }

  var setWidth = function() {
   progressBar.css({
    width: getWidth()
   });
  }

  $(document).on('scroll', setWidth);
  $(window).on('resize', function() {
   
   max = getMax();
   setWidth();
  });
 }
});




//Alert When Subbmitting Form


function sweetAlertReview(){
     swal("Review Submitted!", "Thanks for giving your valuable review", "success");
     setTimeout(function(){
      window.location.reload();
    },3000);
}

function sweetAlertContact(){
     swal("Thanks for contacting us!", "We will get back to you soon", "success");
     setTimeout(function(){
      window.location.reload();
    },3000);
}


//starting Rating system

const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
var rateValue=document.getElementById('rateValue');

container.onclick = e => {
const elClass = e.target.classList;
 
  if (!elClass.contains('active')) { 
    items.forEach( 
    item => item.classList.remove('active')
  );
    // console.log(e.target.getAttribute("data-rate"));
    elClass.add('active'); 
    rateValue.value=e.target.getAttribute("data-rate"); 
  }
};
  


function toggle(){
  var trailer=document.querySelector('.trailer');
  trailer.classList.toggle('active');
}




var reportAnchor=document.getElementsByClassName('lists');

function waitForm(ms){
 return new Promise(resolve=>{
  
   setTimeout(function(){resolve('')},ms);

   });
  
 }


async function printy(){

var textArray=document.getElementsByClassName('hoverText');

let i = 0 ;

  for (let i = 0 ;  ; i++){

        if (i == textArray.length) {
            i=0;
        }

    textArray[i].style.display="block";
    
    reportAnchor[i].style.backgroundColor = "#4bc77d";
    reportAnchor[i].style.borderRadius = "5px";
    reportAnchor[i].style.color = "white";
    // reportAnchor[i].style.borderBottom = "thin solid green";

await waitForm(4000);
 textArray[i].style.display="none";

 reportAnchor[i].style.backgroundColor = "";
 reportAnchor[i].style.borderBottom = "";
 reportAnchor[i].style.color = "black";
     if($(window).width()>968){
         $(".mob-navbar").hide();
        $(".hamburger-line").hide();
        $(".hamburger-cross").hide();
     }else{
      if($(".hamburger-cross").css('display')=='none'){
        $(".hamburger-line").show('ease-in');
      }
    }
  }

}

 

printy();

// End Of Automatic hover and text display simultaneously