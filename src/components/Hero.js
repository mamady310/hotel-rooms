import React from 'react'

export default function Hero({children, hero}) {
    return (
        <Header className={hero}>
            {children}
        </Header>
    )
}
