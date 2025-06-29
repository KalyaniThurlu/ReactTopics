import axios from "axios"
import { useEffect, useState } from "react"

const GetApi = () => {
    const [items, setItems] = useState([])
    const [msg, setMsg] = useState("")

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then((res) => {
                console.log(res.data)
                setItems(res.data.data)
                setMsg("get data")
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>

            <h1>hello</h1>
            {msg}
            <ul>


                {items.map((item) => (
                    <li key={item.id}>
                        {item.first_name}
                        {item.last_name}
                    </li>
                ))
                }
            </ul>

        </div>
    )
}
export default GetApi