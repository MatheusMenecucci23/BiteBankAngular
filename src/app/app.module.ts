import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';//importando aqui também
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt,"pt");
@NgModule({
  declarations: [//declarando classes
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [//importando bibliotecas
    BrowserModule,
    FormsModule
  ],
  providers: [
   {provide: LOCALE_ID, useValue:'pt'},//transformando o formato da data que está em inglÊs para português
    {//transformando o formato da moeda que está inglês para br
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
