const validator = () => {
    const numberRules = /(^0-9)/
    
    if (document.body.className == 'balkony') {
        document.querySelector('#calc-input').addEventListener('input', (e=>{e.target.value=e.target.value.replace(numberRules, "")}))
    }
}

export default validator