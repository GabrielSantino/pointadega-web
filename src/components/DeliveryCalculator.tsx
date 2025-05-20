import { useState } from 'react';

const DeliveryCalculator = () => {
    const [addres, setAddress] = useState("");
    const [frete, setFrete] = useState("");

    const calcularFrete = () => {
        if (!addres) {
            setFrete("Por favor, digite um endereço válido.");
            return;
        }
        setFrete(`O frete para seu endereço "${addres}" é R$ 10,00.`);
    };

    return (
        <section className=" p-6 text-center" style={{ backgroundColor: 'var(--dourado)', color: 'var(--preto)' }}>
            <h2 className='text-x1 font bold'>Calcular o Frete</h2>
            <div className='mt-2'>
                <input 
                    type="text" 
                    placeholder='Digite seu endereço...' 
                    className='p-2 border rounded w-full max-w-sm'
                    value={addres}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button 
                    onClick={calcularFrete} 
                    className='ml-2 px-4 py-2 rounded'style={{backgroundColor:'var(--preto)', color: 'var(--branco'}}>Ver Preço</button>
            </div>
            {frete && <p className='mt-2 font-bold'>{frete}</p>}
        </section>
    );
};

export default DeliveryCalculator;