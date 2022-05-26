import filters from './filters.json'
import styles from './Filters.module.scss'

type IFilter = typeof filters[0]

export default function Filters() {

  function selectFilter(filter: IFilter) {

  }

  return (
    <div className={styles.filters}>
      {filters.map(f => (
        <button
          className={styles.filters__filter}
          key={f.id}
          onClick={() => selectFilter(f)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}