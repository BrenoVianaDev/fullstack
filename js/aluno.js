const getAluno = async ()=>{
    const apiURL = await fetch('http://localhost:3000/aluno')
    const infoAluno=await apiURL.json()
     exibeAluno(infoAluno)
}

const exibeAluno=(infoAluno)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    infoAluno.forEach((infoAluno)=>{
        const alunoHTML = `
        <tr>
            <td>${infoAluno.nome}</td>
            <td>${infoAluno.turma}</td>            
            <td>${infoAluno.ativo? "<img src='../../assets/icones/ativo.svg' class='checked'" : "<img src='../../assets/icones/desativado.svg' class='checked'"}">
            <td>
            <button class="editaaluno" onclick="editarAluno(${infoAluno.id})"></button>
            <button class="apagaaluno" onclick="excluirAluno(${infoAluno.id})"></button>
            </td>

        </tr>
        ` 
        tabela.innerHTML=tabela.innerHTML + alunoHTML
    })
}

getAluno()

const editarAluno =(id)=>{
    window.location=`editaaluno.html?id=${id}`
}