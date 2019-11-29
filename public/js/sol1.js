let strings = 'xyz abc mnp "asdf dfaa asdf" asd "fdas asdsdaff"'
const handleInput = (e) => {
    strings = e
}

const handleSplit = async () => {
    let res = await axios.post('http://localhost:8000/sol1', {strings})
    let resArr = res.data
    renderHtml(resArr)
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