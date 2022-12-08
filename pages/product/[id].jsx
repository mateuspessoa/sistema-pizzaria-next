import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { useState } from "react"

const Product = () => {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "MUÇARELA",
        price: [25.90, 34.90, 55.90],
        desc: "Massa tradicional com molho artesanal de tomate e um delicioso queijo muçarela"
    }


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt="" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>R$ {pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Escolha o tamanho</h3>

            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/img/size.png" layout="fill" alt="tamanho" />
                    <span className={styles.number}>Broto</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/img/size.png" layout="fill" alt="tamanho" />
                    <span className={styles.number}>Média</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/img/size.png" layout="fill" alt="tamanho" />
                    <span className={styles.number}>Grande</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product