var wf = new WFPlayer({
    container: document.querySelector('#waveform'),
    // Whether to use scroll mode
    scrollable: false,
    wave: true,
    backgroundColor: 'rgb(28, 32, 34)',
    mediaElement: document.querySelector('#audio'),
});

wf.load(document.querySelector('#audio'));


// or
// wf.load('path/to/audio.mp3');
