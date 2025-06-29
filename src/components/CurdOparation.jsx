
import { useState } from "react"
const CurdOperation = () => {
    const [items, setItems] = useState([])
    const [inputs, setInputs] = useState("")
    const [updateItem, setUpdatedItem] = useState(null)
    const addData = () => {
        if (updateItem !== null) {
            const updatedItems = items.map((item, index) =>
                index === updateItem ? item : inputs
            )
            setItems(updatedItems)
            setUpdatedItem(null)

        } else {
            setItems([...items, inputs])
        }
        setInputs("")
    }
    const updated = () => {
        setInputs(items)
        setUpdatedItem()
    }
    const deleted = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }

    return (
        <div>
            Name:  <input type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} />
            <button onClick={addData}>{updateItem !== null ? "updated" : "Add"}</button>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}
                            <button onClick={() => updated()}>updated</button>
                            <button onClick={() => deleted(index)}>deleted</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default CurdOperation
