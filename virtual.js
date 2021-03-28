const swiper = new Swiper(' .virtuals .swiper-container', {
    // Optional parameters
       loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
      // Navigation arrows
    navigation: {
      nextEl: '.virtuals .swiper-button-next',
      prevEl: '.virtauls .swiper-button-prev',
    },
  
     });