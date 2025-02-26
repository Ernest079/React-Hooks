import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
    <div className='container-fluid'>
      <ul className="nav nav-tabs bg-dark rounded-3 border border-white">
        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to='/'>
          useContext
        </NavLink>
        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to='/about'>

          About
        </NavLink>
        <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to='/login'>

          Login
        </NavLink>
      </ul>
    </div>
    </>
  )
}
