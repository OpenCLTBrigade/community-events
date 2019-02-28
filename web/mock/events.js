var Chance = require("chance");
var chance = new Chance();

const tags = [
  "Adults",
  "Older Adults",
  "Writing",
  "Books/Literature",
  "Multicultural"
];

const learnMoreUrl =
  "https://www.cmlibrary.org/event/96510-technology-tutors-1-1-support-session";

const locationUrl = "https://www.cmlibrary.org/branch/university-city-regional";

const generateLocation = () => ({
  name: chance.word(),
  locationRoom: chance.word(),
  locationUrl
});

let generateEvents = () => {
  let events = [];

  for (let id = 0; id < 30; id++) {
    const title = chance.word();
    const date = chance.date({ year: 2019 });
    const description = chance.paragraph({ sentences: 2 });

    events.push({
      id: id,
      title,
      description,
      date,
      tags: [tags[chance.integer({ min: 0, max: 4 })]],
      locations: [generateLocation()],
      learnMoreUrl
    });
  }

  return { events };
};

module.exports = generateEvents;
