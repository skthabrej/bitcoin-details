import './index.css'
import {Component} from 'react'

class CryptocurrencyItem extends Component {
    render () {
        const {currency} = this.props
        const {currencyName, usdValue, euroValue, currencyLogoUrl} = currency
        return (
            <li className="currency-item">
                <div className="currency-logo-name-container">
                    <img className="logo-style" src={currencyLogoUrl} alt={currencyName} />
                    <p className="currency-name">{currencyName}</p>
                </div>
                <div className="usd-euro-container">
                    <p className="usd-para">{usdValue}</p>
                    <p className="euro-para">{euroValue}</p>
                </div>
            </li>
        )
    }
}
export default CryptocurrencyItem