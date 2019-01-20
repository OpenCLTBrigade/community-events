import React, { Component } from "react";
import { Heading } from "fannypack";
import { EventCard } from "../EventCard/EventCard";

export class EventList extends Component {
  state = {
    events: createEvents()
  };

  render() {
    return (
      <React.Fragment>
        <Heading>Events</Heading>
        {this.state.events.map(event => (
          <EventCard key={event.key} event={event} />
        ))}
      </React.Fragment>
    );
  }
}

export default EventList;

const eventUrl =
  "Make-Up Date - Special Ed Workshop Part 2: Measurable Goals &Types of Services";
const time = "2:00pm";
const location = "University City Regional";
const locationRoom = "Community Room";
const locationUrl = "https://www.cmlibrary.org/branch/university-city-regional";
const learnMoreUrl =
  "https://www.cmlibrary.org/event/96323-make-date-special-ed-workshop-part-2-measurable-goals-types-services";

const tags = [
  ["Adults", "Older Adults", "writing", "Books/Literature", "Multicultural"]
];

const description =
  "Please join us for a free 90-minute workshop: Writing & Sharing Your Personal Stories. Writers from Charlotte Lit will lead participants through a series of activities to discover, write, and tell stories of life in Charlotte.";

const createEvents = (count: number = 20) => {
  let events = [];
  for (let index = 0; index < count; index++) {
    events.push({
      key: `event-${index}`,
      title:
        "Make-Up Date - Special Ed Workshop Part 2: Measurable Goals & Types of Services",
      eventUrl,
      description,
      tags: tags[0],
      date: "Sunday, January 20, 2019",
      time,
      locations: [
        {
          name: location,
          locationRoom,
          locationUrl
        }
      ],
      learnMoreUrl
    });
  }
  return events;
};
