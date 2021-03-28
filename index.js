const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
   slidesPerView:2,
   slidesPerGroup:1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     
     // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });