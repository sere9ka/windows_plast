const slider = () => {
    const sliderBlock = document.getElementById('benefits');
    const sliderAll = document.querySelectorAll('.benefits__item');
    let slides = []
    let slide1 = []
    let slide2 = []
    let currentSlide = 0;

    sliderAll.forEach(slide => {
        if (slide.classList.contains('not-active')) {
            slide2.push(slide)
        } else slide1.push(slide)
    })
    slides.push(slide1)
    slides.push(slide2)

    const prevSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.add(strClass)
        })
        // elems[index].classList.remove(strClass)
    };
    const nextSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.remove(strClass)
        })
        // elems[index].classList.add(strClass)
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()
        
        if (!e.target.closest('.benefits__arrow')) {
            return
        }
        
        prevSlide(slides, currentSlide, 'not-active')
        if (e.target.closest('.benefits__arrow--right')) {
            currentSlide++;
        } else if (e.target.closest('.benefits__arrow--left')) {
            currentSlide--;
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        nextSlide(slides, currentSlide, 'not-active')
    })
}
export default slider