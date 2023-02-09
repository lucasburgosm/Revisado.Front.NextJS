import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import heroImg from '../public/heroImg.png'
import separator1 from '../public/Separator1.svg'



const Home: NextPage = () => {

  return (
    <>
      <div className={styles.Hero}>
        <div className={styles.heroLeft}>
          <div className={styles.sub1}>Compra con<mark style={{ fontWeight: 700, background: 'none' }}>confianza.</mark></div>
          <div className={styles.sub2}>Vende sin<mark style={{ fontWeight: 700, background: 'none' }}>esfuerzo</mark></div>
        </div>
        <Image src={heroImg} alt="heroimg" className={styles.heroImg} ></Image>
      </div>

      <div className={styles.separatorsParent}>
        <Image src={separator1} alt="separator" className={styles.separator} />
        <Image src={separator1} alt="separator" className={styles.separator2} />
      </div>

    </>
  )
}

export default Home

