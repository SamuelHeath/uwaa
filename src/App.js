import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Image,
  Menu,
  Responsive,
  Segment} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './views/homepage';

  const HomepageHeading = ({ mobile }) => (
    <Container textAlign='center'>
      <Header
        as='h1'
        textAlign='center'
        content='UWA Aerospace'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: mobile? '1em' : '2em',
          marginTop: mobile ? '1em' : '2em',
        }}
      />
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

class DesktopContainer extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive>
          <Segment
            basic
            inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed={'top'}
              inverted
              pointing
              size='large'
            >
              <Container>
                <Menu.Item header icon>
                  <Header as='h3' image inverted className='header'><Image size='mini' src={'/media/logo.png'} />UWA Aerospace</Header>
                </Menu.Item>
                <Menu.Item as='a'>Rockets</Menu.Item>
                <Menu.Item as='a'>Team</Menu.Item>
              </Container>
            </Menu>
            {/*<HomepageHeading />*/}
          </Segment>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class App extends Component {
  render ()  {
    var year = new Date().getFullYear();
    return(
      <Router>
        <DesktopContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={HomePage} />
          <Route path="/topics" component={HomePage} />
          
          <Segment inverted vertical textAlign='center'>
            <Container text>
              <Header textAlign='center' as='h5' image inverted>
                © Copyright {year} - UWAA
              </Header>
            </Container>
          </Segment>
        </DesktopContainer>
        
      </Router>
    )
  }
}

export default App;
