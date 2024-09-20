  const hotSaleSwiper = new Swiper('.feedback-slider', {
    direction: 'horizontal',
    slidesPerView: 3,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
      }
    },
    spaceBetween: 32,
    navigation: {
      nextEl: '.feedback-container .swiper-button-next',
      prevEl: '.feedback-container .swiper-button-prev',
    },
  });

  let currentLanguage = 'vi'; 

  function switchLanguage(lang) {
      const viLanguageDiv = document.getElementById('vi-language');
      const enLanguageDiv = document.getElementById('en-language');
      
      if (lang === 'en') {
          viLanguageDiv.style.display = 'none';
          enLanguageDiv.style.display = 'flex';
          currentLanguage = 'en';
      } else if (lang === 'vi') {
          enLanguageDiv.style.display = 'none';
          viLanguageDiv.style.display = 'flex';
          currentLanguage = 'vi';
      }
  }
