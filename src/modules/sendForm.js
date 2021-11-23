const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = form.querySelector('.status');
    const textLoad = 'Загрузка...'
    const successText = 'Спасибо! Наш менеджер свяжется с Вами!'
    // валидация форм
    const validate = () => {
        let success;
        const inputName = form.querySelector('[name="fio"]')
        const inputPhone = form.querySelector('[name="phone"]')

        if (inputName.value === '' || inputName.value.length < 3) {
            statusBlock.textContent = 'Введите имя, не меньше 3 БУКВ!'
        } else if (inputPhone.value.length < 11 || inputPhone.value.length > 16) {
            statusBlock.textContent = 'Введите правильный номер из 11 цифр! Формат ввода: 8 000 000 00 00'
        } else {
            success = true
        }

        return success
    }
    // убираем статус из формы
    const removeStatus = () => {
        statusBlock.textContent = ''
        statusBlock.style.display = 'none'
    }
    // отправка данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
    }
    // получение и отправка формы в отправку данных
    const submitForm = (form) => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        if (formId === 'form3') {
            statusBlock.style.color = '#19b5fe'
        }
        statusBlock.style.display = 'block'
        statusBlock.textContent = textLoad

        formData.forEach((value, key) => {
            formBody[key] = value
            
        })

        if (someElem.length != 0) {
            someElem.forEach(elem => {
                
                const element = document.getElementById(elem.id)
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent
                } else if (elem.type === 'input') {
                    formBody[elem.id] = element.value
                }
            })
        }


        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    removeStatus()
                    statusBlock.style.display = 'block'
                    statusBlock.style.width = ''
                    statusBlock.style.height = ''
                    statusBlock.textContent = successText
                    setTimeout(removeStatus, 8000)
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    if (error.message === 'Failed to fetch') {
                        error.message = 'Данные не отправились, ошибка подключения'
                    }
                    statusBlock.textContent = error.message
                })
        }
    }
    // проверка, есть ли форма вообще?
    try {
        if (!form) {
            throw new Error('Верните форму на место! =)')
        }
        submitForm(form)
        setTimeout(removeStatus, 5000)
    } catch (error) {

    }
}

export default sendForm