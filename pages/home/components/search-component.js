// hero buttons
const buttonLabels = [
    'Galaxy S24 Ultra',
    'Galaxy Z Flip5',
    'The Frame',
    'QLED 8K',
    'BESPOKE Jet',
    'BESPOKE Refrigerator',
    'Accessories',

]

const heroButtonLargeScreen = document.querySelector('#hero-button-lg');

heroButtonLargeScreen.innerHTML = buttonLabels.map(label => `
    <button class=" rounded-full border border-gray-300  px-6  py-3">
        ${label}
    </button>
`).join('');
