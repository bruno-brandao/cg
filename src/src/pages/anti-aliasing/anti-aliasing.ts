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
        if(this.onOff){
            this.load(this.onOff);
        }else{
            this.load();
        }
    }

    set hasChanges(value) {
        this.navCtrl.setRoot(this.navCtrl.getActive().component, { 'antialias': value });
    }

	get hasChanges(): boolean {
		return this.onOff;
	}

    load(antialias = false){
        this.app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: antialias });
        this.content.getNativeElement().appendChild(this.app.view);

        var graphics = new PIXI.Graphics();

        // set a fill and line style
        graphics.beginFill(0xf27281);
        graphics.lineStyle(4, 0x345d7e, 1);

        // draw a shape
        graphics.moveTo(20, 80);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(20, 80);
        graphics.endFill();

        graphics.beginFill(0xf8b195);
        graphics.lineStyle(4, 0x345d7e, 1);

        // draw a shape
        graphics.moveTo(350, 80);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(350, 80);
        graphics.endFill();

        // set a fill and line style
        graphics.beginFill(0xf27281);
        graphics.lineStyle(4, 0x345d7e, 1);

        // draw a shape
        graphics.moveTo(20, 200);
        graphics.lineTo(220, 70);
        graphics.lineTo(200, 200);
        graphics.lineTo(20, 200);
        graphics.endFill();

        var stage = new PIXI.Container();
        stage.addChild(graphics);
        this.app.render(stage);
    }
}
