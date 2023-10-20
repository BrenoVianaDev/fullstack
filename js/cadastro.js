const formulario=document.getElementById('alinhaform')

const cadastrarProfessor = async (professor)=>{
    await fetch('http://localhost:3000/professor',{
      method:'POST',  
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

    cadastrarProfessor(professor)
 
})