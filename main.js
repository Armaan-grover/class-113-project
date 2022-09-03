function preload() {

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350.350)
    video.hide()
}

function draw() {
    stroke("blue")
    fill("green")
    rect(15, 20, 10, 320)
    rect(325, 20, 10, 320)
    rect(15, 21, 320, 10)
    rect(15, 331, 320, 10)
    fill("red")
    circle(20, 20, 30);
    circle(20, 330, 30)
    circle(330, 20, 30)
    circle(330, 330, 30)
    image(video, 70, 70, 200, 200)
}
function takeImg() {
    save("photo.png")
}