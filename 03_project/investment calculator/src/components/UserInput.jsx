export default function UserInput({ onChangeData, formData }) {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial">initial investment</label>
                        <input
                            onChange={(event) => onChangeData('initialInvestment', event.target.value)}
                            value={formData.initialInvestment}
                            type="number"
                            id="initial" />
                    </p>
                    <p>
                        <label htmlFor="annual">annual investment</label>
                        <input
                            onChange={(event) => onChangeData('annualInvestment', event.target.value)}
                            value={formData.annualInvestment}
                            type="number"
                            id="annual" />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected">expected return</label>
                        <input
                            onChange={(event) => onChangeData('expectedReturn', event.target.value)}
                            value={formData.expectedReturn}
                            type="number"
                            id="expected" />
                    </p>
                    <p>
                        <label htmlFor="duration">duration</label>
                        <input
                            onChange={(event) => onChangeData('duration', event.target.value)}
                            value={formData.duration}
                            type="number"
                            id="duration" />
                    </p>
                </div>
            </div >
        </>
    )
}