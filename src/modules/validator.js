const validator = () => {
    const phones = document.querySelectorAll('[name="phone"]')
    const nameUsers = document.querySelectorAll('[name="fio"]')
    const numberRules = /(^0-9)/;
    const phoneRules = /([^0-9\+])/;
    const nameRules = /[^A-Z-a-z-А-Я-а-я\s]+$/i;
    
    if (document.body.className == 'balkony') {
        document.querySelector('#calc-input').addEventListener('input', (e=>{e.target.value=e.target.value.replace(numberRules, "")}))
    }
    nameUsers.forEach(nameUser => {
        nameUser.addEventListener('input', (e=>{
            e.target.value = e.target.value.replace(nameRules, "")
        }))
    })
    phones.forEach(phone => {
        phone.addEventListener('input', (e=>{
            e.target.value = e.target.value.replace(phoneRules, "")
        }))
    })
}

export default validator