import { LightningElement } from 'lwc';

export default class InputLwcImc extends LightningElement {
    //aprender spread na marra sem fazer um mento de handle
    inputImc = {
        nome : '',
        peso : '',
        altura: ''
    }
    nome1= '';//fica fando NaN por causa que tem de ser vazio
    peso1= '';
    altura1= '';
    mensagem= '';
    
    //chamar o evento de handle onde meu amigo usuario vai digitar e chamar
    hendleCaptar(event){
        //criar variaveis que vao armazenar chave e valor
        let inputName = event.target.name;//chavinha pega
        let inputValue = event.detail.value;//valorzin tambem pego
        //fazer o sread dentro do meu objeto
        this.inputImc = {
            ...this.inputImc, [inputName]:inputValue
        };
        //atribuir valores do meu objeto en variaveis para trabalhar em cima delas
        this.nome1 = this.inputImc.nome;
        this.peso1 = this.inputImc.peso;//se eu usar parseFloat aqui por algum motivo tosco o resultado da NaN
        this.altura1 = this.inputImc.altura;

    }
    calcularIMC() {
        const peso = parseFloat(this.peso1);//por algum motivo estranho do Js ele não aceita setar como float dentro do handle
        const altura = parseFloat(this.altura1);
    
        const imc = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
    
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3';
        }

        this.mensagem = `Seu IMC é ${imc} - Classificação: ${classificacao}`;
    
    }
}