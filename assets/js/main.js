(function ($) {
    "use strict";

    $(document).ready(function($){
        
        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });

        // count down
        if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
         });
        }

        // projects filters isotop
        $(".product-filters #searchBtnn").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").removeClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

        $(".homepage-slider").on("translated.owl.carousel", function(){
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({'opacity': '0'});
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.3s'});
            $(".hero-btns").addClass("animated fadeInUp").css({'opacity': '0', 'animation-delay' : '0.5s'});
        });

       

        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        //mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
         // search form
        $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });
    
    });
 

    //datefilterform
   

function filterRows() {
  var from = $('#datefilterfrom').val();
  var to = $('#datefilterto').val();

  if (!from && !to) { // no value for from and to
    return;
  }

  from = from || '1970-01-01'; // default from to a old date if it is not set
  to = to || '2999-12-31';

  var dateFrom = moment(from);
  var dateTo = moment(to);

  $('#testTable tr').each(function(i, tr) {
    var val = $(tr).find("td:nth-child(3)").text();
    var dateVal = moment(val, "DD/MM/YYYY");
    var visible = (dateVal.isBetween(dateFrom, dateTo, null, [])) ? "" : "none"; // [] for inclusive
    $(tr).css('display', visible);
  });
}

$('#datefilterfrom').on("change", filterRows);
$('#datefilterto').on("change", filterRows);


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });


}(jQuery));

function showDateBox() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function showInputBox() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


let grid = document.querySelector(".products");
let grid2= document.querySelector(".sport");
let grid3= document.querySelector(".muzika");
let grid4= document.querySelector(".kultura");
let grid5= document.querySelector(".biznis");
let grid6= document.querySelector(".ostalo");
let filterInput = document.getElementById("filterInput");
let filterFormat = document.getElementById("format");

fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });

    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            if(value.category=="sport"){
               addElement(grid2, value) 
            }
            
        }
        
    });
    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            if(value.category=="muzika"){
               addElement(grid3, value) 
            }
            
        }
        
    });
    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            if(value.category=="kultura"){
               addElement(grid4, value) 
            }
            
        }
        
    });
    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            if(value.category=="biznis"){
               addElement(grid5, value) 
            }
            
        }
        
    });
    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            if(value.category=="ostalo"){
               addElement(grid6, value) 
            }
            
        }
        
    });                
 //add event listener
filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');
        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filtrirajLive(){
    let item = grid3.querySelectorAll('.item')
     console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.format');
         console.log(span); 
         let value=filterFormat.value; 
         if(filterFormat.value=="Uzivo"){
            value="live";
         }
         console.log(value);
      
         let rez=span.innerHTML; 
         rez=rez.substring(27);
         console.log(rez);
        if(rez==value){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filtrirajLiveS(){
    let item = grid2.querySelectorAll('.item')
     console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.format');
         console.log(span); 
         let value=filterFormat.value; 
         if(filterFormat.value=="Uzivo"){
            value="live";
         }
         console.log(value);
      
         let rez=span.innerHTML; 
         rez=rez.substring(27);
         console.log(rez);
        if(rez==value){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filtrirajLiveC(){
    let item = grid4.querySelectorAll('.item')
     console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.format');
         console.log(span); 
         let value=filterFormat.value; 
         if(filterFormat.value=="Uzivo"){
            value="live";
         }
         console.log(value);
      
         let rez=span.innerHTML; 
         rez=rez.substring(27);
         console.log(rez);
        if(rez==value){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filtrirajLiveB(){
    let item = grid5.querySelectorAll('.item')
     console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.format');
         console.log(span); 
         let value=filterFormat.value; 
         if(filterFormat.value=="Uzivo"){
            value="live";
         }
         console.log(value);
      
         let rez=span.innerHTML; 
         rez=rez.substring(27);
         console.log(rez);
        if(rez==value){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filtrirajLiveR(){
    let item = grid6.querySelectorAll('.item')
     console.log(item.length);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.format');
         console.log(span); 
         let value=filterFormat.value; 
         if(filterFormat.value=="Uzivo"){
            value="live";
         }
         console.log(value);
      
         let rez=span.innerHTML; 
         rez=rez.substring(27);
         console.log(rez);
        if(rez==value){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

function filterByDate(){
    let dateFr=document.getElementById("filterfromdate");
    let date=document.getElementById("filterdate");
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);
    const dateFrom=new Date(dateFr.value);
    console.log(dateFrom);
    const dateTo=new Date(date.value);
    console.log(dateTo);
    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.date'); 
        const dateEvent =new Date(span.innerHTML);
        console.log(dateEvent);
        if(dateEvent >= dateFrom && dateEvent <= dateTo){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}


// get value from the api create dynamic element
function addElement(appendIn, value){
    let div = document.createElement('div');
  //  div.className = "col-lg-4 item col-md-6 text-center";
   div.className = "col-lg-4 item col-md-6";



    let { image, title,  date, category,format, site, shortDescription } = value;

    div.innerHTML = `
				
					<div class="single-latest-news">
                    <div class="product-image">
                    <a><img class="img" src="${image}" alt=""></a>
                </div>
						<div class="news-text-box">
							<h3 class="title" ><a href="single-news.html">${title}</a></h3>
							<p class="blog-meta">
								<span class="format"><i class="fas fa-user"></i>${format}</span>
								<span class="date"><i class="fas fa-calendar"></i> ${date}</span>
							</p>
							<p class="excerpt description">${shortDescription} </p>
							<a href="${site}" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
    
    `;
    appendIn.appendChild(div);
}


function finalPrice(){
    var gornja1=document.getElementById("gornja1").value;
  //  console.log(gornja1);
    var gornja2=document.getElementById("gornja2").value;
    var donja1=document.getElementById("donja1").value;
    var donja2=document.getElementById("donja2").value;
    var loza=document.getElementById("loza").value;
    var rez=document.getElementById("ukupno");
    var k=0;
    k=gornja1*10+ gornja2*15+ donja1*20 + donja2*20 + loza*70 ; 
    rez.value=k +' KM' ;
}

function finalPriceMusic(){
    var gornja1=document.getElementById("gornja1").value;
  //  console.log(gornja1);
    var gornja2=document.getElementById("gornja2").value;
    var donja1=document.getElementById("donja1").value;
    var donja2=document.getElementById("donja2").value;
    var loza=document.getElementById("loza").value;
    var parter=document.getElementById("parter").value;
    var premparter=document.getElementById("premparter").value;
    var rez=document.getElementById("ukupno");
    var k=0;
    k=gornja1*10+ gornja2*15+ donja1*20 + donja2*20 + loza*70 + parter*30+ premparter*70; 
    rez.value=k +' KM' ;
}

function finalPriceBizz(){
    var gornja1=document.getElementById("kolicinaReg").value;
    var premparter=document.getElementById("kolicinaVip").value;
    var rez=document.getElementById("ukupno");
    var k=0;
    k=gornja1*10+ premparter*30; 
    rez.value=k +' KM' ;
}




