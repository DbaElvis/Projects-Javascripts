class Carro{
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=200
        }else if(ptipo==3){
            this.tipo="Passeio"
            this.velmax=150
        }else{
            this.tipo="Variado"
            this.velmax=100
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }

    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }

    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max.: ${this.velmax}`)
        console.log("------------------------")
    }
}

let c1=new Carro("Rapidao", 1)
let c2=new Carro("Super Luxo", 2)
let c3=new Carro("Bombadao", 3)
let c4=new Carro("Carrega Tudo", 4)

c1.setNome("Super Veloz")
c1.setVelMax(500)
// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

c1.info()
// c2.info()
// c3.info()
// c4.info()

console.log(c2.getInfo()[0])