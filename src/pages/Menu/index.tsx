import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/menu/logo.svg'
import Search from './Search'
import { useState } from 'react'
import Filters from './Filters'

export default function Menu() {
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilterValue] = useState<number | null>(null)

  return (
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>The house of the code and pasta</div>
      </header>

      <section className={styles.content}>
        <h3 className={styles.content__title}>Menu</h3>
        
        <Search
          value={searchValue}
          setValue={setSearchValue}
        />

        <div className={styles.menu__filters}>
          <Filters
            value={filterValue}
            setValue={setFilterValue}
          />
        </div>
      </section>
    </main>
  )
}