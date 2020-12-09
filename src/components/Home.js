import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


const Home = () => {
    const data = [
        {
            symbol: 'BTCUSD',
            dailyChange: '-5.1%',
            volume: 99068904,
            lastPrice: 3783.9
        },
        {
            symbol: 'BTCUSD',
            dailyChange: '-5.1%',
            volume: 99068904,
            lastPrice: 3783.9
        },
        {
            symbol: 'BTCUSD',
            dailyChange: '-5.1%',
            volume: 99068904,
            lastPrice: 3783.9
        },
        {
            symbol: 'BTCUSD',
            dailyChange: '-5.1%',
            volume: 99068904,
            lastPrice: 3783.9
        },
        {
            symbol: 'BTCUSD',
            dailyChange: '-5.1%',
            volume: 99068904,
            lastPrice: 3783.9
        }
    ]

    return (  
        <Container fluid className="pt-3">
            <Table bordered style={{maxWidth: '960px'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol</th>
                        <th>Daily change</th>
                        <th>Volume</th>
                        <th>Last price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((currency, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{currency.symbol}</td>
                            <td>{currency.dailyChange}</td>
                            <td>{currency.volume}</td>
                            <td>{currency.lastPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
 
export default Home;