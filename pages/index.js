import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({pizzaList}) {
  useEffect(() => {});

  return (
    <div className={styles.container}>
      <Featured />
      <PizzaList pizzaList = {pizzaList}/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
