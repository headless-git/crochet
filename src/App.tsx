import { useState } from "react";
import Loading from './components/Loading'
import Intro from './components/Intro'
import Value from './components/Value'
import Story from './components/Story'
import './index.css'
import Footer from './sections/Footer'
import Features from './components/Features'

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loading onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Intro />
          <Value />
          <Story />
          <Features />
          <Footer />
        </>
      )}
    </>
  );
}

export default App