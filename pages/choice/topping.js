import React, { useState } from "react";
import ItemList from "../../components/products/ItemList";
import { topping } from "../../components/products/StoreItems";

export default function Topping() {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart((prev) => { return [item, ...prev] })
    }

    const removeItem = (targetIndex) => {
        setCart((prev) => { return prev.filter((item, index) => index !== targetIndex) })
    }

    return (
        <>
            <form>
                {cart.map((item, index) => (
                    <div key={index}>
                        {item}
                        <i onClick={() => removeItem(index)} className="fas fa-trash"></i>
                    </div>
                ))}

                <ItemList group="topping" items={topping} onChange={addItem} />
            </form>
        </>
    )
}