import { gql } from "graphql-request";
import { useEffect, useState } from 'react';
import "./App.css";
import DataComponenent from './components/Data/dataComponenent';
import Filters from "./components/filters";
import Pagination from "./components/pagination";
import SearchInput from "./components/search/searchInput";
import Client from "./graphql";

function App() {


  const [variables,setVariables] = useState({
    page:1,
    name:null,
    status:null,
    species:null,
    type:null,
    gender:null
})
const [data, setData] = useState([])
const [totalPage, setTotalPage] = useState(1)
   
async function fetchData() {
  const data= await Client.request(query, variables)
  console.log(data?.characters?.results)
  setTotalPage(data?.characters?.info?.pages?? 1)
  setData(data?.characters?.results?? [])
}

useEffect(() => {
  fetchData()
}, [variables])

  return (
    <div className="App">
      <Filters handleSubmit={fetchData} variables={variables} setVariables={setVariables} />
      <SearchInput handleSubmit={fetchData} variables={variables} setVariables={setVariables} />
  <DataComponenent data={data} variables={variables} setVariables={setVariables} handleSubmit={fetchData}
  />
  <Pagination variables={variables} setVariables={setVariables} totalPage={totalPage} fetchData={fetchData} />
    </div>
  );
}

const query = gql`
query characters(
  $page: Int
  $name: String
  $status: String
  $species: String
  $type: String
  $gender: String
) {
  characters(
    page: $page
    filter: {
      name: $name
      status: $status
      species: $species
      type: $type
      gender: $gender
    }
  ) {
      info {
          count
          pages
      }
      results {
          id
          name
          status
          species
          type
          gender
          image
          created
      }
  }
}
       `;

export default App;
