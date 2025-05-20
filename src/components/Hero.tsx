const Hero = () => {
    return (
        <section className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-center" style={{color: 'var(--branco)', backgroundImage: 'url(/hero-bg.jpg'}}>
            <h1 className="text-3xl font-bold">As melhores bebidas com entrega rápida e segura.</h1>
            <button className="mt-4  text-black px-6 py-3 rounded font-bold" style={{backgroundColor:"var(--dourado)"}}>Ver Produtos</button>
        </section>
    );
}

export default Hero;