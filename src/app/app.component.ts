import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//recebe o evento e propaga pro service
  title = 'bytebank';
  //transferencias: any[] = []; declarando a variável transferencia do tipo any[] - qualquer valor e array - e inicializado esse array com =[];

  constructor(private service: TransferenciaService){}//definindo um service


  transferirC($event){
    console.log($event);//o $event recebeu os valores do método aoTranferir
    this.service.adicionar($event)//chamando o service definido com a função adicionar
  }
}
