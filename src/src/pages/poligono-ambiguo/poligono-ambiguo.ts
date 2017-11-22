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
        
        // set a fill and line style
        graphics.beginFill(0xf27281);
        graphics.lineStyle(4, 0x345d7e, 1);
        
        // draw a shape
        graphics.moveTo(20,80);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(20, 80);
        graphics.endFill();

        graphics.beginFill(0xf8b195);
        graphics.lineStyle(4, 0x345d7e, 1);
        
        // draw a shape
        graphics.moveTo(350,80);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(350, 80);
        graphics.endFill();

        // set a fill and line style
        graphics.beginFill(0xf27281);
        graphics.lineStyle(4, 0x345d7e, 1);
        
        // draw a shape
        graphics.moveTo(20,200);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(20, 200);
        graphics.endFill();
        
        var stage = new PIXI.Container();
        stage.addChild(graphics);

        animate();
        
        function animate() {

            // render the container
            app.render(stage);
            // stats.end();
        }
    }


}
