import { Navbar, NavbarBrand } from 'reactstrap'
import './Navbar.css'


export function NavbarDNT(){
    return (
        <Navbar color="dark" dark className="navbar">
            <NavbarBrand className="navbarLogo" href="/">
                <img src="/pasta.png" alt="Logo" className="logo" />
                <span>Drag-n-transfer</span>
            </NavbarBrand>
        </Navbar>
    )
}