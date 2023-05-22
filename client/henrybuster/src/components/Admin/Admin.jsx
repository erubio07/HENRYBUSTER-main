import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Sidebar';
import { useState } from 'react';
import HomeAdmin from './HomeAdmin';

function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
        )}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col'>
          <HomeAdmin Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;




