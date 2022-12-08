import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="pizza" width="250" height="250" />
        <h1 className={styles.title}>MUÇARELA</h1>
        <span className={styles.price}>R$ 35,90</span>
        <p className={styles.desc}>A melhor pizza de muçarela da cidade</p>
    </div>
  )
}

export default PizzaCard