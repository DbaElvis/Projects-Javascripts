const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,4,9,7,6,1]
p_array.innerHTML=elementos_array

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
    const ret=elementos_array.find((e,i)=>{
        if(e==txt_pesquisar.value){
            resultado.innerHTML="encontraado: " + e + " na posição " + i
            return e
        }
    })
    console.log(ret)
})