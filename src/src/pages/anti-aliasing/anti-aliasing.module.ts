import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntiAliasingPage } from './anti-aliasing';

@NgModule({
	declarations: [
		AntiAliasingPage,
	],
	imports: [
		IonicPageModule.forChild(AntiAliasingPage)
	],
	exports: [
		AntiAliasingPage
	],
	providers: [
	]
})
export class AntiAliasingPageModule { }
