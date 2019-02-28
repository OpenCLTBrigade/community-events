import React from "react";
import { Heading } from "fannypack";
import { EventCard } from "../EventCard/EventCard";
import { useFetch } from "../../hooks/use-fetch";

export function EventList() {
  const [events, loading] = useFetch<Event[]>("/events");
  if (loading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Heading>Events</Heading>

      {events &&
        events.map(event => <EventCard key={event.id} event={event} />)}
    </React.Fragment>
  );
}

export default EventList;

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  locations: Location[];
  learnMoreUrl: string;
};
type Location = {
  name: string;
  locationRoom: string;
  locationUrl: string;
};
