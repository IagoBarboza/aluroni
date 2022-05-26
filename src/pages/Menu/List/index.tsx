import items from './items.json'
import Item from './Item'
import styles from './List.module.scss'

export default function List() {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <Item key={item.id} />
      ))}
    </div>
  )
}