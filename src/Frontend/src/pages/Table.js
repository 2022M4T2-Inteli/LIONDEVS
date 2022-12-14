import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from "../components/Table_Home";
import NavigationBar from '../components/navbar';

function TabelaDados() {

  return (
    <>
      <NavigationBar />
        <DataTable/>
    </>
  );
}
export default TabelaDados;