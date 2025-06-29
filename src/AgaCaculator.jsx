
import { useState } from "react"
const AgeCalculator = () => {
    const [birthYear, setBirthYear] = useState("")
    const [age, setAge] = useState("")
    const ageCalculator = () => {
        if (!birthYear) {
            setAge("enter your age")
            return
        }
        const currentYear = new Date().getFullYear()
        const calculateAge = currentYear - birthYear
        setAge(`your age${calculateAge}`)
    }
    return (
        <div>
            <input type="text" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
            <button onClick={ageCalculator}>ageCalculator</button>
            <h1>{age}</h1>
        </div>
    )
}
export default AgeCalculator