import { useState } from 'react';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import './App.css';
import Tabs from './components/Tabs';



setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/');

function App() {
  return (
    <div>
      <Tabs />
    </div>
  );
}

export default App;
