const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4]
let anter=[]
let atua=[]
let dobro=[]
p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
        anter.push(anterior)
        atua.push(atual)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>V. Anterior: "+anter+"<br/>V. Atual: "+atua+"<br/>V. Dobro: "+dobro
})