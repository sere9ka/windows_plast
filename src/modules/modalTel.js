const modalTel = () => {
    // отслеживаем события
    const body = document.querySelector('body')
    const modalForTel = document.querySelector('.header-modal--opened')
    const overlay = document.querySelector('.overlay')

    // функция - переключатель
    const toggleModalTel = (e) => {
        modalForTel.classList.toggle('header-modal')
        overlay.classList.toggle('overlay-open')
    }    

    // отслеживаем клики по кнопке + запуск переключателя
    body.addEventListener('click', (e) => {
            if (e.target.matches('.fancyboxModal')) {
                toggleModalTel()
            } else if (e.target.matches('.header-modal__close')) {
                toggleModalTel()
            }
    })
    
    
    
}

export default modalTel