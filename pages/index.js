import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {attributes, react as HomeContent} from '../content/home.md'

export default function Home() {
  let {title, cats} = attributes;
  return (
    <div className={styles.container}>
      <Head></Head>

      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
