import classNames from 'classnames'
import React from 'react'
import filters from './filters.json'
import styles from './Filters.module.scss'

interface FiltersProps {
  value: number | null
  setValue: React.Dispatch<React.SetStateAction<number | null>>
}

type IFilter = typeof filters[0]

export default function Filters({ value, setValue }: FiltersProps) {

  function selectFilter(filter: IFilter) {
    if (filter.id === value) setValue(null)
    else setValue(filter.id)
  }

  return (
    <div className={styles.filters}>
      {filters.map(f => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: value === f.id
          })}
          key={f.id}
          onClick={() => selectFilter(f)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}