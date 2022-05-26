import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api'
import moment from 'moment';
import { ListContainer} from "./style";
import Loading from '../Loading'
// import "../../index.css";

export default function List() {

  const [data, setData] = useState()

  async function loadData() {
    let arrAux = []
    for(let i = 0; i < 50; i++){
      const data = await (await api.get(`/`)).data
      const result = data.results[0]
      arrAux.push(result)
    }
    setData(arrAux)
  }
  
  useEffect(() => {
    loadData();
  },[])

  return (
    <ListContainer>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        {data ? data.map((data) => {
          return(
            <tbody>
              <tr key={data.id.value}>
                <td> { data.name.first } </td>
                <td> { data.gender } </td>
                {/* <td> { data.dob.date } </td> */}
                <td> {moment(data.dob.date).format('DD/MM/YYYY')} </td>

                <td> 
                  <viewButton >View </viewButton>
                </td>
              </tr>
            </tbody>
          )})
        : null }
      </Table>
      {data ? null : <Loading />}
    </ListContainer>

  )
}

              {/* <td> { data.actions } </td> */}
              {/* botaaao */}