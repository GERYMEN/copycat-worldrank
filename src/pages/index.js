import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout"
import SearchInput from "../components/SearchInput/SearchInput"
import CountriesTable from "../components/CountriesTable/CountriesTable"
import { useState } from "react";
export default function Home({ countries }) {

  const [Keyword, useKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) => {
      country.name.toLowerCase().includes(Keyword) || country.region.toLowerCase().icludes(Keyword) || counrty.subregion.toLowerCase(Keyword)
    }
  )
  const onInputChange=(e)=> {
    e.preventDefault();
    setKeyword[e.target.value.toLowerCase()];
  }

  return (
    <div>
      <Layout>
        <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries:</div>

        <SearchInput placeholder="Filter by Names,Region or SubRegion" 
        onChange={onInputChange}
        />
        </div>
        <CountriesTable countries={countries} />
      </Layout>
      
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};