const caixa=document.querySelector("#caixa")

let mapa= new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)

let pes=1

if (mapa.has(pes)) {
    caixa.innerHTML="Existe na colecao, e o valor : "+ mapa.get(pes)
}else{
    caixa.innerHTML="Nao contem a chave"
}
