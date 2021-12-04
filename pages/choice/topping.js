import React, { useState } from "react";
import ItemList from "../../components/products/ItemList";
import { topping } from "../../components/products/StoreItems";

export default function Topping() {
    const [disable, setDisable] = useState(false)
    const [cart, setCart] = useState([])
    const handleDisable = () => { setDisable(!disable) }

    const addItem = (item) => {
        setCart((prev) => { return [item, ...prev] })
    }

    const removeItem = (targetIndex) => {
        setDisable(!disable)
        setCart((prev) => { return prev.filter((item, index) => index !== targetIndex) })
    }

    return (
        <>
            <form>
                {cart.map((item, index) => (
                    <div>
                        {item}
                        <i key={index} onClick={() => removeItem(index)} className="fas fa-trash"></i>
                    </div>
                ))}

                <ItemList onClick={handleDisable} disabled={disable} group="topping" items={topping} onChange={addItem} />
            </form>
        </>
    )
}