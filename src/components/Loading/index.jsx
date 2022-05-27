import React from 'react';
import { Container, Carregando, Texto } from "./style";

export default function Loading() {
  return (
    <Container >
      <Carregando />
      <Texto>Loading more...</Texto>
    </Container>
  )
}