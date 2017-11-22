import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetasPage } from './retas';

@NgModule({
	declarations: [
		RetasPage,
	],
	imports: [
		IonicPageModule.forChild(RetasPage)
	],
	exports: [
		RetasPage
	],
	providers: [
	]
})
export class RetasPageModule { }
