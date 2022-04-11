import { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/firstView.css';
const URL = 'https://api.jsonbin.io/b/60215a7906934b65f530333a';

export default class FirstView extends Component {

        constructor(props) {
                super(props)
                this.state = {
                        businesses: [],

                };
        }

        componentDidMount() {
                const checkForImage = document.getElementById('image');

                if (checkForImage) {
                        document.getElementsByClassName('App')[0].removeChild(checkForImage);
                }
                            fetch(URL)
                            .then(res => res.json())
                            .then(data => {
                                this.setState({businesses: data});
                            })
                            .catch((error) => {
                                console.error("ERROR", error);
                            });
        }

        handleFirstView = (id) => {
                this.props.parentCallback(this.state, id); 
        }

        render () {
                const firstTitle = <div id="firstTitle">
                                        <span id="titleName">NAME</span>
                                        <span id="titleDescription">DESCRIPTION</span> 
                                   </div>
                         
                const businesses = (this.state.businesses.length > 0) ? this.state.businesses.map((el) => (
                                        <Link key={el.id} to={'/business'}>
                                                <button className='businessRow text'
                                                        onClick={() => {this.handleFirstView(el.id)}}>
                                                        <span id="businessName">{el.name}</span>
                                                        <span id="businessDescription">{el.description}</span> 
                                                </button>
                                        </Link>
                            )) : <h1 id="noBusinesses" >NO BUSINESSES TO DISPLAY</h1>

                return (
                        <div>
                                {firstTitle}
                                {businesses}
                        </div>
                )
        }
}
