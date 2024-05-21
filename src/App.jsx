import {observer}
import { useArticleStore } from './stores';
import { Outlet } from 'react-router-dom';

function App() {
  let articleStore = useArticleStore();
  return (
    <>
    <main>
      {articleStore.loading ? <p>Chargement</p> : <Outlet/>}
    </main>
    </>
  );
}

export default observer(App);
