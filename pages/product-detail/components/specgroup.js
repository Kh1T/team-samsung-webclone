
const specs = [
  {
    title: "Bluetooth® Version",
    description: "Bluetooth v5.3",
  },
  {
    title: "Bluetooth Profiles",
    description: "A2DP,AVRCP,HFP",
  },
];

const physicalSpecs = [
  {
    category: "Physical specification",
    specs: [
      {
        title: "Weight",
        description: "1.92 oz",
      },
    ],
  },
];

// Function to create a specification element
function createSpecElement(detail) {
  // Create container div
  const container = document.createElement("div");
  container.className =
    "border-x-[24px] border-zinc-200 border-transparent space-y-2 w-52 mr-28 pb-4";

  // Create title
  const title = document.createElement("div");
  title.className = "text-xs font-semibold";
  title.innerHTML = detail.title;

  // Create description
  const description = document.createElement("div");
  description.className = "text-xs font-extralight";
  description.innerHTML = detail.description;

  // Append title and description to container
  container.appendChild(title);
  container.appendChild(description);

  return container;
}

// Function to create a physical specification element
function createPhysicalSpecElement(detail) {
  // Create container div
  const container = document.createElement("div");
  container.className =
    "border-x-[24px] border-zinc-200 border-transparent space-y-2 w-52 mr-28 pb-4";

  // Create category
  const category = document.createElement("span");
  category.className = "text-base font-extralight";
  category.innerHTML = detail.category;

  // Append category to container
  container.appendChild(category);

  // Iterate through specs and append each to container
  detail.specs.forEach((spec) => {
    const title = document.createElement("div");
    title.className = "text-xs font-semibold";
    title.innerHTML = spec.title;

    const description = document.createElement("div");
    description.className = "text-xs font-extralight";
    description.innerHTML = spec.description;

    container.appendChild(title);
    container.appendChild(description);
  });

  return container;
}

// Function to render all specs
function renderSpecs() {
  const specsContainer = document.getElementById("specs-container");
  specs.forEach((detail) => {
    const specElement = createSpecElement(detail);
    specsContainer.appendChild(specElement);
  });

  const physicalSpecsContainer = document.getElementById(
    "physical-specs-container"
  );
  physicalSpecs.forEach((detail) => {
    const physicalSpecElement = createPhysicalSpecElement(detail);
    physicalSpecsContainer.appendChild(physicalSpecElement);
  });
}