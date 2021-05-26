import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Error.module.css'

export default function Error() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="language" content="Portuguese"/>

        <meta name="title" content="Não encontrado - Quadro de Horários - Unifil"/>
        <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quadro-de-horarios.vercel.app"/>
        <meta property="og:title" content="Quadro de Horários - Unifil"/>
        <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
        <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
        
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Não encontrado - Quadro de Horários - Unifil</title>
      </Head>
      <main className={styles.errormain}>
        <span className="background-text"><span>Não</span> <span>Encontrado</span></span>
        <img className={styles.errorimg} src="/logo-unifil.png"/>
        <div className={styles.errorcontainer}>
          <h1 className={styles.errortitle}>Erro 404!</h1>
          <p className={styles.errorsubtitle}>Parece que essa página não existe.</p>
          <Link href="/">
            <button className={styles.errorbutton}>Voltar ao início</button>
          </Link>
        </div>
      </main>
    </>
  )
}
