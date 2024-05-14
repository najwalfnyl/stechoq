<template>
  <div class=" main-container card-carousel my-6 flex justify-center items-center">
    <div class="my-card" style="background-image: url('src/assets/img/people/dm.png')"></div>
    <div class="my-card" style="background-image: url('src/assets/img/people/soldering.png')"></div>
    <div class="my-card" style="background-image: url('src/assets/img/people/stechoq1.png')"></div>
    <div class="my-card" style="background-image: url('src/assets/img/people/kolaborasi.png')"></div>
    <div class="my-card" style="background-image: url('src/assets/img/people/mentoring.png')"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const $cards = $('.my-card');
    const $num = $cards.length;
    const $carousel = $('.card-carousel');

    
    const $even = $num / 2;
    const $odd = ($num + 1) / 2;

    
    if ($num % 2 == 0) {
      $cards.eq($even - 1).addClass('active');
      $cards.eq($even - 1).prev().addClass('prev');
      $cards.eq($even - 1).next().addClass('next');
    } else {
      $cards.eq($odd - 1).addClass('active');
      $cards.eq($odd - 1).prev().addClass('prev');
      $cards.eq($odd - 1).next().addClass('next');
    }

    $cards.clone().appendTo($carousel);
    $cards.clone().prependTo($carousel);

    $('.my-card').click(function() {
      const $slide = $(this).outerWidth();
      if ($(this).hasClass('next')) {
        $carousel.animate({left: '-=' + $slide}, 500, function() {
          $carousel.append($carousel.find('.my-card').first());
          $carousel.css('left', 0);
        });
      } else if ($(this).hasClass('prev')) {
        $carousel.animate({left: '+=' + $slide}, 500, function() {
          $carousel.prepend($carousel.find('.my-card').last());
          $carousel.css('left', 0);
        });
      }

      $(this).removeClass('prev next');
      $(this).siblings().removeClass('prev active next');
      $(this).addClass('active');
      $(this).prev().addClass('prev');
      $(this).next().addClass('next');
    });

    // Keyboard navigation
    $('body').keydown(function(e) {
      if (e.keyCode == 37) { 
        $('.active').prev().trigger('click');
      } else if (e.keyCode == 39) { 
        $('.active').next().trigger('click');
      }
    });
  }
}
</script>

<style>

.card-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.card-carousel .my-card {
  border-radius: 20px; 
  height: 20rem;
  width: 28%; 
  min-width: calc(100% / 3); 
  box-sizing: border-box;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 1;
  transform: scale(0.6) translateY(-2rem);
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  background: black;
  background-size: contain; 
  background-repeat: no-repeat; 
  background-position: center; 
  transition: 1s;
}

@media (max-width: 1024px) { 
  .card-carousel .my-card {
    height: 16rem;
  }
}

@media (max-width: 768px) { 
  .card-carousel .my-card {
    height: 12rem;
  }
}
.card-carousel .my-card:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 100%;
  bottom: -5rem;
  filter: blur(4px);
}

.card-carousel .my-card.active {
  z-index: 3;
  transform: scale(1) translateY(0) translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.card-carousel .my-card.prev, .card-carousel .my-card.next {
  z-index: 2;
  transform: scale(0.8) translateY(-1rem) translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.card-carousel .my-card:before {
  content: attr(data-index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
}
</style>
