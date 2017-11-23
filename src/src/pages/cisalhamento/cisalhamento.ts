import { Component, ViewChild } from '@angular/core';
import { NavController, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()
@Component({
    selector: 'page-cisalhamento',
    templateUrl: 'cisalhamento.html',
})
export class CisalhamentoPage {
    @ViewChild(Content) content: Content;

    app: any;
    stage: PIXI.Container;
    graphics: PIXI.Graphics;
    position: boolean;

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        this.position = true;
        this.app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });

        this.content.getNativeElement().appendChild(this.app.view);
        this.stage = new PIXI.Container();

        this.graphics = new PIXI.Graphics();

        // set a fill and line style
        this.graphics.beginFill(0xf27281);
        this.graphics.lineStyle(4, 0x345d7e, 1);

        // draw a shape
        this.graphics.moveTo(50, 80);
        this.graphics.lineTo(250, 80);
        this.graphics.lineTo(250, 200);
        this.graphics.lineTo(50, 200);
        this.graphics.lineTo(50, 80);
        this.graphics.endFill();

        this.stage.addChild(this.graphics);
        this.app.render(this.stage);
    }

    animate() {
        this.stage.removeChild(this.graphics);
        if (this.position) {
            this.graphics = new PIXI.Graphics();
    
            // set a fill and line style
            this.graphics.beginFill(0xf27281);
            this.graphics.lineStyle(4, 0x345d7e, 1);
    
            // draw a shape
            this.graphics.moveTo(100, 80);
            this.graphics.lineTo(300, 80);
            this.graphics.lineTo(300, 200);
            this.graphics.lineTo(50, 200);
            this.graphics.lineTo(100, 80);
            this.graphics.endFill();
            this.position = false;
        } else {
            this.position = true;
            this.graphics = new PIXI.Graphics();
    
            // set a fill and line style
            this.graphics.beginFill(0xf27281);
            this.graphics.lineStyle(4, 0x345d7e, 1);
    
            // draw a shape
            this.graphics.moveTo(50, 80);
            this.graphics.lineTo(250, 80);
            this.graphics.lineTo(250, 200);
            this.graphics.lineTo(50, 200);
            this.graphics.lineTo(50, 80);
            this.graphics.endFill();
        }
    }

}
