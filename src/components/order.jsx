import { Component } from 'react';
import PropTypes from 'prop-types'; // Импорт PropTypes
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.img[0]} alt={this.props.item.title} />
                <h2>{this.props.item.title}</h2>
                <p className='price'>{this.props.item.price}$</p>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        );
    }
}

// Добавление валидации пропсов
Order.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired, // Валидация для onDelete
};

export default Order;