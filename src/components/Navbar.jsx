import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between ">
        <NavLink to="/">
          <div>
            <img src="https://images.app.goo.gl/g5b2HFbSbBS5iwMG9" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>

      <div> </div>
    </div>
  )
}

export default Navbar
