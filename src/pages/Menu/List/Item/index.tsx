import styles from './Item.module.scss'
import items from '../items.json'

type ItemProps = typeof items[0]

export default function Item(props: ItemProps) {
  const { title, description, category, size,  serving, price } = props 

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src="" alt={title} />
      </div>

      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>

        <div className={styles.item__tags}>
          <div className={styles.item__category}>{category.label}</div>
          <div className={styles.item__size}>{size}g</div>
          <div className={styles.item__serving}>Serve {serving} pessoa{serving > 1 ? 's' : ''}</div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}