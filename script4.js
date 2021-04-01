document.getElementById('entrar').addEventListener("click", chame);

function chame(){
    var nome = txt.value;
    var senha = pass.value;
    if(nome== ""||senha=="" ){alert('PREENCHA TODOS OS CAMPOS E TENTE NOVAMENTE.')}else{
    if(nome == 'Lavínia' && senha=='Café.B.123'){window.location.href="project5.html"}
    else{
    alert(`OS DADOS NÃO CORRESPONDEM COM O ESPERADO.`)
    }}}
