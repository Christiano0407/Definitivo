let el = document.getElementById('turbulence');

tl = new TimelineMax({paused: true});

tl.from('h1', 3, {opacity: 0, y: 50})
tl.staggerFrom('.pic', 3, {opacity: 0, x:-100, y:-120, ease: Power4.easeOut}, 0.6)
tl.to(el, 3, {attr: { baseFrequency: '0 0' }}, 3)

tl.play();