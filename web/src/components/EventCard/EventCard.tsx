import React from "react";

import { Card, Link, Set, Button, Box, Text } from "fannypack";

export const EventCard = ({ event }: { event: any }) => (
  <Card
    marginBottom="10px"
    title={event.title}
    footer={
      <Set>
        <Link href={event.learnMoreUrl} target="_blank">
          <Button>Learn more</Button>
        </Link>
      </Set>
    }
  >
    <Box>
      <Text>
        {event.time} at {event.locations[0].locationRoom} at{" "}
        <Link href={event.locations[0].locationUrl} target="_blank">
          {event.locations[0].name}
        </Link>
      </Text>
    </Box>
    {event.description}
  </Card>
);
