
import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="Telephone" width="32" height="32" />
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>COMPRE AGORA!</div>
                <div className={styles.text}>(83) 99999-9999</div>
            </div>
        </div>

        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Páginal Inicial</li>
                <li className={styles.listItem}>Produtos</li>
                <li className={styles.listItem}>Menu</li>
                <Image src="/img/logo.png" alt="logo" width="160" height="69" />
                <li className={styles.listItem}>Eventos</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contato</li>
            </ul>
        </div>

        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt="logo" width="30" height="30" />
                <div className={styles.counter}>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar