import { useState, useEffect } from 'react';

const useBitfinex = (symbol) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        let chanId

        ws.onopen = () => {
            ws.send(JSON.stringify({
                event: 'subscribe',
                channel: 'ticker',
                symbol
            }))
        }

        ws.onmessage = evt => {
            const msg = JSON.parse(evt.data)

            if (msg.event && msg.event === 'subscribed') {
                chanId = msg.chanId

            } else if (msg.event && msg.event === 'error') {
                console.log(msg.msg)

            } else if (msg[0] && msg[0] === chanId && msg[1] !== 'hb') {
                setData({
                    symbol,
                    dailyChange: msg[1][4],
                    volume: msg[1][7],
                    lastPrice: msg[1][6]
                })
            }
        }

        return () => {
            ws.send(JSON.stringify({
                event: 'unsubscribe', 
                chanId
            }))
        }
    }, [])

    return data
}

export default useBitfinex