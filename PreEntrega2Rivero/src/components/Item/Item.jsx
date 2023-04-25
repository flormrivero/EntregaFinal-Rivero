const Item = ({id, name, img, price, stock, description}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
            </section>
            <footer className="ItemFooter">
                    <Link to={`/item/${id}`}> Ver detalle </Link>
            </footer>

        </article>
    )
}

export default Item