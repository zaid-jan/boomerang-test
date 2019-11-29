const handleValidate = () => {
    let input = $("#please").val().split(',')
    const tree = createTree(input)
    dfs(tree, 0, 'O');
    let res = validate(tree)
    console.log(tree)
    renderHtml(res, tree)    
}

const createTree = (input) => {
    let tree = {}
    for(let i = 0; i < input.length; i++){
        let key = input[i];
        key = key.toUpperCase()
        let pos = computeIndex(key)
        tree[pos] = 0
    }
    return tree;
}

const computeIndex = (key) => {
    if(key === '-')
        return 0;
    else {
        let pos = 0;
        for(let i = 0; i < key.length; i++){
            if(key[i] === "L")
                pos = pos * 2 + 1
            else if(key[i] === 'R')
                pos = pos * 2 + 2
            else 
                throw new Error("invalid input")
        }
        return pos
    }
}

const dfs = (tree, source, direction) => {
    if(tree.hasOwnProperty(source)){
        tree[source] = direction;
        dfs(tree, 2 * source + 1, direction+'L')
        dfs(tree, 2 * source + 2, direction+'R')
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

const renderHtml = (res, tree) => {
    let html = ""
    if(res === false ){
        html = 'nope'
    } else {
        html = "yup"
        wrap(tree, '#tree-orig')
    }
    $("#result").html(html)
}