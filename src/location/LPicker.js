import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import axios from "axios";
/* Default position */
const defaultPosition = {
  lat: 31.95369656943886,
  lng: 35.91061319346073
};

export default class LocationPickerExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Amman, Jordan",
      position: {
        lat: 27.9878,
        lng: 35.8825984
      },
      defaultPosition: defaultPosition
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
  async componentDidMount() {
    const { token } = localStorage;
    try {
      const response = await axios.get('http://localhost:8000/labInfo/getInfo', { headers: { "token": `${token}` } });
      console.log(response.data)
      this.setState({
        position: {
          lat: response.data.Latitude || 0,
          lng: response.data.Longitude || 0,
        },
        loading: false,
      })
    } catch (error) {
      this.setState({ loading: false })
      console.log('error', error.message)
    }
  }

  handleLocationChange({ position, address }) {
    const { token } = localStorage
        const endPoint = `http://localhost:8000/labInfo/locationInfo`
        axios.put(endPoint, {Latitude: this.state.position.lat, Longitude: this.state.position.lng}, { headers: { "token": `${token}` } })
            .then((response) => {
                this.setState({
                    position: response.data,
                    loading: false,
                })
            }).catch(error => {
                this.setState({ loading: false })
            })
    this.setState({ position, address });
  }

  componentDidMount() {
    axios("https://ipinfo.io").then(res => {
      const [Latitude, Longitude] = res.data.loc.split(",");
      const position = {
        lat: Number(Latitude),
        lng: Number(Longitude)
      };
      this.setState({ defaultPosition: position });
    });
  }
  render() {
    return (
      <div>
        <h4><span style={{ color: "#04a9f5" }}>Your address:</span> {this.state.address}</h4>
        <div>
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "300px" }} />}
            defaultPosition={this.state.defaultPosition}
            position={this.state.position}
            onChange={this.handleLocationChange}
            radius={-1}
          />
        </div>
        <div>

        </div>
      </div>
    );
  }
}
