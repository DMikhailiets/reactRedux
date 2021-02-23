import { Empty, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import style from './items.module.css'

const Items = ({items}) => {
    return (
        <div className={style.items}>{
            ! items
            ? <Empty/>
            : <>{ items.map((item ) => <Card className={style.item} key={item.id}><Meta title={item.title}/></Card>)}</>
        }</div>
    )
}

export default Items