var startButton = document.getElementById("start");
var progressBar = document.getElementById("progressBar");
var time = document.getElementById("time");

function countDown() {
    var i = 10;
    progressBar.style.width = 100 + '%';
    progressBar.style.backgroundColor = "#76ed63";
    time.innerHTML = i + 's';

    var counterBack = setInterval(function () {
        
        i--;
        const progresswidth = i / 10 * 100;

        if (i > 0) {
           progressBar.style.width = progresswidth + '%';

            time.innerHTML = i + 's';
            startButton.disabled = true;
            progressColor();

        } else {
            clearInterval(counterBack);
            progressBar.style.width = 0 + '%';
            time.innerhtml = 'GAMEOVER!';
            startButton.disabled = false;
        }

    }, "100");

    function progressBar() {
        if (progresswidth > 60) {
            progressBar.style.backgroundColor = "#76ed63";

        }else if (progresswidth>30){
            progressBar.style.backgroundColor="#e99a33";
        }else{
            progressBar.style.backgroundColor="#eb463b";
        }
    }
}