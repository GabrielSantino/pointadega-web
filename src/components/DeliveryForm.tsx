import { useState } from "react";
import { motion } from "framer-motion";

export default function DeliveryForm() {
    const [address, setAddress] = useState("");
    const [frete, setFrete] = useState("");

    const getPrecoFrete = () => (Math.random() * 10 + 5).toFixed(2);

    const handleCalcularFrete = () => {
        if (!address.trim()) {
            setFrete("Digite um endereço válido.");
            return;
        }
        const precoFrete = getPrecoFrete();
        setFrete(`Frete para "${address}": R$ ${precoFrete}`);
    };

    return (
        <motion.section 
            className="p-6 bg-yellow-500 text-black text-center rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl font-bold">Calcule o Frete</h2>
            <div className="mt-4">
                <motion.input
                    type="text"
                    placeholder="Digite seu endereço..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="p-2 border rounded w-full max-w-sm text-black focus:border-yellow-700 transition duration-300"
                    aria-label="Digite seu endereço"
                    whileFocus={{ scale: 1.05 }}
                />
                <motion.button
                    onClick={handleCalcularFrete}
                    className="ml-2 bg-black text-white px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                    aria-label="Calcular frete"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Ver Preço
                </motion.button>
            </div>
            {frete && (
                <motion.p 
                    className="mt-2 font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {frete}
                </motion.p>
            )}
        </motion.section>
    );
}