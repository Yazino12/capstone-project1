// DYNAMIC FEATURED SECTION

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

console.log(container);

// CREATING FEATURED FROM ARRAY DATA AND POPULATING DYNAMICALLY

features.forEach((feature) => {
  const content = ` <div class="featured-items">
  <div class="lefts">
    <img src=${feature.thumbnail} alt="Tutor-image" />
  </div>
  <div class="rights">
    <h3>${feature.name}</h3>
    <span>${feature.occupation}</span>
    <hr />
    <p>${feature.description}</p>
  </div>
</div>`;

  container.children[1].innerHTML += content;
});
