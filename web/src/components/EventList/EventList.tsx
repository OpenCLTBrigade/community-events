import React from 'react'
import { Heading } from 'fannypack'
import { EventCard } from '../EventCard/EventCard'

type Props = {
    events?: CommunityEvent[]
}

export function EventList({ events = [] }: Props) {
    return (
        <React.Fragment>
            {events.length > 0
                ? events.map((event) => (
                      <EventCard key={event.id} event={event} />
                  ))
                : 'There are no events at this time'}
        </React.Fragment>
    )
}

EventList.defaultProps = {
    events: []
}

export default EventList
