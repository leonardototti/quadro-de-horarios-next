import Head from 'next/head'
import Link from 'next/link'

import Container from 'react-bootstrap/Container';

import * as styles from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"/>

        <meta name="title" content="Quadro de Horários - Unifil"/>
        <meta name="description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quadro-de-horarios.vercel.app"/>
        <meta property="og:title" content="Quadro de Horários - Unifil"/>
        <meta property="og:description" content="Um site desenvolvido para ajudar na organização das aulas e os links de acesso dos cursos de Ciências da Computação e Engenharia de Software."/>
        <meta property="og:image" content="https://quadro-de-horarios.vercel.app/favicon.png"/>
        
        <title>Quadro de Horários - Unifil</title>
      </Head>
      <span className="background-text"><span>Escolha</span> <span>seu</span> <span>Curso</span></span>
      <main>
        <Container>
          <section>
            <styles.Logo src="/logo-unifil.png" width="150px" height="auto" alt="Logo Unifil"></styles.Logo>
            <div className="content js-tilt">
              <styles.Title>Escolha seu curso</styles.Title>
              <styles.SubTitle>Clique em um dos botões para acessar o respectivo quadro de horários.</styles.SubTitle>

              <styles.ButtonsContainer className="row">
                <Link href="/ciencias">
                  <styles.ButtonCourse>Ciências da Computação</styles.ButtonCourse>
                </Link>
                <Link href="/engenharia">
                  <styles.ButtonCourse outline>Engenharia de Software</styles.ButtonCourse>
                </Link>
              </styles.ButtonsContainer>
              <styles.CourseIcon width="auto" height="65%" src="/icon.png" alt="Unifil"></styles.CourseIcon>
            </div>
            <p className="copyright">Desenvolvido por <a target="_blank" rel="noreferrer noopener" href="https://github.com/leonardototti">Leonardo Totti</a></p>
          </section>
        </Container>
      </main>
    </>
  )
}
