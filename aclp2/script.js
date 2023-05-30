const leia = require("prompt-sync")();

class Jardinagem{
    constructor(id, descricao, ativo, estoque, preco, planta, vasos){
        this.id=id;
        this.descricao=descricao;
        this.ativo=ativo;
        this.estoque=estoque;
        this.preco=preco;
        this.planta=planta;
        this.vasos=vasos;
    }

    ativar(){
        this.ativo=true
    }

    retirarEstoque(quantidade){
        if(this.ativo){
            if(quantidade <0){
                console.log("Impossivel, valor negativo")
            }
            else if (quantidade==0){
                console.log("Impossivel, valor zerado")
            }
            else if(quantidade>this.estoque){
                console.log("Impossivel, acabou no estoque")
            }
            else{
                this.estoque += quantidade
            }
        }
        else{
            console.log("Inativa")
        }

    }

    invluirEstoque(quantidade){
        if(this.ativo){
            if(quantidade <0){
                console.log("Impossivel, valor negativo")
            }
            else if (quantidade==0){
                console.log("Impossivel, valor zerado")
            }
            else{
                this.estoque += quantidade
            }
        }
        else{
            console.log("Inativa")
        }
    }
}

console.log("Tadashi Plantas");
console.log("Aqui sua casa é mais perto da natureza!!!\n")

const querCompra = Leia(
    "Deseja fazer compra? S/N: "
)

if (querCompra == "S"){
    console.log("Cadastro inicial do produto")

    let id = parseInt(leia("Digite o Id do produto: "));
    let descricao = leia("Digite a descrição do produto: ");
    let preco = parseFloat(leia("Digite o valor unitario do produto: "));
    let planta = leia("Digite com planta voce quer: ");
    let vasos = leia ("Digite quantos vasos voce quer: ");

    console.log("Produto cadastrado!")

    let produto1 = new Jardinagem(id, descricao, ativo, estoque, preco, planta, vasos)

    for(let x=1; x<=5; x++){
        console.log("Venda"+x);
        console.log("Produto"+id);
        console.log("Descrição"+descricao);
        console.log("Estoque"+estoque);

        let quantidade = parseInt(leia("Quantos produtos deseja comprar?: "))
        let valorCompra = quantidade*preco;
        
        console.log("Valo a pagar: "+valorCompra)

        produto1.retirarEstoque(quantidade);
        

    }


}
else{
    console.log("Até breve!!")
}

