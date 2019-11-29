const handleSumTree = async () => {
    let arr = $("#please").val()
    let res = await axios.post('http://localhost:8000/sol3', {postorder: arr})
    let tree = res.data.tree
    let sumTree = res.data.sumTree
    wrap(tree, '#tree-orig')
    wrap(sumTree, '#tree-sum')
}

