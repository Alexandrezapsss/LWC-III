import { LightningElement } from 'lwc';

export default class InputSpreadEx2 extends LightningElement {
    //criar meu objeto de campos de input do html
    inputSpread = {
        nome: '',
        sobre: '',
        email: '',
        site: '',
        empresa: '',
        receita: ''
    }
    //somete para alocar o valor dos campos e trabalhar em cima deles
    nome1 = '';
    sobre1 = '';
    email1 = '';
    site1 = '';
    empresa1 = '';
    receita1 = '';
controlador = false;
    //começo da minha função Spread
    handleSpread(event) {
        let inputName = event.target.name;
        let inputValue = event.detail.value;
        //fazer o spread
        this.inputSpread = {
            ...this.inputSpread, [inputName] : inputValue
        }
        this.nome1 = this.inputSpread.nome;
        this.sobre1 = this.inputSpread.sobre;
        this.email1 = this.inputSpread.email;
        this.site1 = this.inputSpread.site;
        this.empresa1 = this.inputSpread.empresa;
        this.receita1 = this.inputSpread.receita;
    }
    cliqueMostra(){
        alert('Vamos ver se foi nosso Spread');
        this.controlador = !this.controlador;
    }
}