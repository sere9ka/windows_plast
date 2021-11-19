'use strict'
const calc = () => {
    if (document.body.className == 'balkony') {
        const calculatorSection = document.getElementById('calc')
        const calcType = calculatorSection.querySelector('#calc-type')
        const calcMaterial = calculatorSection.querySelector('#calc-type-material')
        const calcInput = calculatorSection.querySelector('#calc-input')
        const calcTotal = calculatorSection.querySelector('#calc-total')

        const getValue = () => {
            const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
            const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;
            let calcInputValue = calcInput.value;

            // console.log(calcInputValue);

            if (calcInput.value == 0) {
                calcInputValue = 1
            }

            return {
                calcTypeValue,
                calcMaterialValue,
                calcInputValue
            }
        }

        const getCalc =() => {
            let values = getValue()
            
            let sum = values.calcInputValue * values.calcTypeValue * values.calcMaterialValue

            return {sum}
        }

        const calcValue = () => {
            let value = getCalc()
            calcTotal.value = value.sum
        }

        calculatorSection.addEventListener('input', (e) => {
            if (calcType.options[calcType.selectedIndex].value != '--' && calcMaterial.options[calcMaterial.selectedIndex].value != '--') {
                calcValue()
            }
            
        })
    }
    
}

export default calc