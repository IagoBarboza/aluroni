import React from "react"
import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg'

interface SearchProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ value, setValue }: SearchProps) {
  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search"
      />
      <CgSearch 
        size={20}
        color="#4C4D5E"
      />
    </div>
  )
}