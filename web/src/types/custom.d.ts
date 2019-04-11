type CommunityEvent = {
    id: number
    title: string
    description: string
    date: string
    tags: string[]
    locations: EventLocation[]
    learnMoreUrl: string
    time: string
}

type EventLocation = {
    name: string
    locationRoom: string
    locationUrl: string
}
