import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 80%;
  margin-left: 70px;
`

export const ViewButton = styled.button`
  border-radius: 2px;
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(150, 150, 150, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 16px;
  background-color: white;
`
