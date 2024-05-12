import { useState, useEffect } from 'react';

function UseLocalStorage(key, valorInicial) {
  
  // Estado para almacenar el valor actual
  const [valor, setValor] = useState(valorInicial);

  // Actualiza el localStorage cuando el valor cambia
  useEffect(() => {
    localStorage.setItem(key, valor);
  }, [key]);

  // Función para actualizar el valor
  const actualizarValor = (nuevoValor) => {
    setValor(nuevoValor);
  };

  // Función para eliminar el valor
  const removerValor = () => {
    localStorage.removeItem(key);
    setValor(valorInicial);
  };

  return [valor, actualizarValor, removerValor];
}

export default UseLocalStorage;
