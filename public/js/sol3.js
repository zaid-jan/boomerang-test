const handleSumTree = () => {
    let arr = $("#please").val().split(',').map(item => parseInt(item))
    tree = {}
    convertToBst(tree, arr, 0, arr.length)
    let sumTree = JSON.parse(JSON.stringify(tree))
    console.log("sumtree before", sumTree)
    temp = sumTree
    convertToSumTree(sumTree, 0, 0)
    console.log("sumtree after", sumTree)
    inorder(sumTree, 0, 0)
    console.log(JSON.stringify(sumTree))
    wrap(tree, sumTree)
}

const convertToSumTree = (sumTree, curr, sum) => {
    if(!sumTree.hasOwnProperty(curr))
        return 0;
    let currSum = sumTree[curr]
    convertToSumTree(sumTree, curr * 2 + 1, currSum)
    sumTree[curr] =  currSum + sum
    convertToSumTree(sumTree, curr * 2 + 2, currSum)
    sumTree[curr] = currSum + sum
    return sumTree[curr];
}

const inorder = (sumTree, curr) => {
    if(!sumTree.hasOwnProperty(curr))
        return;
    inorder(sumTree, curr * 2 + 1);
    console.log(sumTree[curr])
    inorder(sumTree, curr * 2 + 2)
}

const convertToBst = (bst, arr, curr, size) => {    
    if(curr >= size)
        return;
    let root = arr[arr.length - 1];
    bst[curr] = root;
    let cut = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] <= root){
            cut = i;
        }
    }
    let leftTree = createLeftTree(arr, cut)
    let rightTree = createRightTree(arr, cut)
    convertToBst(bst, leftTree, curr * 2 + 1, size);
    convertToBst(bst, rightTree, curr * 2 + 2, size);
}

const createLeftTree = (tree, cut) => {
    let leftTree = []
    for(let i = 0; i <= cut; i++){
        leftTree = leftTree.concat(tree[i])
    }
    return leftTree
}
const createRightTree = (tree, cut) => {
    let rightTree = []
    for(let i = cut + 1; i < tree.length - 1; i++){
        rightTree = rightTree.concat(tree[i])
    }
    return rightTree
}