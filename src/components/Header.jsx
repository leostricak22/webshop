import {useContext, useRef} from "react";

import CartModal from "./CartModal";
import logo from "../assets/logo.png";
import { CartContext } from "../store/shopping-cart-context";

export default function Header() {
    const modal = useRef();
    const cartCtx = useContext(CartContext);

    const cartQuantity = cartCtx.items.length;

    function handleOpenCartClick() {
        modal.current.open();
    }

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal
                ref={modal}
                title="Your Cart"
                actions={modalActions}
            />
            <header id="main-header">
                <div id="main-title">
                    <img src={logo} alt="Elegant model" />
                    <h1>Game Shop</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    );
}
