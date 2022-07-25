import React, { useEffect, useState } from 'react';
import axios from "axios";
const Home = () => {
  var [data, setData] = useState(null);
  var [error, setError] = useState();
  async function getData() {
    try {
      let response = (await axios.get('http://localhost:8080/user/get-details')).data;
      console.log(response);
      console.log(response.length);
      console.log(typeof(response));
      setData(response)

    } catch (error) {
      console.log(`Error getting details: ${error}`);

    }

  }

  return (
    <main className='Home'>
      <button onClick={getData}>Get Users</button>
      {data ?
        ((<table>
          <thead>
            <th>Team Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>URL</th>
          </thead>
        </table>)(
          data.map(user => (
            <tr key={user._id}>
              {/* <td>user.team_details.team_name</td> */}
              <td>user.full_name</td>
              {/* <td>user.email</td>
              <td>user.number</td>
              <td>user.city</td>
              <td>user.url</td> */}
            </tr>
          ))
        )) :
        'No data to display'
      }
    </main>
  )
}

export default Home;
