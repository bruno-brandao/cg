import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslacaoPage } from './translacao';

@NgModule({
  declarations: [
    TranslacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(TranslacaoPage),
  ],
})
export class TranslacaoPageModule {}
