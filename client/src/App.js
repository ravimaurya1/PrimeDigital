import SNB from './container/snb';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SNB/>}/>
    </Routes>
  );
}

export default App;
