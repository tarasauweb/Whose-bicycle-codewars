const one = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}
const two = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}

const third = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}



function whoseBicycle(diary1, diary2, diary3) {
    const resultArr = []
    const arg = [...arguments]
    let result = ''

    function sum(obj) {
        let count = 0
        for (let key in obj) {
            count += obj[key]
        }
        resultArr.push(count)
    }
    arg.map(item => {
        sum(item)
    })

    let index = resultArr.lastIndexOf(Math.max(...resultArr))

    console.log(resultArr)
    console.log(index)
    switch (index) {
        case 0: result = `I need to buy a bicycle for my first son.`
            break
        case 1: result = `I need to buy a bicycle for my second son.`
            break
        case 2: result = `I need to buy a bicycle for my third son.`
            break
        default:
            return false
    }

    console.log(result)
    return result
}


whoseBicycle(one, two, third)