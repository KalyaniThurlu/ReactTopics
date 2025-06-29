import axios from "axios"
import { useEffect, useState } from "react"



const GetApi = () => {
    const [items, setItems] = useState([])
    const [msg, setMsg] = useState("")
    useEffect(() => {
        axios.get("https://api.restful-api.dev/objects")
            .then((res) => {
                console.log(res.data)
                setItems(res.data)
                setMsg("ddd")
            }).catch((error) => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            <h1>this is get api</h1>
            <p>{msg}</p>

            <table border="1">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>id</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default GetApi