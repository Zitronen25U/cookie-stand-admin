import Head from 'next/head'
import Header from './header'
import Form from './form'
import FormOutput from './formOutput'


export default function Home() {
  return (
    <div>
      <Head>
        <Header />
      </Head>
      <div>
        <Form className="bg-green-250 p-3 w-max mx-auto rounded-lg"/>
      </div>]
      <div>
      <FormOutput />
      </div>
     
      <footer className="bg-green-200 text-large px-4 py-2">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}
