       //слайдер "карусель" листание влево
       document.getElementById('slider-left').onclick = sliderLeft;
       var left = 0;

       function sliderLeft() {
              var block__carousel = document.getElementById('block__carousel');
              left = left - 34;
              if (left < -90) {
                     left = 0;
              }
              block__carousel.style.left = left + '%';
       }

       //слайдер "карусель" листание вправо

       document.getElementById('slider-right').onclick = sliderRight;
       var left = 0;

       function sliderRight() {
              var block__carousel = document.getElementById('block__carousel');
              left = -left + 34;
              if (left > -90) {
                     left = 0;
              }
              block__carousel.style.left = left + '%';
       }

