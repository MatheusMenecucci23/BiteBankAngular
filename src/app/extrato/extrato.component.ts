import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias1: any[];//definindo uma variável de entrada com @Input do tipo any[]
  //com o @Input podemos receber uma variável referenciada no app.component
  constructor() { }

  ngOnInit(): void {
  }

}
