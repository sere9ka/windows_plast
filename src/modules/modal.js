import { animate } from "./helpers";

const modal = () => {
    // отслеживаем события
    const body = document.querySelector('body')
    const modalForTel = document.querySelector('.header-modal--opened')
    const modalForMan = document.querySelector('.services-modal--opened')
    const overlay = document.querySelector('.overlay')

    // функция - переключатель
    const animModal = (toggleClass, targetElem) => {
        overlay.classList.toggle('overlay-open')
        targetElem.classList.toggle(toggleClass)

        overlay.style.transform = 'translateX(-100%)';
        targetElem.style.transform = 'translate(-100%)';

        let count = -100

        animate({
            duration: 500,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                targetElem.style.transform = `translate(${(count*10 + progress*1000)/2 - 50}%, ${(count*10 + progress*1000)/2 - 50}%)`;
                overlay.style.transform = `translateX(${count + progress*100}%)`;
                
            }
          });
    }    

    // отслеживаем клики по кнопке + запуск переключателя
    body.addEventListener('click', (e) => {
        if (e.target.matches('.callTel') || e.target.matches('.header-modal__close')) {
            e.preventDefault()
            animModal('header-modal', modalForTel)
        } else if (e.target.matches('.modalCall') || e.target.matches('.services-modal__close')) {
            e.preventDefault()
            animModal('services-modal', modalForMan)
        }
    })
    
    
    
}

export default modal