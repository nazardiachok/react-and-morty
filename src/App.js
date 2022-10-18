import Header from "./header/header";
import Main from "./main/main";
import NavList from "./footer/navbar";

function App() {
  return (
    <div>
      <haeder style={{ display: "flex", justifyContent: "center" }}>
        <Header></Header>
      </haeder>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Main></Main>
      </main>
      <div>
        <NavList></NavList>
      </div>
    </div>
  );
}

export default App;
