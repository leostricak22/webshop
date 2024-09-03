import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product";

export default function Shop({ onAddItemToCart }) {
    return (
        <section id="shop">
            <h2>Best selling video games</h2>

            <ul id="products">
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product} onAddToCart={onAddItemToCart} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
