const products = [
    { id: 1, name: 'Whisky Premium', price: 'R$ 199,90', image: '/whisky.jfif' },
    { id: 2, name: 'Vinho Tinto', price: 'R$ 89,90', image: '/vinho.jfif' },
];

const ProductList = () => {
    return (
        <section className="p-8 text-center">
            <h2 className="text-2xl  mb-4"style={{ color:"var(--dourado)"}}>Destaques</h2>
            <div className="flex gap-6 justify-center">
                {products.map(product => (
                    <div key={product.id} className="text-black p-4 rounded w-64" style={{ backgroundColor:"var(--branco)",boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                        <h3 className="mt-2 font-bold">{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="mt-2 px-4 py-2 rounded" style={{backgroundColor:"var(--dourado)", color:"var(--preto)"}}>Adicionar ao Carrinho</button>
            </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;