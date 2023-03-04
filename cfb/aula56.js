const caixa=document.querySelector("#caixa")

const carros=["Polo","Golf","T-Cross","HRV"]

const curso="JavaScript"
const canal="CFB Cursos"
//const frase="Este é o curso de " + curso + " do canal " + canal

const frase=`Este é o\n curso de ${curso} do\n canal ${ canal }`


let ol=`<ul>`
carros.map((el)=>{
    ol+=`<li>${el}</li>`
})
ol+`</ul>`


console.log(frase)

caixa.innerHTML=frase
caixa.innerHTML=ol