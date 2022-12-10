import Image from "next/image"
import styles from "../styles/Cart.module.css"

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Produto</th>
                        <th>Nome</th>
                        <th>Adicionais</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="pizza" />
                            </div>
                        </td>
                        <td className={styles.nameContainer}>
                            <span className={styles.name}>MUÇARELA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Ingredientes em Dobro, Molho Picante</span>
                        </td>
                        <td>
                            <span className={styles.price}>R$ 25.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$ 56.10</span>
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="pizza" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>MUÇARELA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Ingredientes em Dobro, Molho Picante</span>
                        </td>
                        <td>
                            <span className={styles.price}>R$ 25.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$ 56.10</span>
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="pizza" />
                            </div>
                        </td>
                        <td className={styles.nameContainer}>
                            <span className={styles.name}>MUÇARELA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Ingredientes em Dobro, Molho Picante</span>
                        </td>
                        <td>
                            <span className={styles.price}>R$ 25.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$ 56.10</span>
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" layout="fill" objectFit="cover" alt="pizza" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>MUÇARELA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Ingredientes em Dobro, Molho Picante</span>
                        </td>
                        <td>
                            <span className={styles.price}>R$ 25.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$ 56.10</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>TOTAL DO CARRINHO</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>R$ 79.90
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>R$ 79.90
                </div>
                <button className={styles.button}>COMPRAR AGORA!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart