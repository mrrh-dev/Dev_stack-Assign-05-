import { Suspense } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Techstack from './components/Techstack';
import type { Stacktypes } from './components/types/Stacktypes';
import Footer from './components/Footer';

function App() {
  const promisefetchdata = async (): Promise<Stacktypes[]> => {
    const res = await fetch('/public/data.json');
    const data = await res.json();
    return data;
  };
  const fetchdata = promisefetchdata();
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Stack Loading...</h1>}>
        <Techstack fetchdata={fetchdata}></Techstack>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
