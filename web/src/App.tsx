import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from 'fannypack'
import { Container } from 'fannypack'
import EventList from './components/EventList/EventList'

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <Container width="initial">
                    <EventList />
                </Container>
            </ThemeProvider>
        )
    }
}

export default App
