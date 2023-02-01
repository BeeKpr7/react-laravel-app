export default function Front({ children }) {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="" alt="Logo Navbar" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                            <a href="#">Page 2</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}
