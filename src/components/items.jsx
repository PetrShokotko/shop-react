import React from "react";
import Item from "./item"; // Не забудьте импортировать компонент Item

const Items = (props) => {
    return (
        <main className="com1"> {/* Исправлено на className вместо classname */}
            {props.items.map(el => (
                <Item key={el.id} item={el} />
            ))}
        </main>
    );
};

export default Items;