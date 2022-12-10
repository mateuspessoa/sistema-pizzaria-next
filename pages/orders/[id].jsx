import styles from "../../styles/Order.module.css"
import Image from "next/image"

const Order = () => {

    const status = 0

    const statusClass = (index) => {
        
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.undone
    }


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <th>Nº Pedido</th>
                            <th>Cliente</th>
                            <th>Endereço</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.id}>11525554</span>
                            </td>
                            <td>
                                <span className={styles.name}>Mateus Pessoa</span>
                            </td>
                            <td>
                                <span className={styles.address}>AV. Beira Rio, 189, PB</span>
                            </td>
                            <td>
                                <span className={styles.total}>R$ 56.10</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt="status" />
                    <span>Pagamento</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="status" />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width={30} height={30} alt="status" />
                    <span>Preparando</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="status" />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30} alt="status" />
                    <span>A caminho</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="status" />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} alt="status" />
                    <span>Entregue</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="status" />
                    </div>
                </div>
            </div>
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
                    <button disabled className={styles.button}>PAGO</button>
                </div>
        </div>
    </div>
  )
}

export default Order