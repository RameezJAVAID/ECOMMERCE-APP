import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const homeNavigate = useNavigate();
    const proNavigate = useNavigate();
    const style = {
        cursor: "pointer",
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Ecommerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" style={style} onClick={() => homeNavigate("/")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={style} onClick={() => proNavigate("/Products")}>Products</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
