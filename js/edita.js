const formulario=document.getElementById('alinhaform')
let professorId = null 


const getIdUrl=()=>{
    const paramString=window.location.search
    const params = new URLSearchParams(paramString)
    professorId = params.get('id')
    console.log(professorId)
}

const buscarProfessor = async ()=>{
    const response = await fetch(`http://localhost:3000/professor/${professorId}`)
    const professor = await response.json()
    return professor
}

const carregarDadosFormulario = async (professor)=>{
    document.getElementById('nome').value=professor.nome
    document.getElementById('disciplina').value=professor.disciplina
    document.getElementById('perfil').value=professor.perfil
    const toggleEdicao = document.getElementById("toggle-edicao")
    const ativo = professor.ativo === true

    if (ativo) {
        toggleEdicao.checked = true
        toggleEdicao.parentElement.classList.add(true)
    } else {
        toggleEdicao.checked = false
        toggleEdicao.parentElement.classList.add(false)
    }


}

const carregarDados = async ()=>{
    getIdUrl()
    const professor= await buscarProfessor()
    carregarDadosFormulario(professor)
}

const editarProfessor = async(professor)=>{
    await fetch(`http://localhost:3000/professor/${professorId}`,{
        method:'PUT',  
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(professor)
      })
  
      window.location="professor.html"
}


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome=formulario.elements['nome'].value
    const disciplina=formulario.elements['disciplina'].value
    const perfil=formulario.elements['perfil'].value
    const ativo=formulario.elements['ativo'].checked ? true : false

    const professor={
        nome,
        disciplina,
        perfil,
        ativo
    }

    editarProfessor(professor)
 
})


carregarDados()