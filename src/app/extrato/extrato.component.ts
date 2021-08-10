import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias1: any[];

  constructor(private service: TransferenciaService) { }//inicializando o service

  ngOnInit(){//imprimindo os extratos
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);//imprimindo em uma tabela
      this.transferencias1 = transferencias//imprimindo os extratos
    });
  }

}
