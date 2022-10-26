import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
    render() {
        const {cryptoData} = this.props
        return (
            <div className="bg-container">
                <h1 className="heading">B I T C O I N</h1>
                <div className="img-crypto-currency-container">
                    <img src="https://i.postimg.cc/wj0h11Dj/crypto-currency-g4d37ce263-1920.jpg" alt="Cryptocurrency Tracker" className="crypto-img"/>
                </div>
                <div className="currency-container-center">
                    <div className="currencies-container">
                        <div className="upper-items-currency">
                            <p className="coin-type">Coin Type</p>
                            <div className="inner-currency-container-usd-euro">
                                <p className="currency-usd-euro">USD</p>
                                <p className="currency-usd-euro">EURO</p>
                            </div>
                        </div>
                        <ul>
                            {cryptoData.map(eachCurrency => ( 
                            <CryptocurrencyItem
                            currency={eachCurrency}
                            key={eachCurrency.id}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default CryptocurrenciesList