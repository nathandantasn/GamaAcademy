class Data {
    /* dia: number;
    mes: number;
    ano: number; */

    constructor(public dia: number, public mes: number, public ano: number = 1970){
        /* this.dia = dia;
        this.mes = mes;
        this.ano = ano; */
    } 
}

const data = new Data(1,2,2020);
console.log(data.dia);

const data2 = new Data(1,1);
console.log(data.ano);

class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){}

     private alterarVelocidade(delta: number){
         const novaVelocidade = this.velocidadeAtual + delta;
        if (delta < 0){
            if (novaVelocidade >= this.velocidadeMaxima){
                this.velocidadeAtual += delta;
                console.log(`O carro está andando a ${this.velocidadeAtual}km/h`)
            }
        } else {
            if (this.velocidadeAtual - delta >= 0){
                this.velocidadeAtual -= delta;
                console.log(`O carro está andando a ${this.velocidadeAtual}km/h`)
                if(this.velocidadeAtual == 0){
                    console.log('Carro está parado')
                }
            }
        }
    } 

    acelerar(){
       this.alterarVelocidade(5)
    }

    frear(){
        this.alterarVelocidade(-5)
    } 

}

class Camaro extends Carro{

    private turbo = false;
    
    constructor(){
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const carro = new Carro ('Chevrolet', 'Prisma', 250);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.acelerar();

const camaro = new Camaro();

camaro.acelerar()
camaro.frear();
camaro.ligarTurbo();