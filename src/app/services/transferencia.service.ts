import { Transferencia } from './../models/transferencia.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//ESSA CLASSE PARA ARMAZENAR OS DADOS INDICADOS PELO USUÁRIOS, ASSIM NÓS NÃO PERDEMOS OS DADOS

@Injectable({//com esse metadado eu posso invocar com o constructor por exemplo no app.component.ts
  providedIn: 'root'//ser existente enquanto a aplicação estiver rodando
})
export class TransferenciaService {
  //UTILIZAMOS UMA API EXTERNA PARA ARMAZENAR OS DADOS
  private listaTransferencia: any[];
  private url ="http://localhost:3000/transferencias";//configurando url que será buscada

  constructor(private httpClient: HttpClient) {//inicializando a requisição e criando uma lista
    this.listaTransferencia = [];
  }

  get transferencias(){//exibir a listatransferencia
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{//fazendo uma requisição get com httpClient.get
    return this.httpClient.get<Transferencia[]>(this.url)//retornando a lista da URL
    //<Transferencia[]> tipando o que o get vai pegar
  }


  adicionar(transferencia: Transferencia): Observable<Transferencia>{//adicionando na tabela
    this.hidratar(transferencia);
    console.table(transferencia)
    //o httpClient.post adiciona um novo produto na API
    return this.httpClient.post<Transferencia>(this.url, transferencia)//cadastrando uma nova transferência

  }

  private hidratar(transferencia: any){//adicionando um método privado
    transferencia.data = new Date();//adicionando uma data para a transferencia

  }
}
