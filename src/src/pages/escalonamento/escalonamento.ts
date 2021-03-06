import { Component, ViewChild } from '@angular/core';
import { NavController, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()
@Component({
    selector: 'page-escalonamento',
    templateUrl: 'escalonamento.html',
})
export class EscalonamentoPage {
    @ViewChild(Content) content: Content;

    app: any;
    stage: PIXI.Container;
    graphics: PIXI.Graphics;
    position: boolean;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EscalonamentoPage');
    }

    ngOnInit() {
        this.app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });

        this.content.getNativeElement().appendChild(this.app.view);
        this.stage = new PIXI.Container();

        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(0);
        this.graphics.beginFill(0xf27281, 0.5);
        this.graphics.drawCircle(100, 510, 60);
        this.graphics.endFill();
        this.stage.addChild(this.graphics);
        this.app.render(this.stage);
        this.position = true;
    }

    animate() {
        this.stage.removeChild(this.graphics);
        if (this.position) {
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(0);
            this.graphics.beginFill(0xf27281, 0.5);
            this.graphics.drawCircle(180, 420, 100);
            this.graphics.endFill();
            this.stage.addChild(this.graphics);
            this.app.render(this.stage);
            this.position = false;
        } else {
            this.position = true;
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(0);
            this.graphics.beginFill(0xf27281, 0.5);
            this.graphics.drawCircle(100, 510, 60);
            this.graphics.endFill();
            this.stage.addChild(this.graphics);
            this.app.render(this.stage);
        }
    }

}
