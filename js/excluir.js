const excluirProfessor = async(id)=>{
    await fetch(`http://localhost:3000/professor/${id}`,{method:'DELETE'})
    getProfessor()
}
