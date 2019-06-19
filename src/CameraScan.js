import React, { Component } from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import PropTypes from "prop-types"
import { Button, Icon, Text, Spinner } from "native-base"
import { RNCamera } from "react-native-camera"
import { withNavigation } from "react-navigation"
import { Col, Row, Grid } from "react-native-easy-grid"

class CameraScan extends Component {
  constructor(props) {
    super(props)
    this.state = { flashMode: false, autoFocus: true }
    this.handleBarCodeRead = this.handleBarCodeRead.bind(this)
  }

  handleBarCodeRead = function(e) {
    // console.log(e)
    // const width = Dimensions.get('window').width
    // const height = Dimensions.get('window').height
    // console.log("w", width)
    // console.log("h", height)
    // return
    const { readyScan } = this.props
    if (!readyScan) return false
    this.camera.pausePreview()
    this.setState({ flashMode: false, autoFocus: false})
    alert(e.data);
    this.p
    // this.props.onQRCodeRead(e.data, () => {
    //   this.setState({autoFocus: true})
    //   this.camera.resumePreview()
    // })
    return
  }

  handleOpenFlash = () => {
    this.setState({ flashMode: !this.state.flashMode })
  }

  loading = () => {
    if (this.camera) {
      this.camera.pausePreview()
    }
  }

  render() {
    const { information, readyScan } = { ...this.props }
    const { flashMode, autoFocus } = this.state
    return (
      <View style={styles.flexFull}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.flexFull}
          type={RNCamera.Constants.Type.back}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={this.handleBarCodeRead}
          autoFocus={autoFocus ? RNCamera.Constants.AutoFocus.on: RNCamera.Constants.AutoFocus.off}
          flashMode={
            flashMode
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        >
          <Grid>
            <Row
              style={[styles.overlay, { flexDirection: "column" }]}
              size={25}
            >
              <Col
                style={{
                  flexDirection: "row",
                  paddingTop: 30,
                  justifyContent: "space-around"
                }}
              >
                <Button bordered light onPress={this.handleOpenFlash}>
                  <Icon type="MaterialIcons" name="flash-on" />
                </Button>
                <Button
                  bordered
                  light
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Icon type="MaterialIcons" name="clear" />
                </Button>
              </Col>
              <Col style={styles.textHead}>
                <Text style={styles.textHead}>{information}</Text>
              </Col>
            </Row>
            <Row size={45}>
              <Col style={[]} size={10} />
              <Col size={80} style={{justifyContent: "center", alignItems: "center"}}>
                {!readyScan ? (
                  <Text style={styles.howTo}>{"Loading..."}</Text>
                ) : (
                  <Text style={styles.howTo}>{""}</Text>
                )}
              </Col>
              <Col style={[]} size={10} />
            </Row>
            <Row size={30} style={[styles.howTo]}>
              <Col style={styles.howTo}>
                <Text style={styles.howTo}>{""}</Text>
              </Col>
            </Row>
          </Grid>
        </RNCamera>
        {/* {this.state.loading ? <Spinner color="#fff" /> : <Text style={styles.howTo}>{""}</Text>} */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(1,1,1,0.6)"
  },
  flexFull: {
    flex: 1
  },
  textHead: {
    justifyContent: "flex-end",
    alignItems: "center",
    color: "#fff",
    fontSize: 18,
    paddingBottom: 10,
    
  },
  howTo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  }
})

CameraScan.propTypes = {
  information: PropTypes.string,
  readyScan: PropTypes.bool,
  loading: PropTypes.bool
}

CameraScan.defaultProps = {
  readyScan: true,
  loading: false
}

export default CameraScan;
