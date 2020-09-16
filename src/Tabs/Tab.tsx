import React, { FunctionComponent } from 'react'
import clsx from 'clsx';
import styles from './tabs.module.scss'

export interface Props {
  id: string
  index?: number
  selectedIndex: number
  label: string
  onClick?: Function | null
  onKeyDown?: Function | null
}

const Tab: FunctionComponent<Props> = ({ id, onClick, onKeyDown, selectedIndex, index, label }) => {
  const isSelected = index === selectedIndex;

  return (
    <li className="tabs__tab-list-item" role="presentation">
      <a
        aria-controls={id}
        aria-selected={isSelected}
        className={clsx(styles['tab-item'], isSelected && styles['active'])}
        href={`#${id}`}
        role="tab"
        tabIndex={isSelected ? 0 : -1}
        // @ts-ignore
        onClick={onClick}
        // @ts-ignore
        onKeyDown={onKeyDown}
        index={index}
      >
        {label}
      </a>
    </li>
  )
}

export default Tab
