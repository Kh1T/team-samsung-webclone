
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
      overviewComponent.querySelector('.overview-image').src = imgSrc;
      overviewComponent.querySelector('.overview-image-set').src = imgSrcset;
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
//       {
//         imgSrc: '/path/to/image2.jpg',
//         title: 'Product Title 2',
//         description: 'This is a brief description of the product 2.',
//         additionalInfo: 'Additional information here 2.'
//       }, {
//       imgSrc: '/path/to/image2.jpg',
//         title: 'Product Title 2',
//         description: 'This is a brief description of the product 2.',
//         additionalInfo: 'Additional information here 2.'
//   },
    ];

    const container = document.getElementById('overview-container');
    data.forEach(item => {
      const overviewComponent = createOverviewComponent(item);
      container.appendChild(overviewComponent);
    });
  });