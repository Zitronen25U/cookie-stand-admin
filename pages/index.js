import Head from 'next/head'
import Header from '../modules/header'
import Form from '../modules/form'
import FormOutput from '../modules/reportTable'
import {useState} from 'react'
import Footer from '../modules/footer'


export default function Home() {

  const [stand, setStand] = useState({ "status": "pending" });
  
  function submitHandler(event) {
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.minCustomers = parseInt(event.target.minCustomers.value);
    standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
    standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

    setStand(standInfo);
}    


  return (
    <div>
      <Head>
        <Header />
      </Head>
      <div>
        <Form onSubmit={submitHandler} className="p-3 mx-auto rounded-lg bg-green-250 w-max"/>
      </div>]
      <div>
      <FormOutput />
      </div>
      <Footer />

    </div>
  )
}
