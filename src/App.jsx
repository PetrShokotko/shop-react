import React from 'react';
import Header from './components/header'; // Импортируем Header
import Footer from './components/footer';
import furnitureData from './data/furnitures.json'; // Импортируем данные
import Items from './components/items';
import './index.css';
import Categories from './components/categories';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            curruntItems: [],
            items: furnitureData, // Сохраняем данные в состоянии
        };
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)

    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })

    }
    deleteOrder (id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id) })

    }

    addToOrder(item) {
        const isInArray = this.state.orders.some(el => el.id === item.id);
        
        if (!isInArray) {
            this.setState(prevState => ({
                orders: [...prevState.orders, item]
            }));
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentItems} onAdd={this.addToOrder} />
                <Footer />
            </div>
        );
    }
}

export default App;

// import React from 'react';
// import Header from './components/header'; // Импортируем Header
// import Footer from './components/footer';
// import furnitureData from './data/furnitures.json'; // Импортируем Footer
// import Items from './components/items';
// import './index.css';

// class App extends React.Component {
//    constructor(props) {
//     super(props);
//         this.state = {
//             orders: [],
//             items: furnitureData, // Сохраняем данные в состоянии
//         }
//         this.addToOrder = this.addToOrder.bind(this)
//    }
//     render() {
//         return (
//             <div className='wrapper'>
//                 <Header orders={this.state.orders}/>
//                 <Items items={this.state.items} onAdd={this.addToOrder}/>
//                 <Footer />
//             </div>
//         );
//     }
//     addToOrder(item) {
//         let isInArray = false
//         this.state.orders.forEach(el => {
//             if(el.id === item.id)
//                 isInArray = true
//         })
//         this.setState({ orders: [...this.state.orders, item] })
//     }
// }

// export default App;