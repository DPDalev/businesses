import { Component } from 'react';
import './../styles/header.css';

export default class Header extends Component {
        
        super(props) {
        }

        componentDidMount() {
                const container = document.getElementById('logoContainer');
                const logo = new Image();
                logo.id = 'logo';
                logo.src = 'https://imgur.com/OB5apLp.png';
                logo.onload = () => {
                        container.appendChild(logo);
                }
        }
        render() {
                return (
                        <header id='logoContainer'>
                        </header>
                )
        }
}