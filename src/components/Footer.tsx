const Footer = () => {
    return (
        <footer className="p-4  text-center" style={{ backgroundColor: 'var(--preto)', color: 'var(--branco)' }}>
            <p>&copy; 2025 Point Adega. Todos os direitos reservados.</p>
            <p>Desenvolvido por Gabriel Santino.</p>
            <p>Licenciado sob a <a href="https://opensource.org/licenses/MIT" className="text-yellow-500">MIT License</a>.</p>
        </footer>
    );
};

export default Footer;