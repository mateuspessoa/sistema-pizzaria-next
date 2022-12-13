import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const amount = cart.total;
  const currency = "BRL";
  const style = { layout: "vertical" };

  const dispatch = useDispatch();

  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          onApprove={async function (data, actions) {
            const details = await actions.order.capture();
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              total: cart.total,
              method: 1,
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
          {open ? (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AcFxqL5Xgp68AgqfsxVPUKSpmM3DkkaBpfTkXi5QE2J6ngggsFWybS_PrEPACF0LRNT6YCVryHPRouYr",
                components: "buttons",
                currency: "BRL",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              COMPRAR AGORA!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
