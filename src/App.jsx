
// src/App.jsx
import React from 'react';
import Header from './components/header'; // Импортируем Header
import Footer from './components/footer';
import furnitureData from './data/furnitures.json'; // Импортируем Footer
import Items from './components/items';
import './index.css';

class App extends React.Component {
   constructor(props) {
    super(props);
        this.state = {
            items: furnitureData, // Сохраняем данные в состоянии
        };
   }
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Items items={this.state.items}/>
                <Footer />
            </div>
        );
    }
}

export default App;