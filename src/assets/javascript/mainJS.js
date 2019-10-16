function scrollMagic() {
    //Init ScrollMagic 
    let controller = new ScrollMagic.Controller();
    let tween = new TimelineMax()
        .add([
            TweenMax.fromTo(".slowParallax", 1, {
                margin: "30% 0% 0% 0%",
                ease: Linear.easeNone
            }, {
                margin: "0% 0% 0% 0%",
                ease: Linear.easeNone
            })
        ]);
    let tween2 = new TimelineMax()
        .add([
            TweenMax.fromTo(".mediumParallax", 1, {
                margin: "60% 0% 0% 0%",
                ease: Linear.easeNone
            }, {
                margin: "10% 0% 0% 0%",
                ease: Linear.easeNone
            })
        ]);
    let tween3 = new TimelineMax()
        .add([
            TweenMax.fromTo(".alter1", 1, {
                margin: "0% 0% 0% 0%",
                ease: Linear.easeNone
            }, {
                margin: "0% 0% 0% 100%",
                ease: Linear.easeNone
            })
        ]);
    let tween4 = new TimelineMax()
        .add([
            TweenMax.fromTo(".sideParallax", 1, {
                margin:"600px 0px 0px 0px",
                ease: Linear.easeNone
            }, {
                margin:"300px 0px 0px 0px",
                ease: Linear.easeNone
            })
        ]);
        let tween5 = new TimelineMax()
        .add([
            TweenMax.fromTo(".appear", 1, {
                opacity: 0,
                ease: Linear.easeNone
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })
        ]);
    let nonsenseScene = new ScrollMagic.Scene({
            triggerElement: '.blankDiv'
        })
        .setClassToggle('.blankDiv', 'toggleOff')
        .addTo(controller);

    if ((document.getElementsByClassName('indicator1').length) > 0) {
        let backgroundScene1 = new ScrollMagic.Scene({
                triggerElement: '.indicator1',
            })
            .setClassToggle('.paraImg1', 'slowParallax')
            .addIndicators()
            .setTween(tween)
            .duration(1000)
            .addTo(controller);
    }
    if ((document.getElementsByClassName('indicator2').length) > 0) {
        let backgroundScene2 = new ScrollMagic.Scene({
                triggerElement: '.indicator2',
            })
            .setClassToggle('.paraImg2', 'mediumParallax')
            .addIndicators()
            .setTween(tween2)
            .duration(1000)
            .addTo(controller);
    }
    if ((document.getElementsByClassName('squareIndicator').length) > 0) {
        let backgroundScene3 = new ScrollMagic.Scene({
                triggerElement: '.squareIndicator',
            })
            .setClassToggle('.squareClass', 'alter1')
            .addIndicators()
            .setTween(tween3)
            .duration(1000)
            .addTo(controller)
    }
    if ((document.getElementsByClassName('indicator3').length) > 0) {
        let backgroundScene4 = new ScrollMagic.Scene({
                triggerElement: '.indicator3',
            })
            .setClassToggle('.paraImg3', 'sideParallax')
            .addIndicators()
            .setTween(tween4)
            .duration(1000)
            .addTo(controller);
    }
    if ((document.getElementsByClassName('menItTrig').length) > 0) {
        let backgroundScene5 = new ScrollMagic.Scene({
                triggerElement: '.menItTrig',
            })
            .setClassToggle('.columnMenuItems', 'appear')
            .addIndicators()
            .setTween(tween5)
            .duration(1000)
            .addTo(controller);
    }
}

function fireWhenReady() {
    if (typeof scrollMagic() != 'undefined') {
        scrollMagic();
    } else {
        setTimeout(fireWhenReady, 100);
    }
}
$(document).ready(fireWhenReady);

