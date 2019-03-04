import React, { Component } from "react";
import "./App.css";
import { ThemeProvider, Navigation } from "fannypack";
import { Container } from "fannypack";
import EventList from "./components/EventList/EventList";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      
      <ThemeProvider>
        <Container width="initial">
          <EventList />
        </Container>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
