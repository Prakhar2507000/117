


function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6otjTllDK/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_lable").innerHTML = 'I can Hear - '
        results[0].lable;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_lable").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +randome_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById('alien1');
img = document.getElementById('alien2');
img = document.getElementById('alien3');
img = document.getElementById('alien4');

if (results[0],lable == "Clap") {
    img.src = 'alien-01.gif';
    img1.src = 'alien-02.png';
    img2.src = 'alien-03.png';
    img3.src = 'alien-04.png';
} else if (results[0].lable == "Thuding") {
    img.src = 'alien-01.png';
    img1.src = 'alien-02.gif';
    img2.src = 'alien-03.png';
    img3.src = 'alien-04.png';
} else if (results[0].lable == "Snaping") {
    img.src = 'alien-01.png';
    img1.src = 'alien-02.png';
    img2.src = 'alien-03.gif';
    img3.src = 'alien-04.png';
    
}  else {
    img.src = 'alien-01.png';
    img1.src = 'alien-02.png';
    img2.src = 'alien-03.png';
    img3.src = 'alien-04.gif';
    
}

    }
}