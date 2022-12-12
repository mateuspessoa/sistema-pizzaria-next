import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { useState } from "react"
import axios from "axios"

const Product = ({pizza}) => {

    const [size, setSize] = useState(0)

    


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt="" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>R$ {pizza.prices[size]}</span>
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
            <h3 className={styles.choose}>Escolha ingredientes adicionais</h3>
            <div className={styles.ingredients}>
                <div className={styles.options}>
                    <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                    <label htmlFor="double">Ingredientes em Dobro</label>
                </div>
                <div className={styles.options}>
                    <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
                    <label htmlFor="cheese">Adicional de Queijo</label>
                </div>
                <div className={styles.options}>
                    <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
                    <label htmlFor="spicy">Adicional de Molho Picante</label>
                </div>
                <div className={styles.options}>
                    <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
                    <label htmlFor="garlic">Adicional de Alho</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>
  )
}

export default Product

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        pizza: res.data,
      },
    };
  };