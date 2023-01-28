Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

<script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js "></script>

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0M-JY1pMc/model.json',modelLoaded);

function modelLoaded() {
    console.log('model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotRestult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("results_emotion_name").innerHTML=results[0].label;
        docuemnt.getElementById("results_emotion_name2").innerHTML=results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Peace sign")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "OK")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Thumbs down")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = '&#128077;';
        }
        

        if(results[1].label == "Peace sign")
        {
            document.getElementById("update_emoji2").innerHTML = '&#9996;';
        }
        if(results[1].label == "OK")
        {
            document.getElementById("update_emoji2").innerHTML = '&#128076;';
        }
        if(results[1].label == "Thumbs down")
        {
            document.getElementById("update_emoji2").innerHTML = '&#128078;';
        }
        if(results[1].label == "Thumbs up")
        {
            document.getElementById("update_emoji2").innerHTML = '&#128077;';
        }
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}