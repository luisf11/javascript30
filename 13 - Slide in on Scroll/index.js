
//retrasa cualquier funcion
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');
console.log(sliderImages)
function checkSlide(e){
    console.log('scrolleo')
    sliderImages.forEach(slideImage => {
        //scrollY Retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical.
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        console.log(slideInAt)
        //que tan lejos esta la imagen del princiopio de la ventana esta
        const imageBottom = slideImage.offsetTop;

        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledpast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledpast){
            slideImage.classList.add('active');
        }else{
            slideImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll',debounce(checkSlide));

