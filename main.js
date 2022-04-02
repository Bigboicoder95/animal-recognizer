function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nZMdzjZmf/model.json", modelReady);
}
function modelReady() {
    Classifier.classify(gotResults);
    console.log("gotResults");
}
function gotResults() {
    console.log("results");
}