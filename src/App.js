import Header from "./header/header";
/* import "/App.css"; */

function App() {
  return (
    <div>
      <haeder style={{ display: "flex", justifyContent: "center" }}>
        <Header></Header>
      </haeder>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <figure>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt=""
          />
          <figcaption>Morty Smith</figcaption>
        </figure>
        <figure>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt=""
          />
          <figcaption>Morty Smith</figcaption>
        </figure>
      </main>
      <footer
        className="footer"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/*  <NavbarLink></NavbarLink> */}
        <div>Home</div>
        <div>Bookmark</div>
        <div>Profil</div>
      </footer>
    </div>
  );
}

export default App;
