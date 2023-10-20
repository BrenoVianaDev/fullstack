const excluirAluno = async(id)=>{
    await fetch(`http://localhost:3000/aluno/${id}`,{method:'DELETE'})
    getAluno()
}
