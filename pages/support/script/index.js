
const buttonLabels = [
    'Replace TV Remote',
    'Find My Device',
    'Software/Firmware',
    'TV Screen Mirroring',
    'Reset Ice Maker',
    'User Manual',
    'Download Mobile Apps',
    'Samsung Account Help'
]

const heroButtonLargeScreen = document.querySelector('#hero-button-lg');

heroButtonLargeScreen.innerHTML = buttonLabels.map(label => `
    <button class="bg-black bg-opacity-30 rounded-full border border-gray-300 text-[10px] px-2 py-1.5">
        ${label}
    </button>
`).join('');

const heroButtonSmallScreen = document.querySelector('#hero-button-sm');
const fourButtonLabels = buttonLabels.slice(0, 4);
heroButtonSmallScreen.innerHTML = fourButtonLabels.map(label => `
    <button class=" rounded-full border border-gray-300 px-2 py-1.5 text-sm font-light">
        ${label}
    </button>
`).join('');