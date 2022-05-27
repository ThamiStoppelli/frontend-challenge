import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../services/api'
import moment from 'moment';
import { ListContainer, ViewButton, BotaoCarregarDados, TextoBotaoDados, FundoModal, ContainerModal} from "./style";
import Loading from '../Loading'

export default function List() {

  const [data, setData] = useState()
  const [moreData, setMoreData] = useState()
  const [modal, setModal] = useState(false)
  const [oneData, setOneData] = useState(false)

  async function loadData() {
    let arrAux = []
    for(let i = 0; i < 5; i++){
      const data = await (await api.get(`/`)).data
      const result = data.results[0]
      arrAux.push(result)
    }
    setData(arrAux)
  }
  
  useEffect(() => {
    loadData();
  },[])

  async function loadMoreData(){
    let arrAux = [];

    for(let i = 0; i < 5; i++){
      const data = await (await api.get(`/`)).data
      const result = data.results[0]
      arrAux.push(result)
    }
    setMoreData(arrAux)
 }

 function showModal(data) {
  setModal(!modal);
  console.log(data)
  setOneData(data)
}

  return (
    <div>
    <ListContainer >
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
                <td> {moment(data.dob.date).format('DD/MM/YYYY')} </td>
                <td> 
                  <ViewButton onClick={() => showModal(data)}>View </ViewButton>
                </td>
              </tr>
            </tbody>
          )})
        : null }
        </Table>
        {data ? null : <Loading />}   
        <Table striped bordered hover >   
          {moreData ? moreData.map((data) => {
            return(
              <tbody>
                <tr key={data.id.value}>
                  <td> { data.name.first } </td>
                  <td> { data.gender } </td>
                  <td> {moment(data.dob.date).format('DD/MM/YYYY')} </td>
                  <td> 
                    <ViewButton onClick={() => showModal(data)}>View </ViewButton>
                  </td>
                </tr>
              </tbody>
            )})
          : null }
        </Table>
      <BotaoCarregarDados onClick={loadMoreData}>
        <TextoBotaoDados>Carregar mais pacientes</TextoBotaoDados>
      </BotaoCarregarDados>
    </ListContainer>
    {modal ? (
      <FundoModal onClick={() => showModal()}>
        <ContainerModal>
          <p>Imagem: {}</p>
          <p>Nome completo: {oneData.name.first} {oneData.name.last}</p>
          <p>Email: {oneData.email}</p>
          <p>Gênero: {oneData.gender}</p>
          <p>Data de naascimento: {moment(oneData.dob.date).format('DD/MM/YYYY')}</p>
          <p>Telefone: {oneData.phone}</p>
          <p>Nacionalidade: {}</p>
          <p>Endereço: {}</p>
          <p>ID (número de identificação): {}</p>
          <p>URL para compartilhamento: {}</p>
        </ContainerModal>
      </FundoModal>)
    : null}
    </div>

  )
}