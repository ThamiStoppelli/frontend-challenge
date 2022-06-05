import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 40rem;
  /* margin-left: 70px; */
`

export const ViewButton = styled.button`
  border-radius: 4px;
  width: 80%;
  height: 80%;
  background-color: #dee2e6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`

export const BotaoCarregarDados = styled.button`
  border-radius: 2px;
  width: 220px;
  height: 45px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const TextoBotaoDados = styled.p`
  font-size: 16px;
  margin: auto 0;
`

export const FundoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(109, 124, 136, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 16px;
  background-color: white;
  padding: 10px;
  position: absolute;

  img {
    margin-top: -50px;
    margin-left: 200px;
    margin-bottom: 10px;
    border-radius: 200px;
    width: 100px;
  }
  p {
    padding-left: 20px;
  }
  .closeIcon {
    margin-left: 440px;
    margin-top: -85px;
    width: 30px;
    &:hover {
    cursor: pointer;
  }
  }
`