import { animate } from "./helpers";

const modal = () => {
    // отслеживаем события
    const body = document.querySelector('body')
    const modalForTel = document.querySelector('.header-modal--opened')
    const modalForMan = document.querySelector('.services-modal--opened')
    const overlay = document.querySelector('.overlay')

    // функция - переключатель
    const toggleModalTel = (toggleClass, targetElem) => {
        overlay.classList.toggle('overlay-open')
        targetElem.classList.toggle(toggleClass)
    }    

    // отслеживаем клики по кнопке + запуск переключателя
    body.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.matches('.callTel') || e.target.matches('.header-modal__close')) {
            toggleModalTel('header-modal', modalForTel)
        } else if (e.target.matches('.modalCall') || e.target.matches('.services-modal__close')) {
            toggleModalTel('services-modal', modalForMan)
        }
    })
    
    
    
}

export default modal