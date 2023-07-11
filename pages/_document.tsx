import { Html, Head, Main, NextScript } from 'next/document';
import styles from './global.module.scss';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{backgroundColor: "#f1f1f3"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}