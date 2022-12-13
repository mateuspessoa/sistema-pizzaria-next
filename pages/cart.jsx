import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  // This values are the props in the UI
  const amount = "2";
  const currency = "BRL";
  const style = { layout: "vertical" };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

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
            {cart.products.map((prodcut) => (
              <tr className={styles.tr} key={prodcut._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.imgP}
                      src={prodcut.img}
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </td>
                <td className={styles.nameContainer}>
                  <span className={styles.name}>{prodcut.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {prodcut.extras.map((extra) => (
                      <span className={styles.extras} key={extra._id}>
                        {extra.text}
                      </span>
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
                  <span className={styles.total}>
                    R$ {prodcut.price * prodcut.quatity}
                  </span>
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
          <PayPalScriptProvider
            options={{
              "client-id": "test",
              components: "buttons",
              currency: "BRL",
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Cart;
