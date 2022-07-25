import React, { useState } from 'react';
import axios from "axios";
import TableData from './TableData';
import Button from 'react-bootstrap/Button';

const Home = () => {
  var [data, setData] = useState(null);
  var [error, setError] = useState(false);
  async function getData() {
    try {
      let response = (await axios.get('http://localhost:8080/user/get-details')).data;
      console.log(response);
      console.log(response.length);
      console.log(typeof (response));
      setData(response)

    } catch (error) {
      console.log(`Error getting details: ${error}`);
      setError(true);
    }

  }

  return (
    <main className='Home'>
      <Button variant="info" onClick={getData}>Get Users</Button>
      {error ? 'Error fetching records. Please try again later'
        :
        data ?
          <TableData data={data} />
          :
          <span>No data to display</span>
      }
    </main>
  )
}

export default Home;
