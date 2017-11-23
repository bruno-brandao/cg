import { Component, ViewChild } from '@angular/core';
import { NavController, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()
@Component({
    selector: 'page-poligono',
    templateUrl: 'poligono.html',
})
export class PoligonoPage {
    @ViewChild(Content) content: Content;

    canvas: any;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PoligonoPage');
    }

    ngOnInit() {
        var app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });
        
        this.content.getNativeElement().appendChild(app.view);
        
        var graphics = new PIXI.Graphics();
        
        // set a fill and line style
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(4, 0xFF3300, 1);
        
        // draw a shape
        graphics.moveTo(50,80);
        graphics.lineTo(250, 80);
        graphics.lineTo(200, 200);
        graphics.lineTo(50, 80);
        graphics.endFill();
        
        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0x0000FF, 1);
        graphics.drawRect(50, 250, 120, 120);
        
        // draw a rounded rectangle
        graphics.lineStyle(2, 0xFF00FF, 1);
        graphics.beginFill(0xFF00FF, 1);
        graphics.drawRoundedRect(10, 450, 300, 100, 15);
        graphics.endFill();
        
        // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawCircle(280, 300, 60);
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
