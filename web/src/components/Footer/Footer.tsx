import React, { Component } from "react";
import { Column, Columns, Box, Link} from 'fannypack';
import logo from '../../images/logo.png';
import "./style.css";

class Footer extends Component {
    render(){
        return(
          <Columns isOneLine>
          <Column spread={12}>
          <Box backgroundColor="transparent">
          <Link href="https://opencharlotte.org/"><img className="ocbLogo"src={logo} alt="Logo" /></Link>
    </Box>
          
          </Column>
          </Columns>
        )
    }

};

export default Footer;
