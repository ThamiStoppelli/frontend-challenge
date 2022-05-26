import styled from 'styled-components'

export const Carregando = styled.div`
  border: 12px solid #f2f2f2;
  border-top: 12px solid #c3cfd9;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  margin: 10px auto;
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
