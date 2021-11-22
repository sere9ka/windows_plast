const slider = (sliderBlock, e) => {
    let arrowNext;
    let arrowPrev;
    let slidesAll;
    let slide1 = [];
    let slide2 = [];
    let slides = [];

    const getSlider = (slides, arrowNext, arrowPrev) => {
        let currentSlideBen = 0;
        let currentSlideSer = 0;

        const prevSlide = (slides, index, strClass) => {
            let slidesArr = slides[index]
            
            slidesArr.forEach(slide => {
                slide.classList.add(strClass)
            })
        };
        const nextSlide = (slides, index, strClass) => {
            let slidesArr = slides[index]

            slidesArr.forEach(slide => {
                slide.classList.remove(strClass)
            })

        };

        if (!e.target.closest('.arrow')) {
            return
        }
        if (sliderBlock.id == 'benefits') {
            prevSlide(slides, currentSlideBen, 'not-active')

            if (e.target.closest('.arrow--right')) {
                currentSlideBen++;
                console.log(currentSlideBen);
            } else if (e.target.closest('.arrow--left')) {
                currentSlideBen--;
                console.log(currentSlideBen);
            }
            if (currentSlideBen >= slides.length) {
                currentSlideBen = 0
                console.log(currentSlideBen);
            }
            if (currentSlideBen < 0) {
                currentSlideBen = slides.length - 1
                console.log(currentSlideBen);
            }
            nextSlide(slides, currentSlideBen, 'not-active')

        } else if (sliderBlock.id == 'services') {

            prevSlide(slides, currentSlideSer, 'not-active')

            if (e.target.closest('.arrow--right')) {
                currentSlideSer++;
            } else if (e.target.closest('.arrow--left')) {
                currentSlideSer--;
            }
            if (currentSlideSer >= slides.length) {
                currentSlideSer = 0
            }
            if (currentSlideSer < 0) {
                currentSlideSer = slides.length - 1
            }
            nextSlide(slides, currentSlideSer, 'not-active')

        } 
        
    }

    if (sliderBlock.id == 'benefits') {
        slidesAll = sliderBlock.querySelectorAll('.benefits__item')
        arrowNext = sliderBlock.querySelector('.benefits__arrow--right')
        arrowPrev = sliderBlock.querySelector('.benefits__arrow--left')
        slidesAll.forEach((slide, index) => {
            if (index <= 2) {
                slide1.push(slide)
            } if (index > 2) {
                slide2.push(slide)
            }
        });
        slides.push(slide1)
        slides.push(slide2)
            
        
        getSlider(slides, arrowNext, arrowPrev)

    } else if (sliderBlock.id == 'services') {
        slidesAll = sliderBlock.querySelectorAll('.col-lg-6')
        arrowNext = sliderBlock.querySelector('.services__arrow--right')
        arrowPrev = sliderBlock.querySelector('.services__arrow--left')
        slidesAll.forEach((slide, index) => {
            if (index <= 1) {
                slide1.push(slide)
            } if (index > 1) {
                slide2.push(slide)
            }
            
        });
        slides.push(slide1)
        slides.push(slide2)
        
        getSlider(slides, arrowNext, arrowPrev)
    }

    

    
}
export default slider