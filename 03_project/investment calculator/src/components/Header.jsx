import investImg from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (
        <div id="header">
            <img src={investImg} alt="investment-image" />
            <h1>Investment Calculator</h1>
        </div>
    )
}