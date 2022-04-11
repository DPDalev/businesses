import { Component } from 'react';
import NearbyPlaces from './NearbyPlaces';
import Details from './Details';
import './../styles/secondView.css';


export default class SecondView extends Component {

        constructor(props) {
                super(props)
                this.businessToDisplay = null;
                this.city = '';
                this.nearbyPlaces = [];
        }

        UNSAFE_componentWillMount() {
                this.props.info.businesses.map((el) => {
                        if (el.id === this.props.id) {
                                this.businessToDisplay = el;
                                this.city = el.address.city;
                        }
                });

                this.props.info.businesses.map((el) => {
                        if (el.address.city === this.city && el.id !== this.businessToDisplay.id) {
                                this.nearbyPlaces.push(el);
                        }
                });
        }

        componentDidMount() {
                const headerContainer = document.getElementById('logoContainer');
                const image = new Image();
                image.id = 'image';
                image.src = this.businessToDisplay.image;
                image.onload = () => {
                        headerContainer.insertAdjacentElement("afterend", image);
                }
        }

        render () {
                return (
                        <div id='container' className='text'>
                                <Details title={'Address'}
                                      firstLine={`${this.businessToDisplay.address.number} ${this.businessToDisplay.address.street} Street`}
                                      secondLine={`${this.businessToDisplay.address.city}, ${this.businessToDisplay.address.zip}`}/>
                                <Details title={'Contact'}
                                      firstLine={this.businessToDisplay.phone}
                                      secondLine={this.businessToDisplay.email}/>
                                <NearbyPlaces title={'Nearby Places'} info={this.nearbyPlaces}/>
                        </div>

                )
        }
}