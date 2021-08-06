import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];//declarando a variável transferencia do tipo any[] - qualquer valor e array - e inicializado esse array com =[];

  transferirC($event){
    console.log($event);//o $event recebeu os valores do método aoTranferir
    const transferencia = {...$event, data: new Date()}//com ... descontroi o objeto. Assim é possível colocar mais objetos dentro da variável
    this.transferencias.push(transferencia);

  }
}
