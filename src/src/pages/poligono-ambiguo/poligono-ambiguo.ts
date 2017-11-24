import { Component, ViewChild } from '@angular/core';
import { NavController, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()
@Component({
    selector: 'page-poligono-ambiguo',
    templateUrl: 'poligono-ambiguo.html',
})
export class PoligonoAmbiguoPage {
    @ViewChild(Content) content: Content;

    canvas: any;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PoligonoAmbiguoPage');
    }

    ngOnInit() {
        var app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });
        
        this.content.getNativeElement().appendChild(app.view);
        
        var graphics = new PIXI.Graphics();

        var largura = this.content.getContentDimensions().contentWidth;
        var altura = this.content.getContentDimensions().scrollHeight;
        var alturaInicial = 26 * (altura / 100 );
        
        // set a fill and line style
        graphics.lineStyle(4, 0xf27281, 1);
        graphics.beginFill(0x345d7e);
        
        // draw a shape
        graphics.moveTo( largura / 2, alturaInicial );
        graphics.lineTo( 38.75 * (largura / 100), alturaInicial + ( 26 * largura / 100 ) );
        graphics.lineTo( 61.25 * (largura / 100), alturaInicial + ( 26 * largura / 100 ));
        graphics.lineTo( largura / 2, alturaInicial);
        graphics.endFill();

        graphics.beginFill(0x345d7e);
        graphics.moveTo( 8.75 * (largura / 100), alturaInicial +  26 * (largura / 100 ) );
        graphics.lineTo( 38.75 * (largura / 100), alturaInicial +  26 * (largura / 100 ) );
        graphics.lineTo( 29.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.lineTo( 8.75 * (largura / 100), alturaInicial +  26 * (largura / 100 ) );
        graphics.endFill();
        
        graphics.beginFill(0x345d7e);
        graphics.moveTo( 29.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.lineTo( 17.5 * (largura / 100), alturaInicial + ( 77.5 * largura / 100 ) );
        graphics.lineTo( 50 * (largura / 100), alturaInicial + ( 62.5 * largura / 100 ) );
        graphics.lineTo( 29.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.endFill();

        
        graphics.beginFill(0x345d7e);
        graphics.moveTo( 61.25 * (largura / 100), alturaInicial + ( 26 * largura / 100 ) );
        graphics.lineTo( 92.5 * (largura / 100), alturaInicial + ( 26 * largura / 100 ) );
        graphics.lineTo( 70.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.lineTo( 61.25 * (largura / 100), alturaInicial + ( 26 * largura / 100 ) );
        graphics.endFill();
        
        graphics.beginFill(0x345d7e);
        graphics.moveTo( 70.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.lineTo( 82.5 * (largura / 100), alturaInicial + ( 77.5 * largura / 100 ) );
        graphics.lineTo( 50 * (largura / 100), alturaInicial + ( 62.5 * largura / 100 ) );
        graphics.lineTo( 70.5 * (largura / 100), alturaInicial +  48 * (largura / 100 ) );
        graphics.endFill();

        var stage = new PIXI.Container();
        stage.addChild(graphics);
        app.render(stage);
    }


}
