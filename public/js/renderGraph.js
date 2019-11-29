const createMarkup = (name, tree) => {
    let finalMarkup = `{"chart": {"container": "${name}"},"nodeStructure": {${createNode(tree, 0)}}}`
    finalMarkup = filterMarkup(finalMarkup)
    console.log("final", finalMarkup)
    return finalMarkup
}

const createNode = (sumTree, curr ) => {
    if(!sumTree.hasOwnProperty(curr)){
        return ""
    }
    else {
        return `"text": { "name": "${sumTree[curr]}" },"children": [{${createNode(sumTree, curr * 2 + 1)}},{${createNode(sumTree, curr * 2 + 2)}}]`
    }
    
}

const filterMarkup = (finalMarkup) => {
    finalMarkup = finalMarkup.replace(/{},/g, '')
    finalMarkup = finalMarkup.replace(/{}/g, '')
    finalMarkup = finalMarkup.replace(/,]/g, ']')
    return finalMarkup;
}

const wrap = (tree, pos) => {
    let markup = JSON.parse(createMarkup(pos, tree))
    let chart = new Treant(markup, $);
}


