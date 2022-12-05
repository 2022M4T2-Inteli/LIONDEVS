import { useState } from 'react';
import NavigationBar from '../services/navbar';
// import axios from "axios"

function Tabela() {
  // Array com os passageiros falsos da API
  const [data, setData] = useState([])
  // Número total de páginas
  const [totalPages, setTotalPages] = useState(1)
  // Número total de passageiros
  const [totalPassengers, setTotalPassengers] = useState(1)
  return (
    <>
    <NavigationBar></NavigationBar>
    <p>Hello</p>
    </>
  );
}
export default Tabela;