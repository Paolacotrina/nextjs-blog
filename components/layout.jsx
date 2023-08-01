import Head from "next/head"
import styles from '../styles/layout.module.css'
import Image from "next/image"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"

const name = 'Poala Cotrina'

export default function Layout({children, title, description, home, name}) {
    console.log(home)
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content="{description}"></meta>
        </Head>
        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name} 99999</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}  6666666
              </Link>
            </h2>
          </>
        )}
      </header>
        <nav> Navbar</nav>
        <main>{children}</main>
        {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
           Back to home
        </Link>
      </div>
    )
      
    

    }
    </div>
   
  )
}

Layout.defaultProps = {
    title: "Next.js | mi sitio web",
    description: "Descripcion de mi sitio web"
}