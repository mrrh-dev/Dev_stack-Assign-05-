import { Suspense } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Techstack from './components/Techstack';
import type { Stacktypes } from './components/types/Stacktypes';
import Footer from './components/Footer';

const promisefetchdata = async (): Promise<Stacktypes[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  //const fetchdata = promisefetchdata();
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Stack Loading...</h1>}>
        <Techstack fetchdata={promisefetchdata()}></Techstack>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
