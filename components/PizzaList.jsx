import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container_btn_add}>
          <button className={styles.btn_add}>Adicionar Pizza</button>
        </div>
        <h1 className={styles.title}>A MELHOR PIZZA DA REGIÃO</h1>
        <p className={styles.desc}>
            Aqui na nossa pizzaria você vai encotrar as pizzas mais saborosas
            da região de João Pessoa. Temos diversos sabores como: mussarela,
            calabresa, frango e muitos outros deliciosos sabores.
        </p>

        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList