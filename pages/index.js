import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Home({articles}) {  

  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        <Head>
          <title>NewsApp</title>
          <meta name="description" content="newsapp - the best app to read news" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {articles.length === 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <Image alt={'Image for the article ${article.title}'} src={article.urlToImage} width={450} height={300} />
            <h2>{article.title}</h2>
            <p>
              {article.description}
            </p>
          </div>
        ))}

        </div> 
    </PageLayout>
  )
}

// N requests --> se ejecuta N veces
// para datos q necesitas q sean muy live
// o porq tiene demasiados datos dinamicos

// Este método se ejecuta en el servidor, pero también se ejecuta en el cliente a veces
// export async function getServerSideProps(context) {
//   const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-10-24&to=2022-10-24&sortBy=popularity&apiKey=2f86320fc2dc401695497c36bc5cf37a')
      
//   const {articles} = await response.json()
//     return {
//       props: {
//         articles
//       }
//     }
// }


// N requests --> se ejecuta 1 vez en build time (o para refrescar la página)
export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-10-24&to=2022-10-24&sortBy=popularity&apiKey=2f86320fc2dc401695497c36bc5cf37a')
      
  const {articles} = await response.json()
    return {
      props: {
        articles 
      }
    }
}