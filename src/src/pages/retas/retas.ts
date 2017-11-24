import { Component, ViewChild } from '@angular/core';
import { NavController, Content, IonicPage } from 'ionic-angular';
import * as PIXI from 'pixi.js';

@IonicPage()

@Component({
    selector: 'page-retas',
    templateUrl: 'retas.html'
})
export class RetasPage {
    @ViewChild(Content) content: Content;

    app: any;
    graphics: PIXI.Graphics;
    stage: PIXI.Container;
    x1: any;
    y1: any;
    x2: any;
    y2: any;
    executa: number = 0;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad(){
        this.app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });

        this.content.getNativeElement().appendChild(this.app.view);
        this.graphics = new PIXI.Graphics();
        this.stage = new PIXI.Container();
        
        var style = new PIXI.TextStyle({
            fontFamily: 'Consolas',
            fontSize: 100,
            fill: ['#345d7e'], // gradient
            wordWrap: true,
            wordWrapWidth: 440
        });
        
        var basicText = new PIXI.Text('l', style);
        basicText.x = 155;
        basicText.y = 95;
        
        this.stage.addChild(basicText);
        
        var basicText2 = new PIXI.Text('a', style);
        basicText2.x = 155;
        basicText2.y = 320;
        
        this.stage.addChild(basicText2);
        
        var basicText3 = new PIXI.Text('o', style);
        basicText3.x = 30;
        basicText3.y = 200;
        
        this.stage.addChild(basicText3);

        
        var basicText4 = new PIXI.Text('o', style);
        basicText4.x = 275;
        basicText4.y = 200;
        
        this.stage.addChild(basicText4);


        this.primeiraReta();
    }

    primeiraReta(){
        this.x1 = 30;
        this.y1 = 100;
        this.x2 = 30;
        this.y2 = 100;
        for (var i = 0; i < 25; i++) {
            this.x2 += i;
            this.y2 += i;
            this.animate(this.x2, this.y2, i, 0x345d7e);
        }
    }
    
    segundaReta(){
        this.x1 = 330;
        this.y1 = 100;
        this.x2 = 330;
        this.y2 = 100;
        for (var i = 0; i < 25; i++) {
            this.x2 -= i;
            this.y2 += i;
            this.animate(this.x2, this.y2, i, 0x345d7e);
        }
    }
    
    terceiraReta(){
        this.x1 = 30;
        this.y1 = 480;
        this.x2 = 30;
        this.y2 = 480;
        for (var i = 0; i < 25; i++) {
            this.x2 += i;
            this.animate(this.x2, this.y2, i, 0xf27281);
        }
    }

    animate(x, y, i, color){
        setTimeout(()=>{
            this.graphics.lineStyle(10, color);
            this.graphics.moveTo(this.x1, this.y1);
            this.graphics.lineTo(x, y);
            this.stage.addChild(this.graphics);
            this.app.render(this.stage);
            this.x1 = x;
            this.y1 = y;
            if(i == 24 && this.executa == 0){
                this.executa++;
                this.segundaReta();
            }else if(i == 24 && this.executa == 1){
                this.executa++;
                this.terceiraReta();
            }
        }, i*100);
    }

    incremental(x1, y1, x2, y2) {
        //calcula a inclinação

        var dx = x2 - x1;
        var dy = y2 - y1;
        //verifica para qual eixo a reta está mais próxima
        var steps;
        if (this.abs(dx) >= this.abs(dy))
            steps = this.abs(dx);
        else
            steps = this.abs(dy);

        this.drawPixel(this.round(x1), this.round(y1)); //desenha um pixel na tela

        for (var i = 1; i <= steps; i++) {
            x1 = x1 + dx / steps;
            y1 = y1 + dy / steps;
            this.drawPixel(this.round(x1), this.round(y1));
        }
    }

    //retorna um numero positivo

    abs(number) {
        if (number < 0)
            return number * (-1)
        return number
    }
    //arredonda o número

    round(number) {
        return parseInt(number + 0.5);
    }

    drawPixel(x, y) {
        this.graphics.lineTo(300, 200);
    }

    brenseham(x1, y1, x2, y2) {

        var dx = Math.abs(x2 - x1);
        var dy = Math.abs(y2 - y1);
        var p = 2 * dy - dx; //fator de decisão
        //coloca a os pontos de entrada em sentido crescente

        if (x1 > x2) {
            var x = x2;
            var y = y2;
            x2 = x1;
        }
        else {
            x = x1;
            y = y1;
        }
        //desenha o primeiro pixel

        this.drawPixel(x, y);

        while (x < x2) {
            x++;
            if (p < 0)
                p += 2 * dy;
            else {
                y++;
                p += 2 * (dy - dx);
            }

            this.drawPixel(x, y);
        }
    }
}
