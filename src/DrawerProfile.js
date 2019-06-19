import React, { Component } from "react"
import { Thumbnail, Text, H1, H3, Col, Row, Grid } from "native-base"


class DrawerProfile extends Component {
  render() {
    return (
      <Grid>
        <Row
          style={{
            height: 60,
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <Col
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40
            }}
          >
            <Text style={{}}>Sovannarith</Text>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40
            }}
          >
            <Text style={{}}>Engineer</Text>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default DrawerProfile;
