gsap.registerPlugin(ScrollTrigger);
let speed = 100;
let delay = 0.03;

// ------------------------ SCENE 1
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: '.scrollElement',
  start: 'top top',
  end: '45% bottom',
  scrub: 3,
});

// HILLS ANIMATIONS
scene1.to(
  '#h1-1',
  { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: 'power1.in' },
  0
);
scene1.to('#h1-2', { y: 3 * speed, x: -1 * speed }, 8 * delay);
scene1.to('#h1-3', { y: 3 * speed, x: 1 * speed }, 7 * delay);
scene1.to('#h1-4', { y: 3 * speed, x: 1 * speed }, 6 * delay);
scene1.to('#h1-5', { y: 3 * speed, x: 1 * speed }, 5 * delay);
scene1.to('#h1-6', { y: 3 * speed, x: -1 * speed }, 4 * delay);
scene1.to('#h1-7', { y: 3 * speed, x: 1 * speed }, 3 * delay);
scene1.to('#h1-8', { y: 3 * speed, x: 1 * speed }, 2 * delay);
scene1.to('#h1-9', { y: 3 * speed, x: -1 * speed }, 1 * delay);

// INFO
scene1.to('#info', { y: 3 * speed }, 0);

// BIRD
gsap.fromTo(
  '#bird',
  { opacity: 1 },
  {
    y: -250,
    x: 800,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.scrollElement',
      start: '15% top',
      end: '60% bottom',
      scrub: 4,
      onEnter: () => {
        gsap.to('#bird', { scaleX: 1, rotation: 0 });
      },
      onLeave: () => {
        gsap.to('#bird', { scaleX: -1, rotation: -15 });
      },
    },
  },
  0
);

// CLOUDS
scene1.to('#cloud1', { x: 500 }, 0);
scene1.to('#cloud2', { x: 1000 }, 0);
scene1.to('#cloud3', { x: -1000 }, 0);
scene1.to('#cloud4', { x: -700, y: 25 }, 0);

// SUN MOTION ANIMATION
let sun = gsap.timeline();
ScrollTrigger.create({
  animation: sun,
  trigger: '.scrollElement',
  start: 'top top',
  end: '2200 bottom',
  scrub: 2,
});
sun.to('#bg_grad', { attr: { cy: 350 } }, 0);
sun.to('#bg_grad #sun', { attr: { offset: '0.15' } }, 0);
sun.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.15' } }, 0);
sun.to('#bg_grad stop:nth-child(3)', { attr: { offset: '0.18' } }, 0);
sun.to('#bg_grad stop:nth-child(4)', { attr: { offset: '0.25' } }, 0);
sun.to('#bg_grad stop:nth-child(5)', { attr: { offset: '0.46' } }, 0);
sun.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#FF9171' } }, 0);

// ------------------------ SCENE 2
let scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: '.scrollElement',
  start: '15% top',
  end: '2200 bottom',
  scrub: 3,
});
scene2.fromTo('#hills2 #h2-1', { opacity: 1, y: '100%' }, { y: 0 }, 3 * delay);
scene2.from('#hills2 #h2-2', { y: 500 }, 4 * delay);
scene2.from('#hills2 #h2-3', { y: 500, x: -100 }, 2 * delay);
scene2.from('#hills2 #h2-4', { y: 500, x: 100 }, 3 * delay);
scene2.from('#hills2 #h2-5', { y: 500 }, 2 * delay);
scene2.from('#hills2 #h2-6', { y: 500 }, 1 * delay);

// BATS
let batsTween = [];
gsap.utils.toArray('#scene2 > #bats path').forEach((item, i) => {
  let tween = gsap.to(item, {
    transformOrigin: '50% 50%',
    scaleX: 0.5,
    repeat: -1,
    duration: 0.15,
    yoyo: true,
    delay: 0.7 + i / 10,
    paused: true,
  });
  batsTween.push(tween);
});
scene2.fromTo(
  '#scene2 > #bats',
  { opacity: 1, y: 400, scale: 0 },
  {
    y: 120,
    scale: 0.8,
    transformOrigin: '50% 50%',
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.scrollElement',
      start: '40% top',
      end: '70% center',
      scrub: 3,
      onEnter: () => {
        gsap.set('#scene2 > #bats', { opacity: 1 });
        for (let bat of batsTween) {
          bat.play();
        }
      },
      onLeave: () => {
        gsap.to('#scene2 > #bats', { opacity: 0 });
        for (let bat of batsTween) {
          bat.pause();
        }
      },
    },
  },
  0
);

// SUN INCREASE
let sun2 = gsap.timeline();
ScrollTrigger.create({
  animation: sun2,
  trigger: '.scrollElement',
  start: '2200 top',
  end: '5000 bottom',
  scrub: 1,
});
// BACKGROUND SUN
sun2.to('#bg_grad #sun', { attr: { offset: 0.6, 'stop-color': '#ffff00' } }, 0);
sun2.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.7' } }, 0);
sun2.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#45224A' } }, 0);

// BACKGROUND HILLS
sun2.to('#lg4 stop:nth-child(1)', { attr: { 'stop-color': '#623951' } }, 0);
sun2.to('#lg4 stop:nth-child(2)', { attr: { 'stop-color': '#261F36' } }, 0);

// -------------------------------------- SCENE 3
// FALLING STAR
let fallingStar = gsap.fromTo(
  '#fstar',
  { x: 0, y: -500 },
  {
    x: -1000,
    y: -450,
    ease: 'power4.out',
    paused: true,
    duration: 6,
  }
);

gsap.set('#scene3', { y: 600, visibility: 'visible' });
let scene3 = gsap.timeline();
ScrollTrigger.create({
  animation: scene3,
  trigger: '.scrollElement',
  start: '80% center',
  end: '99% bottom',
  scrub: 3,
  onEnter: () => {
    fallingStar.restart();
    fallingStar.pause();
  },
  onLeave: () => {
    fallingStar.play();
  },
});

// SCENE 2
scene3.to(
  '#hills2 #h2-1',
  { y: -600, scaleX: 1.2, transformOrigin: 'center center' },
  0
);
scene3.to('#bg_grad', { attr: { cy: -80 } }, 0);
scene3.to('#bg2', { y: 0 }, 0);

// HILLS
scene3.to('#hills3 #h3-1', { y: -570 }, 4 * delay);
scene3.to('#hills3 #h3-2', { y: -570 }, 2 * delay);
scene3.to('#hills3 #h3-3', { y: -570 }, 3 * delay);
scene3.to('#hills3 #h3-4', { y: -570 }, 2 * delay);
scene3.to('#hills3 #h3-5', { y: -570 }, 1 * delay);

// STARTS
scene3.to('#stars', { opacity: 0.5, y: -500 }, 0);

// TEXT
scene3.to('#arrow2', { opacity: 0.7, y: -700 }, 5 * delay);
scene3.to('#text2', { opacity: 0.7, y: -700 }, 5 * delay);

// BACKGROUND
scene3.to('#bg2-grad', { attr: { cy: 600, r: 500 } }, 5 * delay);

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
