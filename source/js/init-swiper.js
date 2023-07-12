const coaches = document.querySelector('.coaches');

const initCoachesSwiper = () => {

  const coachesSwiperContainer = coaches.querySelector('.swiper');
  const nextButton = coaches.querySelector('.swiper-button-next');
  const prevButton = coaches.querySelector('.swiper-button-prev');


  const coachesSwiper = new Swiper(coachesSwiperContainer, {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 4,
    breakpoints: {
      1320: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  prevButton.ariaLabel = 'Предыдущий слайд.';
  nextButton.ariaLabel = 'Следующий слайд.';

};

export {initCoachesSwiper};
