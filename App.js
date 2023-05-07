

const myTextarea = document.getElementById("box");
const charCount = document.getElementById("lengthresult");

myTextarea.addEventListener("input", function() {
  charCount.textContent = myTextarea.value.length;
});
 
 
 function Download() {
const app = document.getElementById('app');
        html2canvas(app).then(function(canvas) {
          const link = document.createElement('a');
          link.download = 'myquote.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      }
 
 
function share(app) {
const div = document.getElementById(app);
  const canvas = document.createElement('canvas');
  canvas.width = div.offsetWidth;
  canvas.height = div.offsetHeight;
  canvas.getContext('2d').drawWindow(window, div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight, 'rgb(255,255,255)');
  navigator.share({ title: 'Shared Image', text: 'Check out this image!', url: canvas.toDataURL() });

}

function leave() {

const confirmMessage = 'Are you sure you want to leave the app?';
  if (confirm(confirmMessage)) {
    window.location.href = 'about:blank';
  }
}

window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  leave();
});


