export function handleButtonActivation(inputNameAttr, state){
    const inputs = document.querySelectorAll(`input[type=radio][name=${inputNameAttr}]`)
    for(const input of inputs){
        if(input.checked===true){
            state.setState(prevState => {
                return {
                    isButtonDisabled: false
                }
            })
        }
    }
}

export function formatPrice(val){
    
    const valArray = val.toString().split("")
    const valArrayLength = valArray.length
    let i=1
        while (i * 3 < valArrayLength) {
            valArray.splice(valArray.length - 3 * i, 0, " ")
            i++
        }

    return valArray.join("")
    
}