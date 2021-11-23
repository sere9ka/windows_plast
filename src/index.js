import modal from './modules/modal'
import timer from './modules/timer'
import scrollTo from './modules/scrollTo'
import calc from './modules/calc'
import validator from './modules/validator'
import sendForm from './modules/sendForm'
import slider from './modules/slider'
import sertModal from './modules/sertModal'
import sliderOld from './modules/sliderOld'


modal()
timer('24 november 2021')
scrollTo()
calc()
validator()
slider()
sertModal()
sliderOld()


const forms = document.querySelectorAll('form')
forms.forEach((form, id) => {
    const statusBlock = document.createElement('div');
    statusBlock.classList.add('status')
    form.append(statusBlock)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendForm({ 
            formId: `form${id+1}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ]
         })
    })
})
