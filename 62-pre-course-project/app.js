let button = document.getElementById('button');
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let isNotScaffolded = true;
let isNotPainted = true;

button.addEventListener('click', rainbowMaker);

function rainbowMaker() {
    isNotScaffolded = (document.getElementById('frame') === null);

    if (isNotScaffolded) {
        scaffoldRainbow();
        button.textContent = 'Paint Rainbow';
    } else if (isNotPainted) {
        paintRainbow();
        button.textContent = 'Erase Rainbow';
    } else {
        eraseRainbow();
        button.textContent = 'Scaffold Rainbow';
    }
}

// ------- //
// HELPERS //
// ------- //

function scaffoldRainbow() {
    scaffoldFrame();
    scaffoldStripes();
}

function scaffoldFrame() {
    let frame = document.createElement('div');
    frame.id = 'frame';
    frame.className = 'frame';
    document.getElementById('container').append(frame);
}

function scaffoldStripes() {
    for (let i = 0; i < colors.length; i++) {
        let stripe = document.createElement('div');
        stripe.id = colors[i];
        stripe.className = 'stripe border';
        document.getElementById('frame').append(stripe);
    }
}

function paintRainbow() {
    for (let i = 0; i < colors.length; i++) {
        let stripe = document.getElementById(colors[i]);
        stripe.classList.remove('border');
        stripe.classList.add(colors[i]);
    }
    // isNotPainted = !document.getElementById(colors[0]).classList.contains(colors[0]);
    isNotPainted = false;
}

function eraseRainbow() {
    let rainbow = document.getElementById('frame');
    rainbow.parentNode.removeChild(rainbow);
    // isNotPainted = (document.getElementById('frame') === null);
    isNotPainted = true;
}
