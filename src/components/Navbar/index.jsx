import './index.css'

export default function Navbar({title}) {
    return <header className="navbar">
        <div className="navbar-brand">
            <img src="https://soulcode.com/assets/logos/logo-soulcode-white.png" alt="logo" />
            <p>{title}</p>
        </div>
    </header>
}