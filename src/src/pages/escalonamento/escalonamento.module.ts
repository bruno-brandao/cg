import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscalonamentoPage } from './escalonamento';

@NgModule({
  declarations: [
    EscalonamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EscalonamentoPage),
  ],
})
export class EscalonamentoPageModule {}
