const scrollTo = () => {
    const btnToTop = document.querySelector('.smooth-scroll__img')
    const firstSection = document.getElementById('offer')


    btnToTop.style.cursor = 'pointer'
    btnToTop.style.display = 'none'

    const trackScroll = () => {
        let scrolled = window.pageYOffset;
        
        if (scrolled > 2) {
            btnToTop.style.display = 'block'
        }
        if (!scrolled) {
            btnToTop.style.display = 'none'
        }
    }

    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 0);
          }
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (window.pageYOffset < 300) {
            window.addEventListener('scroll', trackScroll);
        }
    })
    
    btnToTop.addEventListener('click', backToTop);

    
}

export default scrollTo