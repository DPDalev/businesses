import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstView from './components/FirstView';
import SecondView from './components/SecondView';
import './App.css';

export default class App extends Component {
        constructor(props) {
                super(props)
                this.businesses = null;
                this.id = null;
        }
        handleFirstView = (childData, id) => {
                this.businesses = childData;
                this.id = id;
                this.forceUpdate();
        }
        render() {
                return (
                        <div className="App">
                                <Header/>
                                <Routes>
                                        <Route path='/' element={<FirstView parentCallback={this.handleFirstView}/>} />
                                        <Route path='/business' element={<SecondView info={this.businesses} id={this.id}/>} />
                                </Routes>
                        </div>
                );
        }
}
