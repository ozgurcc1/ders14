import React from 'react';
import Todos from './Todos';

const cokZamanAlanFonksiyon = (num) => {
    
  console.log("Hesaplama yapılıyor...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const hesaplamaSonucu = React.useState(()=>  cokZamanAlanFonksiyon(sayac), [todos]);

  const increment = () => {
    sayacGuncelle( (oncekiSayac) => oncekiSayac + 1 ); //!!!!!!
  };


  const addTodo = React.useCallback( () => {
    let saniye = new Date().getSeconds();
    setTodos( (oncekiDizi) => [...oncekiDizi, "Yapılacak iş "+saniye] ); //!!!!
  }, [] );

  return (
    <>
      <p>Hesapalama Sonucu: {hesaplamaSonucu}</p>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Sayaç: {sayac}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
