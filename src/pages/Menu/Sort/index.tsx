import styles from './Sort.module.scss'
import options from './options.json'
import React, { useState } from 'react'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface SortProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function Sort({ value, setValue }: SortProps) {
  const [open, setOpen] = useState(false)
  const sortName = value && options.find(o => o.value === value)?.name

  return (
    <button
      className={classNames({
        [styles.sort]: true,
        [styles['sort--active']]: value !== ''
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sortName || 'Order By'}</span>
      
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      
      <div className={classNames({
        [styles.sort__options]: true,
        [styles['sort__options--active']]: open
      })}>
        {options.map(opt => (
          <div
            className={styles.sort__option}
            key={opt.value}
            onClick={() => setValue(opt.value)}
          >
            {opt.name}
          </div>
        ))}
      </div>
    </button>
  )
}