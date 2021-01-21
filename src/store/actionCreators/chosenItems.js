export function removeFromChosenItems(intruderIndex){
    return {
        type: "REMOVE_FROM_TOTAL_SUM",
        intruderIndex
    }
}

export function subtractFromTotalSum(oldPrice){
    return {
        type: "SUBTRACT_FROM_TOTAL_SUM",
        oldPrice
    }
}

export function addToChosenItems(newItem){
    return {
        type: "ADD_TO_CHOSEN_ITEMS",
        newItem
    }
}

export function addToTotalSum(newPrice){
    return {
        type: "ADD_TO_TOTAL_SUM",
        newPrice
    }
}