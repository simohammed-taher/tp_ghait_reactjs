import Products from "./Products";
function Product(props) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src={`pictures/${props.data.thumbnail}`} alt="" />
                <div className="card-body">
                    <p className="card-title">{props.data.title}</p>
                    <p className="card-text">{props.data.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product