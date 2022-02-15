import { useState } from 'react';

// componentes do site
import { FormularioImposto } from '../components/formulario-imposto';
import { ImagensContainer } from '../components/imagens-container';
import { Resultado } from '../components/resultado';

import '../styles/app.css';

function App() {
  const [resultado, setResultado] = useState(0);

  return (
    <main>
      {(resultado === 0 || !resultado) && (
        <FormularioImposto setResultado={setResultado} />
      )}

      {resultado !== 0 && (
        <Resultado resultado={resultado} setResultado={setResultado} />
      )}

      <ImagensContainer />
    </main>
  );
}

export default App;
