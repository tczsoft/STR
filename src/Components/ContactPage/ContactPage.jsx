import React from 'react'
import Contact from '../../shared/Components/Contact/Contact'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Venba Boutique | Custom-Made Sarees & Kurtis - Affordable, Stylish & Perfect Fit</title>
        <meta name="description" content="Discover beautifully crafted sarees and kurtis at Venba Boutique, Villupuram. Get customized designs tailored to your size and style at affordable prices. Shop now for the perfect ethnic wear!" />
        {/* <script type="application/ld+json">{JSON.stringify(schemaData)}</script> */}
      </Helmet>
      <section className='py-14'>
        <Contact />
      </section>
    </>
  )
}
