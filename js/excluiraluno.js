const excluirAluno = async(id)=>{
    await fetch(`https://projetoemocionometro.onrender.com/aluno/${id}`,{method:'DELETE'})
    getAluno()
}
