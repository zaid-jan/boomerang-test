const handleSumTree = async () => {
    let arr = $("#please").val()
    let res = await axios.post('http://localhost:8000/sol3', {postorder: arr})
    if(res.data.error){
        console.log("invalid postorder")
        $("#msg").html("invalid postorder for a bst")
        $("#tree-orig").html("")
        $("#tree-sum").html("")

    } else {
        $("#msg").html("rendering tree")
        wrap(res.data.tree, '#tree-orig')
        wrap(res.data.sumTree, '#tree-sum')
    }
    
}

