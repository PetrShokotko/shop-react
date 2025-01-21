import PropTypes from 'prop-types';
import Item from './item'

const Items = (props) => {
    return (
        <main className="com1">
            {props.items.map(el => (
                <Item key={el.id} item={el} />
            ))}
        </main>
    );
};

Items.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            img: PropTypes.arrayOf(PropTypes.string).isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Items;
// import React from "react";
// import Item from "./item"; // Не забудьте импортировать компонент Item

// const Items = (props) => {
//     return (
//         <main className="com1"> {/* Исправлено на className вместо classname */}
//             {props.items.map(el => (
//                 <Item key={el.id} item={el} />
//             ))}
//         </main>
//     );
// };

// export default Items;