const axios= require('axios')

const targetUrl='http://local:5173/notificacao'; //localhost alvo que será testado
const numeroDeRequisitos = 1000; //numero totla de requisiçoes que o teste vai fazer e aguarda o retorno
const ocorrencia=50; //numero de requisições simultaneas

const sendRequest = async()=>{ //aqui ele vai enviar um resuisito, como se alguem estivesse tentando acessar a pagina de notificacao
    try{
        await axios.get(targetUrl) //tentará com o axios pegar a url que esta sendo requisitada
        console.log("Requisitado com sucesso!")
    }
    catch(errrrro){
        console.error("(R)esquisitão falhou....", errrrro)
    }
}
const stressTest= async ()=>{
    const promise=[]
    for(let i=0; i<numeroDeRequisitos; i++){
        promise.push(sendRequest())


        if(promise.length >=ocorrencia){ //se o numeros de resuisições for maior que o numero de ocorrendia que setamos...
            await Promise.all(promise)
            promise.length=0  //... nós iremos zerar o numero de resuisições do teste
        }
    }

    await Promise.all(promise) //pega quaisquer requisições ainda pendente
    console.log("Teste de estress finalizado ...")
}