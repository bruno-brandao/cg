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

    canvas: any;

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {
        var app = PIXI.autoDetectRenderer(this.content.getContentDimensions().contentWidth, this.content.getContentDimensions().scrollHeight, { backgroundColor: 0xffffff, antialias: true });

        this.content.getNativeElement().appendChild(app.view);
        var graphics = new PIXI.Graphics();

        graphics.lineStyle(10, 0xf27281);
        graphics.moveTo(10, 100);
        graphics.lineTo(300, 200);

        graphics.lineStyle(10, 0x345d7e);
        graphics.moveTo(10, 200);
        graphics.lineTo(300, 300);

        graphics.lineStyle(10, 0xf8b195);
        graphics.moveTo(10, 300);
        graphics.lineTo(300, 400);
        var stage = new PIXI.Container();

        stage.addChild(graphics);

        animate();

        function animate() {
            // render the container
            app.render(stage);
            // stats.end();
        }

        function DDA(x1, y1, x2, y2) {
            //calcula a inclinação

            var dx = x2 - x1;
            var dy = y2 - y1;
            //verifica para qual eixo a reta está mais próxima
            var steps;
            if (abs(dx) >= abs(dy))
                steps = abs(dx);
            else
                steps = abs(dy);

            drawPixel(round(x1), round(y1)); //desenha um pixel na tela

            for (var i = 1; i <= steps; i++) {
                x1 = x1 + dx / steps;
                y1 = y1 + dy / steps;
                drawPixel(round(x1), round(y1));
            }
        }

        //retorna um numero positivo

        function abs(number) {
            if (number < 0)
                return number * (-1)
            return number
        }
        //arredonda o número

        function round(number) {
            return parseInt(number + 0.5);
        }

        function drawPixel(x, y) {
            graphics.lineTo(300, 200);
        }

        function brenseham(x1, y1, x2, y2) {

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

            drawPixel(x, y);

            while (x < x2) {
                x++;
                if (p < 0)
                    p += 2 * dy;
                else {
                    y++;
                    p += 2 * (dy - dx);
                }

                drawPixel(x, y);
            }
        }
    }
}
