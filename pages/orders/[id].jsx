import styles from "../../styles/Order.module.css"
import Image from "next/image"
import axios from "axios"

const Order = ({ order }) => {
    const status = 0;

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
                                <span className={styles.id}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.name}>{order.customer}</span>
                            </td>
                            <td>
                                <span className={styles.address}>{order.address}</span>
                            </td>
                            <td>
                                <span className={styles.total}>R$ {order.total}</span>
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
                        <b className={styles.totalTextTitle}>Subtotal:</b>R$ {order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$ {order.total}
                    </div>
                    <button disabled className={styles.button}>PAGO</button>
                </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
      props: { order: res.data },
    };
  };

export default Order