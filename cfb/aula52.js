const caixa=document.querySelector("#caixa")

let cores=["Azul","verde","vermelho",["claro","escuro","medio"]]
let cursos = ["HTML","CSS","JavaScript", cores]

cursos.push("C++")
cursos.push("Python")

console.log(cursos)

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})