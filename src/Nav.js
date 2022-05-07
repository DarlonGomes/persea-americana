import Logo from "./Logo"
import Searching from "./Search"
import NavIcon from "./Icons"
export default function Navbar() {
    return(
        <div class="navbar">
        <div class="container">
          <Logo />
          <Searching />
          <NavIcon />
        </div>
      </div>
    )
}