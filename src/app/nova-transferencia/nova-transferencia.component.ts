import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  //adiciona as propriedades para a classe
  selector: 'app-nova-transferencia', //tem que ter o prefixo app
  templateUrl: './nova-transferencia.component.html', //adicionando o html
  styleUrls: ['./nova-transferencia.component.scss'], //adcionando o scss
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();//enviando os dados para um componente pai com @OutPut

  valor: number;//valor que é usado com this.
  destino: number;//valor que é usado com this.


  transferir() {
    console.log('Solicitada Nova Tranferencia');

    const valorEmitir = {valor:this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir)//enviando o valorEmitir com .emit para o aoTransferir

    this.limparCampos()
  }
  limparCampos(){
    this.valor=0;
    this.destino=0;
  }
}
