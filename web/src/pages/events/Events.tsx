import { useFetch } from '../../hooks/use-fetch'
import React from 'react'
import { Heading } from 'fannypack'
import EventList from '../../components/EventList/EventList'

export function Events() {
    const [events, loading] = useFetch<CommunityEvent[]>('/api/events')
    if (loading) return <div>Loading...</div>

    return (
        <React.Fragment>
            <Heading>Events</Heading>
            <EventList events={events} />
        </React.Fragment>
    )
}
