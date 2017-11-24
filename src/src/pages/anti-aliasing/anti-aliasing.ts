import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()
@Component({
    selector: 'page-anti-aliasing',
    templateUrl: 'anti-aliasing.html'
})
export class AntiAliasingPage {

    @ViewChild(Content) content: Content;
    app: any;
    onOff: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.onOff = this.navParams.get('antialias');
    }

    ionViewDidLoad() {
        if (this.onOff) {
            this.load(this.onOff);
        } else {
            this.load();
        }
    }

    set hasChanges(value) {
        this.navCtrl.setRoot(this.navCtrl.getActive().component, { 'antialias': value });
    }

    get hasChanges(): boolean {
        return this.onOff;
    }

    load(antialias = false) {
        this.app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: antialias });
        this.content.getNativeElement().appendChild(this.app.view);

        var graphics = new PIXI.Graphics();

        var largura = this.content.getContentDimensions().contentWidth;
        var altura = this.content.getContentDimensions().scrollHeight;
        var alturaInicial = 26 * (altura / 100);

        // set a fill and line style
        graphics.beginFill(0xe0a353);
        graphics.lineStyle(4, 0x8c9159, 1);

        // draw a shape
        graphics.moveTo(largura / 2, alturaInicial);
        graphics.lineTo(38.75 * (largura / 100), alturaInicial + (26 * largura / 100));
        graphics.lineTo(61.25 * (largura / 100), alturaInicial + (26 * largura / 100));
        graphics.lineTo(largura / 2, alturaInicial);
        graphics.endFill();

        graphics.beginFill(0x484a35);
        graphics.moveTo(8.75 * (largura / 100), alturaInicial + 26 * (largura / 100));
        graphics.lineTo(38.75 * (largura / 100), alturaInicial + 26 * (largura / 100));
        graphics.lineTo(29.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.lineTo(8.75 * (largura / 100), alturaInicial + 26 * (largura / 100));
        graphics.endFill();

        graphics.beginFill(0xa52e28);
        graphics.moveTo(29.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.lineTo(17.5 * (largura / 100), alturaInicial + (77.5 * largura / 100));
        graphics.lineTo(50 * (largura / 100), alturaInicial + (62.5 * largura / 100));
        graphics.lineTo(29.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.endFill();


        graphics.beginFill(0x532321);
        graphics.moveTo(61.25 * (largura / 100), alturaInicial + (26 * largura / 100));
        graphics.lineTo(92.5 * (largura / 100), alturaInicial + (26 * largura / 100));
        graphics.lineTo(70.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.lineTo(61.25 * (largura / 100), alturaInicial + (26 * largura / 100));
        graphics.endFill();

        graphics.beginFill(0xd96017);
        graphics.moveTo(70.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.lineTo(82.5 * (largura / 100), alturaInicial + (77.5 * largura / 100));
        graphics.lineTo(50 * (largura / 100), alturaInicial + (62.5 * largura / 100));
        graphics.lineTo(70.5 * (largura / 100), alturaInicial + 48 * (largura / 100));
        graphics.endFill();

        var stage = new PIXI.Container();
        stage.addChild(graphics);
        this.app.render(stage);
    }
}
