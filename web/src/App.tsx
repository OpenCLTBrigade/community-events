
import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from 'fannypack'
import { Container } from 'fannypack'
import { Events } from './pages'

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <Container width="initial">
                    <Events />
                </Container>
            </ThemeProvider>
        )
    }

}

export default App
