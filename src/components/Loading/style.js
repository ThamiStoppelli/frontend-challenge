import styled from 'styled-components'

export const Container = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Carregando = styled.div`
  border: 8px solid #f2f2f2;
  border-top: 8px solid #c3cfd9;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 1;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Texto = styled.p`
  font-size: 18px;
  margin-left: 20px;
`
