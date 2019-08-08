var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');


var tl = new TimelineMax({repeat:0, repeatDelay:2.5});


window.onload = function() {   
    
    tl.set(banner, {visibility: "visible"})

      /*frame one*/	
      .from(".title1-1", .4, {alpha:0, y:20, scale:.8, ease:Linear.easeIn}, "frame1-in")
      .from(".title1-2", .4, {alpha:0, y:0, scale:.8, ease:Linear.easeIn, delay:.1}, "frame1-in")
      .from(".title1-3", .4, {alpha:0, y:-20, scale:.8, ease:Linear.easeIn, delay:.2}, "frame1-in")
      .from(".vialator1-1", .5, {alpha:0,clip:"rect(0px,0px,0px,0px)", ease:Linear.easeIn, delay:.4},"frame1-in")
      .from(".vialator1-2", .5, {alpha:0,clip:"rect(0px,100px,0px,100px)", ease:Linear.easeIn, delay:.6}, "frame1-in")
      .from(".vialator1-3", .5, {alpha:0,clip:"rect(0px,0px,0px,0px)", ease:Linear.easeIn, delay:.8}, "frame1-in")
      .from(".first-bg",.5, {alpha:1, ease:Power4.easein}, "frame1-in" )
	  .from(".vendor-logo", .4, {alpha:0, ease:Power4.easein}, "frame1-in" )
	  .from(".cta", .5, {alpha:1, ease:Power4.easein}, "frame1-in" )
      .from(".dell-logo",.5, {alpha:1, ease:Power4.easein}, "frame1-in" )
      .to(".title1-1", .3, {alpha:0, y:20, scale:.8, ease:Power4.easeOut, delay:2}, "frame1-out")
      .to(".title1-2", .3, {alpha:0, y:0, scale:.8, ease:Power4.easeout, delay:2}, "frame1-out")
      .to(".title1-3", .3, {alpha:0, y:-20, scale:.8, ease:Power4.easeout, delay:2}, "frame1-out")

      
	  
	  /*frame two*/
	  .from(".title2-1", .4, {alpha:0, y:20, scale:.8, ease:Linear.easeIn}, "frame2-in")
	  .from(".title2-2", .4, {alpha:0, y:0, scale:.8, ease:Linear.easeIn, delay:.1}, "frame2-in")
      .to(".title2-1", .3, {alpha:0, y:20, scale:.8, ease:Power4.easeout, delay:1.5}, "frame2-out")
      .to(".title2-2", .3, {alpha:0, y:0, scale:.8, ease:Power4.easeout, delay:1.5}, "frame2-out")
	  .to(".vialator1-1, .vialator1-2, .vialator1-3", .3,{alpha:0, ease:Power4.easeout, delay:2}, "frame2-out")
    
  	  /*frame three*/
      .from(".vialator3-1", .5, {alpha:0,clip:"rect(0px,0px,0px,0px)", ease:Linear.easeIn, delay:.4},"frame3-in")
      .from(".vialator3-2", .5, {alpha:0,clip:"rect(0px,100px,0px,100px)", ease:Linear.easeIn, delay:.6}, "frame3-in")
      .from(".vialator3-3", .5, {alpha:0,clip:"rect(0px,100px,0px,100px)", ease:Linear.easeIn, delay:.8}, "frame3-in")     
	  .to(".first-bg",.3, {alpha:0, ease:Power4.easeout}, "frame3-in" )
      .to(".dell-logo, .cta",.5, {alpha:0, ease:Power4.easein}, "frame3-in" )
  	  .from(".dell-logo_blue, .vendor-text, .cta2",  .5, {alpha:0, ease:Power4.easeIn}, "frame3-in")
  	  .from(".title3-1, .title3-2",  .5, {alpha:0, x:100, ease:Linear.easeIn}, "frame3-in")
  	  .from(".product1, .product1b, .scrn-size1, .scrn-size1b", .5,{alpha:0, scaleX:.01, ease:Linear.easeIn}, "frame3-in")
	  .to(".title3-1, .title3-2, .vialator3-1, .vialator3-2, .vialator3-3, .vendor-logo, .dell-logo_blue", .3,{alpha:0, ease:Power4.easeout, delay:2}, "frame3-out")
	  
	  /*frame four*/
  	 .to(".product1, .product1b, .scrn-size1, .scrn-size1b", .5,{alpha:0, x:-50, scaleX:.01, ease:Linear.easeIn}, "frame4-in")
  	 .from(".product2, .scrn-size2", .5,{alpha:0, scaleX:.01, ease:Linear.easeIn}, "frame4-in")
     .from(".title4, .vendor-logo4, .shipping, .dell-logo_blue2", .5, {alpha:0, ease:Power4.easein}, "frame4-in")
     .from(".frame-4-text_box ", .5, {alpha:0, x:100, ease:Power4.easein}, "frame4-in")
     .to(".vialator4-1, .vialator4-2, .title4, .vendor-logo4, .frame-4-text_box", .3,{alpha:0, ease:Power4.easeout, delay:2})

   /*frame five*/
  	 .to(".product2, .scrn-size2", .3,{alpha:0, x:-50, scaleX:.01, ease:Power4.easein}, "frame5-in")
  	 .from(".product3, .scrn-size3", .5,{alpha:0, scaleX:.01, ease:Linear.easeIn}, "frame5-in")
     .from(".title5, .vendor-logo5, .vio", .5, {alpha:0, ease:Power4.easein}, "frame5-in")
     .from(".frame-5-text_box ", .5, {alpha:0, x:100, ease:Power4.easein}, "frame5-in")

  	  /*roll over
	  .from("#roll-cta", .5, {alpha:0, x:-300, ease:Power4.easeout}, "frame5-in")
	  .from("#rolltext", .5, {alpha:0, ease:Power4.easeout}, "frame5-in")
	  .from("#legal-text", .5, {alpha:0, ease:Power4.easeout}, "frame5-in")
	  
  	  legal.addEventListener("mouseover",legalHover);
		  function legalHover(){
		  tl.pause();
		  TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
	  }
	  
	  legal.addEventListener("mouseout",legalOut);
		  function legalOut(){
		  tl.play();
		  TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
	  }*/

	  ;

//tl.seek().pause(2);
    // tl.seek("loop")

    var currentDuration = tl.duration();
    console.log(currentDuration);   
};