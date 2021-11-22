import React from 'react'
import Layout from "../components/Layout/Layout"
import Banner from "../components/pageComponent/about/Banner"
import History from '../components/pageComponent/about/History'

export default function about() {
    return (
        <Layout>
            <Banner />
            <History />
        </Layout>
    )
}

