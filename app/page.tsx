'use client';

import Link from 'next/link';
import './page.scss';
import { useEffect, useState } from 'react';
import { verifyUserToken } from '@/scripts';
import { Product, User } from '@/types';
import { IoSearch, IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { ProductItem } from '@/components/product-item/item';
import CopyrightFooter from '@/components/copyright-footer/copy-footer';

export default function Home() {
  const [loggedUser, setLoggedUser] = useState<false | User>(!1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const loggedUser = await verifyUserToken();

      setLoggedUser(loggedUser);

      const res = await fetch("http://localhost:3000/products");
      const resProducts = await res.json();

      setProducts(resProducts);
    })();
  }, []);

  return <main className="home-page">
    <header className='home-header'>
      <article className='header-content'>
        <h1 className="header-title">E-Eco</h1>
        <ul className='links-list'>
          <div className='product-search'>
            <label htmlFor='search-product'>
              <IoSearch />
            </label>
            <input type='text' className='search-product'
              onChange={ev => setSearch(ev.target.value)}
              id='search-product' placeholder='Pesquisar produtos' />
          </div>
          <li className='link-header'>
            <Link href={'/donate'}>Doar</Link>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
  teste
}
