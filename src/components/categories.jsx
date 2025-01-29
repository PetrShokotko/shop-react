import  { Component } from 'react';
import PropTypes from 'prop-types';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { key: 'all', name: 'All' },
                { key: 'Chairs', name: 'Chairs' },
                { key: 'Tables', name: 'Tables' },
                { key: 'Bedside Tables', name: 'Bedside Tables' },
                { key: 'Beds', name: 'Beds' },
            ]
        };
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                        {el.name}
                    </div>
                ))}
            </div>
        );
    }
}

// Добавление валидации для props
Categories.propTypes = {
    chooseCategory: PropTypes.func.isRequired, // Указываем, что chooseCategory должен быть функцией
};

export default Categories;