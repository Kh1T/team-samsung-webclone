
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

// find resources
const resourceContent = [
    {
        title: "Manuals, drivers and software",
        paragraph: "Get the latest drivers, manuals, firmware, and software.",
        link1: "",
        link2: "Learn more"
    },
    {
        title: "Request repair service",
        paragraph: "Arrange for a service visit at home, schedule a walk-in appointment or mail your device in for a repair.",
        link1: "Start repair service",
        link2: "Track service request"
    },
    {
        title: "Watch how-to videos",
        paragraph: "Watch our helpful videos to get the most out of your Samsung products.",
        link1: "",
        link2: "Watch now"
    },
    {
        title: "Register your product",
        paragraph: "Gain access to exclusive offers and perks, apps and services, world-class customer support and more.",
        link1: "",
        link2: "Learn more"
    },
    {
        title: "Windows update information",
        paragraph: "Get all the information you need to update your Samsung PC to the latest version of Windows.",
        link1: "Windows 11",
        link2: "Windows 10"
    },
    {
        title: "Warranty",
        paragraph: "Register your product and find out what's covered.",
        link1: "",
        link2: "Learn more"
    },
    {
        title: "Cracked screen? Skip the repairs.",
        paragraph: "Trade-in & Upgrade to a Certified Re-Newed Galaxy phone for as low as $250**. Additional 5% applied at cart.",
        link1: "",
        link2: "Shop now"
    },
    {
        title: "Product simulators",
        paragraph: "Use our interactive simulators to walk through select hardware and software features on your device step by step.",
        link1: "",
        link2: "Get Started"
    },
    {
        title: "Find replacement parts or start a self-repair",
        paragraph: "If you're looking for a replacement part, visit Samsung Parts to find what you need. To self-repair a mobile phone or tablet, visit our partner site, iFixit, for step-by-step guides and Samsung genuine parts.",
        link1: "Find parts",
        link2: "Start a self-repair"
    }
]

const findResourceBox = document.getElementById('find-resource-box');

findResourceBox.innerHTML = resourceContent.map(item => `
    <div class="flex flex-col justify-between p-4 col-span-12 md:col-span-4 border rounded-xl h-52 w-96 md:w-full">
        <div class="space-y-2">
            <p class="text-xl font-semibold">${item.title}</p>
            <p class="text-sm leading-4">${item.paragraph}</p>
        </div>
        <div class="flex flex-col pt-2">
            <a class="underline font-bold text-xs" href="#">${item.link1}</a>
            <a class="underline font-bold text-xs" href="#">${item.link2}</a>
        </div>
    </div>
`).join('')