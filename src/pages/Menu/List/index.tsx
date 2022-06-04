import items from './items.json'
import Item from './Item'
import styles from './List.module.scss'

interface Props {
  search: string
  filter: number | null
  sort: string 
}

export default function List({ search, filter, sort }: Props) {
  return (
    <div className={styles.list}>
      {items
        .filter(item => item.title.toLowerCase().includes(search))
        .filter(item => filter ? item.category.id === filter : true)
        // @ts-expect-error
        .sort((itemA, itemB) => sort === '' ? 1 : itemB[sort] - itemA[sort])
        .map(item => (
          <Item
            key={item.id}
            {...item}
          />
        ))
      }
    </div>
  )
}