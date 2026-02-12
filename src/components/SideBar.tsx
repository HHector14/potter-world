export default function SideBar() {
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
      <section>

        <div style={{ backgroundColor: '#bb4d00', color: '#FFF' }}>
          <i className="fa-solid fa-house"></i>
          Home
        </div>
        <div>
          <i className="fa-solid fa-people-group"></i>

          Characters
        </div>
        <div>
          <i className="fa-solid fa-house"></i>
          Houses
        </div>
        <div>
          <i className="fa-solid fa-wand-magic"></i>
          Spells
        </div>
        <div>
          <i className="fa-solid fa-book"></i>
          Books
        </div>

      </section>
      <hr />
      <section>
        <div className="toggle-theme">
          <i style={{ marginRight: '5px' }} className="fa-solid fa-moon"></i>
          Dark Mode
        </div>
      </section>
    </aside>

  )
}