import Head from 'next/head'
import Link from 'next/link'

import * as styles from '../styles/pages/Error'

export default function Error() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>

        <meta name="title" content="Não encontrado - Quadro de Horários - Unifil"/>
        <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quadro-de-horarios.vercel.app/404"/>
        <meta property="og:title" content="Quadro de Horários - Unifil"/>
        <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
        <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
        
        <title>Não encontrado - Quadro de Horários - Unifil</title>
      </Head>
      <styles.Main>
        <span className="background-text"><span>Não</span> <span>Encontrado</span></span>
        <styles.Image src="/logo-unifil.png"/>
        <styles.Container>
          <styles.Title>Erro 404!</styles.Title>
          <styles.SubTitle>Parece que essa página não existe.</styles.SubTitle>
          <Link href="/">
            <styles.Button>Voltar ao início</styles.Button>
          </Link>
        </styles.Container>
      </styles.Main>
    </>
  )
}
