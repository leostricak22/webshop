export default function Shop({ children }) {
    return (
        <section id="shop">
            <h2>Best selling video games</h2>

            <ul id="products">
                {children}
            </ul>
        </section>
    );
}
