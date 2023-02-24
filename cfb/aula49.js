const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[17,20,16,14]
p_array.innerHTML=elementos_array

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme  a posição: " +i
        }
        return e >=18
    })
    if(ret){
        resultado.innerHTML="OK"
    } 
})