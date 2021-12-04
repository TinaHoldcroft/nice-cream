import React, { useState } from "react";
import ItemList from "../../components/products/ItemList";
import { flavour } from "../../components/products/StoreItems";

export default function Flavour() {
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
                        <i onClick={() => removeItem(index)} key={index} className="fas fa-trash"></i>
                    </div>
                ))}

                <ItemList onClick={handleDisable} disabled={disable} group="flavour" items={flavour} onChange={addItem} />
            </form>
        </>
    )
}