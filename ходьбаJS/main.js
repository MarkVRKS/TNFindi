window.addEventListener("load", () => {
    const left = 37, right = 39, top = 38, down = 40;
    let app = document.querySelector('.app')
    let dwarf = document.querySelector('.dwarf')

    const dwarfRight = [
        'rights/right1.png',
        'rights/right2.png',
        'rights/right3.png',
        'rights/right4.png',
        'rights/right5.png'
    ];

    let currentRight = 0;
    let animationInterval;

    const updateDwarfPosition = (x, y) => {
        let godwarf = dwarf.getBoundingClientRect();
        if (godwarf.left + x >= 0 && godwarf.left +x <= (app.offsetWidth-dwarf.offsetWidth)) {
            dwarf.style.top = godwarf.top + y +'px';
        }
    };

    const startAnimation = (direction) => {
        clearInterval(animationInterval);
        currentRight = 0;
        animationInterval = setInterval(() => {
            dwarf.style.backgroundImage = `url('${dwarfRight[currentRight]}')`;
            currentRight = (currentRight + 1) % dwarfRight.length;
        }, 100);
    };

    const stopAnimation = () => {
        clearInterval(animationInterval);
        dwarf.style.backgroundImage = `url('rights/right1.png')`;
    };

    window.addEventListener("keydown", e => {
        if(e.keyCode == "A".charCodeAt(0)) {
            updateDwarfPosition(-1, 0);
            stopAnimation
        } else if (e.keyCode == "D".charCodeAt(0)) {
            updateDwarfPosition(1, 0);
            stopAnimation
        } else if (e.keyCode == "S".charCodeAt(0)) {
            updateDwarfPosition(0, 1);
            stopAnimation
        } else if (e.keyCode == 'W'.charCodeAt(0)) {
            updateDwarfPosition(0, -1);
            stopAnimation
        }
    });
    window.addEventListener('keyup', () => {
        stopAnimation();
    })
});
