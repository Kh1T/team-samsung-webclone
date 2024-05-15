
// Image Overview #2

document.addEventListener('DOMContentLoaded', function() {
    // Function to create an overview component
    function createOverviewComponent({ imgSrc, imgSrcset, title, description, additionalInfo }) {
        // Get the template content
        const template = document.getElementById('overview-template').content;
        const overviewComponent = template.cloneNode(true).querySelector('.overview-component');

        // Set the data attributes
        overviewComponent.setAttribute('data-img-src', imgSrc);
        overviewComponent.setAttribute('data-img-srcset', imgSrcset);
        overviewComponent.setAttribute('data-title', title);
        overviewComponent.setAttribute('data-description', description);
        overviewComponent.setAttribute('data-additional-info', additionalInfo);

        // Populate the content
        const imageElement = overviewComponent.querySelector('.overview-image');
        overviewComponent.querySelector('.overview-image').src = imgSrc;
        overviewComponent.querySelector('.overview-image-set').srcset = imgSrcset;
        overviewComponent.querySelector('.overview-title').textContent = title;
        overviewComponent.querySelector('.overview-description').textContent = description;
        overviewComponent.querySelector('.overview-additional').textContent = additionalInfo;
        return overviewComponent;
    }

    const data = [
        {
            imgSrc: '/assets/images/product-detail/f4-buds2-pro.png',
            imgSrcset: '/assets/images/product-detail/f4-buds2-pro-small.png',
            title: 'Every moment now sounds epic',
            description: ' Studio-quality sound isn’t just for the pros. Feel every note like you’re there with Galaxy Buds2 Pro.³ Now everyone can have anext-level listening experience , whether you’re rocking out to your playlist or staying informed with podcast.',
            additionalInfo: '³Requires a Galaxy smartphone with Android 8.0 and One UI 4.0 or later with 1.5GB RAM or above.'
        },
        {
            imgSrc: '/assets/images/product-detail/f5-buds2-pro.png',
            imgSrcset: '/assets/images/product-detail/f5-buds2-pro-small.png',
            title: ' Hear only what you want ',
            description: ' Reduce unwanted noise with Galaxy Buds2 Pro. They use Intelligent Active Noise Cancellation⁴ to quiet even the loudest outside sounds. Tune in to what matters most without being bothered by distracting sounds around you.',
            additionalInfo: '⁴Features including Intelligent Active Noise Cancellation and Ambient sound require a Bluetooth connection to a compatible device.'
        },
        {
            imgSrc: '/assets/images/product-detail/f6-buds2-pro.png',
            imgSrcset: '/assets/images/product-detail/f6-buds2-pro-small.png',
            title: 'Surround sound that’s all about you',
            description: 'Go beyond just listening and surround yourself with the sounds you love — and nothing else. Amplify what you like. Minimize what you don’t. Enhanced 360-degree audio⁵ brings out the tones you love from every angle for a surround-sound experience every time you pop them in.',
            additionalInfo: '⁵Requires a Galaxy smartphone with Android 8.0 and One UI 4.1 or later with 1.5GB RAM or above.'
        },
        {
            imgSrc: '/assets/images/product-detail/f7-buds2-pro.png',
            imgSrcset: '/assets/images/product-detail/f7-buds2-pro-small.png',
            title: 'Don’t miss a word',
            description: 'Keep the conversation going without taking out your Galaxy Buds2 Pro. When your voice is detected, Intelligent Conversation Mode turns off Active Noise Cancellation, turns down the volume and puts your Buds in Ambient Mode.⁶ This helps you hear the other person’s voice loud and clear. When the conversation is over, your Buds shift back to their previous settings automatically. Now you can catch every word without having to lift a finger.',
            additionalInfo: '⁶Requires a Galaxy smartphone with Android 8.0 later and 1.5GB RAM or above. Feature only can be enabled and controlled through the Galaxy Wearable app on Android, available on the Google Play Store.'
        },
        {
            imgSrc: '/assets/images/product-detail/f8-buds2-pro.png',
            imgSrcset: '/assets/images/product-detail/f8-buds2-pro-small.png',
            title: 'A Galaxy in perfect sync',
            description: 'These Buds play well with others. Galaxy Buds2 Pro pair easily with your Galaxy devices.⁷ Simply open the case and tap connect to pair with your Galaxy devices quickly. Whether you’re pairing with your tablet, phone or Watch, Buds2 Pro syncs in a cinch and automatically switches audio sources when an alert or call comes in to keep you in the know.⁸',
            additionalInfo: '⁷Easy Pair only supported on mobile devices running One UI 1.0 or later and Galaxy Book series PCs launched 2020 or later.<br> ⁸Auto Switch only supported on mobile devices (smartphones and tablets) running One UI 3.1 or later and watches that are Galaxy Watch4 Series or later. Devices must be logged in to the same Samsung account and have Bluetooth and Wi-Fi turned on. Earbuds must be paired with both your phone and tablet at least once.'
        },
    ];

    const container = document.getElementById('overview-container');
    data.forEach(item => {
        const overviewComponent = createOverviewComponent(item);
        container.appendChild(overviewComponent);
    });
});
