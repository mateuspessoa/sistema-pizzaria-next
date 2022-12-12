import Image from "next/image"
import styles from "../styles/Cart.module.css"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

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
                    {cart.products.map(prodcut => (
                        <tr className={styles.tr} key={prodcut._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image className={styles.imgP} src={prodcut.img} layout="fill" objectFit="cover" alt="pizza" />
                                </div>
                            </td>
                            <td className={styles.nameContainer}>
                                <span className={styles.name}>{prodcut.title}</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {prodcut.extras.map(extra => (
                                        <span className={styles.extras} key={extra._id}>{extra.text}</span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>R$ {prodcut.price}</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{prodcut.quatity}</span>
                            </td>
                            <td>
                                <span className={styles.total}>R$ {prodcut.price * prodcut.quatity}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>TOTAL DO CARRINHO</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>R$ {cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>R$ {cart.total}
                </div>
                <button className={styles.button}>COMPRAR AGORA!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart