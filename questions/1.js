const sol1 = (input = `you are not my friend you "are my brother" my friend`) => {
    let splitArr = input.split(" ")
    const resArr = split(splitArr)
    return resArr;
}

const split = (splitArr) => {
    resArr = []
    for(let i = 0; i < splitArr.length; i++){
        let currString = splitArr[i]
        if(currString.charAt(0) === '"'){
            resObj = qFound(splitArr, i)
            // console.log("found at", resObj.foundAt)
            currString = resObj.string
            i = resObj.foundAt
        } 
        resArr = resArr.concat(currString)
    }
    return resArr
}

const qFound = (splitArr, i) => {
    let temp = ""
    temp += splitArr[i] + " "
    let j;
    for(j = i + 1; j < splitArr.length; j++){
        const length = splitArr[j].length;
        temp += splitArr[j]
        if(splitArr[j].charAt(length - 1) === '"'){
            i = j;
            break;
        }
        temp += " "          
    }
    // console.log("temp", temp)
    return {
        string: temp,
        foundAt: j
    }
}

// console.log(sol1())