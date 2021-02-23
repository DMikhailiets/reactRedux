import React from 'react'
import { Row, Col, Button } from 'antd'
import styles from './styles.module.css'
import { Items } from '../../../components'

const rootComponent = ({data, getData}) => {
    return (
            <Row className={styles.wrapper}>
                <Col span={8}>
                    <div className={styles.buttonWrapper}>
                        <Button type='primary' onClick={ getData }>Get data</Button>
                    </div>
                </Col>
                <Col span={16}>
                    <div className={styles.content}>
                        <Items items={data}/>
                    </div>
                </Col>
            </Row>       
    )
}

export default rootComponent