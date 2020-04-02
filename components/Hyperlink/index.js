import Link from 'next/link';
import styles from './Hyperlink.module.css';
function LinkHeader() {
  return (
    <div className={styles.header}>
        <h1 className={styles.Name}><u>Pokemon Search Bank</u></h1>
        <Link href="/pokemonName" ><a className={styles.navlink} >Pokemon Name</a></Link>
        <Link href="/pokemonId" ><a className={styles.navlink}>Pokemon Id</a></Link>
    </div>
  );
}

export default LinkHeader;