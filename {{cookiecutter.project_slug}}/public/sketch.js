const canvasWidth = 600;
const canvasHeight = 600;

import { HelloWorld } from './js/core.js';


function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(255, 255, 255, 0);
}

function draw() {

    stroke(100);
    strokeWeight(5);
    noFill();
    rect(0, 0, canvasWidth, canvasHeight);

    strokeWeight(1);
    fill(0);
    stroke(0);

    let hello = new HelloWorld();
    // set font size, alignment
    textSize(32);
    textAlign(CENTER, CENTER);
    text(hello.message(), canvasWidth / 2, canvasHeight / 2);
    noLoop();
}



// Must manually export the Processing functions since we're using this sketch.js file as a 'module.'
((
    functions = {
        /* select required functions */
        // preload,
        setup,
        draw,
        //mouseMoved,
        //mouseDragged,
        // mousePressed,
        //mouseReleased,
        //mouseClicked,
        //doubleClicked,
        //mouseWheel,
    }
) => Object.assign(window, functions)).call();
