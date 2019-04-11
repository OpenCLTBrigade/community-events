import React from 'react'

import { Card, Link, Set, Box, Text, Tag } from 'fannypack'

export const EventCard = ({ event }: { event: CommunityEvent }) => (
    <Card
        marginBottom="10px"
        title={event.title}
        headerActions={
            <Set>
                <Link href={event.learnMoreUrl} target="_blank">
                    Learn more
                </Link>
            </Set>
        }>
        <Box marginBottom="5px">
            <Set>
                {event.tags &&
                    event.tags.map((tag: string, index: number) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
            </Set>
        </Box>
        <Box marginBottom="5px">
            <Text use="sub">
                {event.time} at {event.locations[0].locationRoom} at{' '}
                <Link href={event.locations[0].locationUrl} target="_blank">
                    {event.locations[0].name}
                </Link>
            </Text>
        </Box>
        {event.description}
    </Card>
)
