import Product from "./Product"
function Products(props) {
    return (
        <main className="container">
            <h1>Ordinateurs portables</h1>
            <div className="row mb-2">
                {props.products.map((products, index) => {
                    return <Product key={index} data={products} />
                })
                }
            </div>
        </main>
    )
}
export default Products;
