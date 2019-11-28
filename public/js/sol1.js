let strings = ""
const handleInput = (e) => {
    strings = e
}

const handleSplit = () => {
    console.log
    let splitArr = strings.split(" ")
    const resArr = split(splitArr)
    console.log(resArr)
    renderHtml(resArr)
    // return resArr;
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
    return {
        string: temp,
        foundAt: j
    }
}

const createHtml = (item) => {
    return `<li class="list-group-item">${item}</li>`
}

const renderHtml = (resArr) => {
    let html = ""
    for(let value of resArr){
        html += createHtml(value)
    }
    document.getElementById("render").innerHTML = html;
}