import Head from 'next/head'
import Banner from '@/comps/Banner'
import Navbar from '@/comps/Navbar'

export default function Home() {
  return (
     
      <div>
       <Navbar/>
       <Head>
         <title> Home page</title>
        
       </Head>
       <Banner/>
       <div>
        <text>hellooo</text>
       </div>

     
       
      </div>
    
  )
}