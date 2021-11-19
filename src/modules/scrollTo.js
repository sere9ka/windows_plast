const scrollTo = () => {
    const btnToTop = document.querySelector('.smooth-scroll__img')

    btnToTop.style.cursor = 'pointer'
    btnToTop.style.display = 'none'

    const trackScroll = () => {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
            btnToTop.style.display = 'block'
        }
        if (scrolled < coords) {
            btnToTop.style.display = 'none'
        }
    }

    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 0);
          }
    }

    window.addEventListener('scroll', trackScroll);
    btnToTop.addEventListener('click', backToTop);

    
}

export default scrollTo