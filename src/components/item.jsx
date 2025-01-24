
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      img: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    onAdd: PropTypes.func.isRequired, // Добавьте эту строку
  };

  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img[0]} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <p className='price'>{this.props.item.price}$</p>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;
// import React, { Component } from 'react'

// export class Item extends Component {
//   static propTypes = {}

//   render() {
//     return (
//       <div className='item'>
//         <img src={this.props.item.img[0]} alt={this.props.item.title} />
//         <h2>{this.props.item.title}</h2>
//         <p>{this.props.item.desc}</p>
//         <p>{this.props.item.price}$</p>
//         <div className='add-to-cart'>+</div>
//       </div>
//     )
//   }
// }

// export default Item