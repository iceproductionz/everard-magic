import Head from 'next/head'
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import React from "react";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";
import Equipment from "../components/Equipment";
import Filter from "../components/Filter";

export default function Home() {
  return (
      <Container>
          <Header />
          <Navigation />
          <Subscribe />
          <Equipment />
          <hr />
          <Filter />
          <hr />
      </Container>
  )
}
