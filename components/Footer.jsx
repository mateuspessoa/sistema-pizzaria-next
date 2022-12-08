import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <Image src="/img/bg.png" layout="fill" alt=""/>
        </div>

        <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>NÓS FAZEMOS AS MELHORES PIZZAS DO MUNDO</h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>ENCONTRE NOSSAS PIZZARIAS</h1>
                <p className={styles.text}>
                  1800 AV. Epitacio Pessoa #304.
                  <br /> João Pessoa, PB
                  <br /> (83) 99999-9999
                </p>
                <p className={styles.text}>
                  1800 AV. Epitacio Pessoa #235.
                  <br /> João Pessoa, PB
                  <br /> (83) 99999-9999
                </p>
                <p className={styles.text}>
                  1800 AV. Epitacio Pessoa #482.
                  <br /> João Pessoa, PB
                  <br /> (83) 99999-9999
                </p>
                <p className={styles.text}>
                  1800 AV. Epitacio Pessoa #534.
                  <br /> João Pessoa, PB
                  <br /> (83) 99999-9999
                </p>

            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>HORÁRIO DE ATENDIMENTO</h1>
                <p className={styles.text}>
                  SEGUNDA À SEXTA
                  <br /> 12:00 - 22:00
                </p>
                <p className={styles.text}>
                  SÁBADO E DOMINGO
                  <br /> 12:00 - 00:00
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer