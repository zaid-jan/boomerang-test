const handleValidate = async () => {
    let input = $("#please").val()
    let res = await axios.post('http://localhost:8000/sol2', {directions: input})
    let tree = res.data
    let result = validate(tree)
    renderHtml(result, tree)    
}

const validate = (tree) => {
    let found = 0;
    for(let value of Object.values(tree)){
        if(value === 0){
            return false
        }
    }
    return true;
}

const renderHtml = (res, tree) => {
    let html = ""
    if(res === false ){
        html = 'nope'
        $('#tree-orig').html("")
    } else {
        html = "yup"
        wrap(tree, '#tree-orig')
    }
    $("#result").html(html)
}