const getProfessor = async ()=>{
    const apiURL = await fetch('https://projetoemocionometro.onrender.com/professor')
    const infoProfessor=await apiURL.json()
     exibeProfessor(infoProfessor)
}

const exibeProfessor=(infoProfessor)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    infoProfessor.forEach((infoProfessor)=>{
        const professorHTML = `
        <tr>
            <td>${infoProfessor.nome}</td>
            <td>${infoProfessor.disciplina}</td>
            <td>${infoProfessor.perfil}</td>
            <td>${infoProfessor.ativo? "<img src='../../assets/icones/ativo.svg' class='checked'" : "<img src='../../assets/icones/desativado.svg' class='checked'"}">
            <td>
            <button class="editaprof" onclick="editarProfessor(${infoProfessor.id})"></button>
            <button class="apagaprof" onclick="excluirProfessor(${infoProfessor.id})"></button>
            </td>

        </tr>
        ` 
        tabela.innerHTML=tabela.innerHTML + professorHTML
    })
}

getProfessor()

const editarProfessor =(id)=>{
    window.location=`edita.html?id=${id}`
}