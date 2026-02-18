import useTheme from "../hook/useTheme"
import { NavLink } from "react-router-dom"

export default function SideBar() {

  const { darkMode, setDarkMode } = useTheme()

  return (
    <aside className="sidebar">
      <section>

        <p style={{ fontSize: '25px', fontWeight: 800 }}>
          <i style={{ color: "yellow" }} className="fa-solid fa-bolt-lightning"></i>
          Wizarding World
        </p>
        <p style={{ color: '#ffc518', fontWeight: 200, fontSize: '12px', margin: 0 }}>Explore the magic</p>
      </section>
      <hr />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="/"           className={({ isActive }) => `sidebarLink ${isActive ? 'sidebarLinkActive' : ''}`}>
          <i className="fa-solid fa-house"></i>
          Home
        </NavLink>
        <NavLink to="/characters" className={({ isActive }) => `sidebarLink ${isActive ? 'sidebarLinkActive' : ''}`}>
          <i className="fa-solid fa-people-group"></i>
          Characters
        </NavLink>
        <NavLink to="/houses" className={({ isActive }) => `sidebarLink ${isActive ? 'sidebarLinkActive' : ''}`}>
          <i className="fa-solid fa-house"></i>
          Houses
        </NavLink>
        <NavLink to="/spells" className={({ isActive }) => `sidebarLink ${isActive ? 'sidebarLinkActive' : ''}`}>
          <i className="fa-solid fa-wand-magic"></i>
          Spells
        </NavLink>
        <NavLink to="/books" className={({ isActive }) => `sidebarLink ${isActive ? 'sidebarLinkActive' : ''}`}>
          <i className="fa-solid fa-book"></i>
          Books
        </NavLink>

      </section>
      <hr />
      <section>
        <div className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
          <i style={{ marginRight: '5px' }} className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </section>
    </aside>

  )
}