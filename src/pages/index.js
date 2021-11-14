import React from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/pageComponent/home/Banner"
import Section2 from "../components/pageComponent/home/Section2"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Section2 />
    </Layout>
  )
}
