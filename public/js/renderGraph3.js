const createMarkup = (name, tree) => {
    let finalMarkup = `{"chart": {"container": "#${name}"},"nodeStructure": {${createNode(tree, 0)}}}`
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

const wrap = (orig, sum) => {
    let markupOrig = JSON.parse(createMarkup('tree-orig',orig ))
    let markupSum = JSON.parse(createMarkup('tree-sum', sum))    
    let chartOrig = new Treant(markupOrig, $ );
    let chartSum = new Treant(markupSum, $ );
}


