import modal from './modules/modal'
import timer from './modules/timer'
import scrollTo from './modules/scrollTo'
import calc from './modules/calc'
import validator from './modules/validator'
import sendForm from './modules/sendForm'
import sertModal from './modules/sertModal'
import slider from './modules/slider'
import reviews from './modules/reviews'
import mobileMenu from './modules/mobileMenu'

modal()
timer('30 november 2021')
scrollTo()
calc()
validator()
slider()
sertModal()
reviews()
mobileMenu()

const forms = document.querySelectorAll('form')
forms.forEach((form, id) => {
    const statusBlock = document.createElement('div');
    statusBlock.classList.add('status')
    form.append(statusBlock)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.closest('.balkony')) {
            sendForm({ 
                formId: `form${id+1}`,
                someElem: [
                    {
                        type: 'block',
                        id: 'calc-total'
                    }
                ]
             })
        } else {
        sendForm({ 
            formId: `form${id+1}`,
            someElem: [

            ]
         })
        }
    })
})
