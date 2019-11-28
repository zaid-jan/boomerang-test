const handleValidate = () => {
    let input = $("#please").val().split(',')
    const tree = createTree(input)
    dfs(tree, '-');
    let res = validate(tree)
    renderHtml(res)
}

const createTree = (input) => {
    let tree = {}
    for(let i = 0; i < input.length; i++){
        let key = input[i];
        key = key.toUpperCase()
        tree[key] = 0
    }
    return tree;
}

const dfs = (tree, source) => {
    if(tree.hasOwnProperty(source)){
        tree[source] = 1;
        if(source === '-'){
            dfs(tree, 'L')
            dfs(tree, 'R')
        } else {
            dfs(tree, source + 'L')
            dfs(tree, source + 'R')
        }
    }
    else {
        return;
    }    
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

const renderHtml = (res) => {
    let html = ""
    if(res === false ){
        html = 'nope'
    } else {
        html = "yup"
    }
    $("#result").html(html)
}