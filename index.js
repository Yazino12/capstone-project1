// FEATURED SECTION

const container = document.querySelector('#featured');

const features = [
  {
    thumbnail: 'images/first.jpg',
    name: 'Osandi Robinson',
    occupation: 'Designer in Charlotte, NC, United States',
    description:
      'Mentored at Apple, Osandi has spent over ten years helping teams.',
  },
  {
    thumbnail: 'images/second.jpg',
    name: 'Danielle Thompson',
    occupation: 'Designer in Singapore, Singapore',
    description:
      'Danielle is a seasoned UI/UX product designer specializing in the sports and fintech market.',
  },
  {
    thumbnail: 'images/third.jpg',
    name: 'Mike Slone',
    occupation: 'Designer in Ladera Ranch, CA, United States',
    description:
      'Mike is a highly experienced and successful product, UX, UI, visual, and branding designer.',
  },
  {
    thumbnail: 'images/fourth.jpg',
    name: 'Amélie Lamont',
    occupation: 'Designer in New York, NY, United States',
    description:
      'Amélie is an independent product designer, writer, and UX teacher based in New York.',
  },
  {
    thumbnail: 'images/fivth.jpg',
    name: 'Lee Hsieh',
    occupation: 'UX/UI Designer in Tokyo, Japan',
    description:
      'Lee has designed everything from sex education software for kids to flight management apps for pilots.',
  },
  {
    thumbnail: 'images/sixth.jpg',
    name: 'Greg Kujda',
    occupation: 'Designer in Long Beach, CA, United States',
    description:
      'Greg is a hybrid storyteller with deep experience leading UI/UX, visual, and motion design.',
  },
];

// CREATING FEATURED SECTION FROM ARRAY DATA AND POPULATING DYNAMICALLY

const populate = function (number) {
  function generate(items) {
    items.forEach((feature) => {
      const content = ` <div class="featured-items">
                          <div class="lefts">
                            <img src=${feature.thumbnail} alt="Tutor-image" />
                          </div>
                          <div class="rights">
                            <h3>${feature.name}</h3>
                            <span>${feature.occupation}</span>
                            <hr />
                            <p class="featured-p">${feature.description}</p>
                          </div>
                        </div>`;

      container.children[1].innerHTML += content;
    });
  }

  if (number) {
    number = [features[0], features[1]];
    generate(number);
  } else {
    generate(features);
  }
};

const expand = container.children[2];
const contents = container.children[1];
let clicked = false;

// On the first page reload generate corresponding content

if (window.screen.width < 768) {
  populate(2);
} else {
  populate();
  expand.style.display = 'none';
}

// Function for deleting all feature items

function deleteAll() {
  for (let i = contents.children.length - 1; i >= 0; i -= 1) {
    contents.children[0].remove();
  }
}

// Function for clearing and re-populating features

function rePopulate(num, disp) {
  deleteAll();
  populate(num);
  expand.style.display = disp;
}

// Keep on checking page size to detect mobile and dekstop screens for changes

window.onresize = function () {
  if (window.screen.width >= 768) {
    clicked = false;
    rePopulate(undefined, 'none');
  } else if (
    (contents.children.length < 3 && !clicked)
    || (contents.children.length >= 3 && !clicked)
  ) {
    rePopulate(2, 'block');
  }
};

// Expanding the feature items for mobile devices

expand.addEventListener('click', () => {
  clicked = true;
  rePopulate(undefined, 'none');
});

// IMPLEMENT MOBILE MENU

const background = document.querySelector('.mobile-menu-background');
const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const menu1 = document.querySelector('.close-menu-item1');
const menu2 = document.querySelector('.close-menu-item2');
const menu3 = document.querySelector('.close-menu-item3');
const body = document.querySelector('body');

background.style.display = 'none';

const closePopup = () => {
  body.style.overflow = 'auto';
  background.style.display = 'none';
  background.classList.remove('popUp');
};

burgerMenu.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  background.style.display = 'flex';
  background.classList.add('popUp');
});

closeMenu.addEventListener('click', () => {
  closePopup();
});

menu1.addEventListener('click', () => {
  closePopup();
});

menu2.addEventListener('click', () => {
  closePopup();
});

menu3.addEventListener('click', () => {
  closePopup();
});
