var narizX = 0;
var narizY = 0;
var distancia= 0;
function setup() {
    canvas = createCanvas(640,480);
    background("rgba(255,225,255,1)");
    video = createCapture(VIDEO);
    modelo = ml5.poseNet(video, listo);
    modelo.on("pose", obtenerPoses);
}

function listo(){
    console.log("preparado");
}

function obtenerPoses(resultados){
    if(resultados.length > 0){
        narizX = resultados[0].pose.nose.x;
        narizY = resultados[0].pose.nose.y;
        manoIzq = resultados[0].pose.leftWrist.x;
        manoDer = resultados[0].pose.rightWrist.x;
        distancia = floor(manoIzq - manoDer);
    }
}

    function draw(){
        background("rgba(255,225,255,1)");
        fill("mediumvioletred");
        stroke("black");
        mitad = distancia/2
        mensaje = "kuchau"
        image(kuchau, narizX-mitad, narizY-mitad, 100, 50 )
        text(mensaje, narizX-mitad, narizY-mitad);
        textSize(mitad);
    }
    function preload(){
        kuchau = loadImage("elpepe.png");
    }