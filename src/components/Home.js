import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import useBitfinex from '../hooks/useBitfinex';


const Home = () => {
    const BTCUSD = useBitfinex('BTCUSD')
    const BTCEUR = useBitfinex('BTCEUR')
    const ETHUSD = useBitfinex('ETHUSD')
    const ETHEUR = useBitfinex('ETHEUR')
    const EOSUSD = useBitfinex('EOSUSD')
    
    const currencies = [BTCUSD, BTCEUR, ETHUSD, ETHEUR, EOSUSD]

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
                    {currencies.map((currency, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{currency.symbol}</td>
                            <td>{currency.dailyChange}%</td>
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