import { observer } from "mobx-react";
import { useArticleStore } from "./stores";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  let articleStore = useArticleStore();
  return (
    <>
      <nav>App</nav>
      <main>{articleStore.loading ? <p>Chargement</p> : <Outlet />}</main>
    </>
  );
}

export default observer(App);
