/*carousel upcoming*/

/* tentativas com JQUERY
$('.container_image').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 8
});

*/


$(".container_image").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,  
  });

/*banner SALLE*/

$(".sales").mouseenter (function () {
  $("#log").append ("<div>SALES SALES SALES</div ")
});


/*carousel shop */

$(".carouselSlick").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,  
  });

/*carousel teamWork */

$(".slideTeamWork").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,  
});

$(".div_art").hover (
  function () {
    $(this).addClass ("opacity_articles");
  }, function () {
    $(this).removeClass ("opacity_articles");
  }
);

$(".descricao").hover (
  function (){
    $(this).find("span").css ("display", "block");
  }, function () {
    $(this).find("span").css ("display", "none");
  }
);

/*
$(".material-icons-outlined").on ("click", function (){
  if($(".material-icons-outlined").html("favorite")){
  $(this).html("favorite_border")
  } else {
  $(this).html("favorite")
  }
});
*/

$(".material-icons-outlined").each(function(){
  $(this).on('click', function(){
    if($(this).html() == 'favorite'){
      $(this).html('favorite_border');
    } else {
      $(this).html('favorite');
    }
  });
});

/*SCROLL*/

/* JQUERY*/
(function () {
let $target = $(".absoluto"),
    animationClass = "anime-start";

function animeScroll() {
  let documentTop = $(document).scrollTop();

  $target.each(function() {
      let itemTop = $(this).offset().top;
      if(documentTop > itemTop - 400) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
  })
}

animeScroll();

$(document).scroll(function() {
  animeScroll();
  console.log("teste");
})

}());


/*JS

const target = document.getElementsByClassName("absoluto");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight *3)/4);
  target.forEach(function(element){
    if(windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    }

    console.log(element.offsetTop);  
  })
}

window.addEventListener("scroll", function() {
  animeScroll();
})

*/


