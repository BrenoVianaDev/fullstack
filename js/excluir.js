const excluirProfessor = async(id)=>{
    await fetch(`https://projetoemocionometro.onrender.com/professor/${id}`,{method:'DELETE'})
    getProfessor()
}
