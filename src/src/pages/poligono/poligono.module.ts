import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoligonoPage } from './poligono';

@NgModule({
  declarations: [
    PoligonoPage,
  ],
  imports: [
    IonicPageModule.forChild(PoligonoPage),
  ],
})
export class PoligonoPageModule {}
