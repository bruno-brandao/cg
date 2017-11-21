import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import * as PIXI from 'pixi.js';

//import * as Stats from 'Stats.js'; //optionnal : it's for display framerate

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(Content) content: Content;
    
    public vPadData : any;
    hello: String = "hello world";
    canvas:any ;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
        var renderer = PIXI.autoDetectRenderer(360, 560,{backgroundColor : 0x1099bb});
        
        this.content.getNativeElement().appendChild(renderer.view);
        
        //this.canvas.nativeElement.appendChild(renderer.view);
        
        //console.log(renderer.view);
        
        // create the root of the scene graph
        var stage = new PIXI.Container();
        
        // create a texture from an image path
        // var texture = PIXI.Texture.fromImage('assets/basics/bunny.png');
        
        // create a new Sprite using the texture
        
        let bunnies = [];
        // for (var j = 0; j < 5; j++) {
        
            for (var i = 0; i < 1; i++) {
                var bunny = PIXI.Sprite.fromImage('assets/imgs/bunny.jpg');
                bunny.anchor.x = 0.5;
                bunny.anchor.y = 0.5;
        
                bunny.x = 40 * i + 200;
                bunny.y = 40 * i + 400;
                stage.addChild(bunny);
                bunnies.push(bunny);
            };
        //};
        
        // var me = PIXI.Sprite.fromImage('assets/imgs/bunny.jpg');
        // me.anchor.x = 0.5;
        // me.anchor.y = 0.5;
        // me.x = 20;
        // me.y = 20;
        // stage.addChild(me);
        
        // init stats
        //let stats = new Stats();
        //stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        //this.content.getNativeElement().appendChild(stats.dom);
        
        //let page = this;
        // start animating
        animate();
        
        function animate() {
        
            //stats.begin();
            requestAnimationFrame(animate);
        
            // just for fun, let's rotate mr rabbit a little
            for (let bunny of bunnies) {
                bunny.rotation += 0.1;
            }
        
            // render the container
            renderer.render(stage);
           // stats.end();
        }
    }
}
