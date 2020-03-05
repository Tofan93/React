import React, { Component } from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component{
  render () {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Team
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Programming
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Frameworks
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    Design
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://wallbox.ru/resize/800x480/wallpapers/main/201619/6f34b5c15561318.jpg"/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna ut tortor interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/02951_800x480.jpg"/>
                  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna ut tortor interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://img1.goodfon.ru/original/800x480/1/ab/reka-gory-peyzazh-3552.jpg"/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna ut tortor interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://img1.goodfon.ru/original/800x480/c/15/yosemite-national-park-ssha.jpg"/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna ut tortor interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://www.wallpapers.net/web/wallpapers/summertime-on-the-lake-hd-wallpaper/800x480.jpg"/>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non urna ut tortor interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
