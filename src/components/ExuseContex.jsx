import { useContext } from "react";
import { Mycontext } from "./main"
const ExUseContext = () => {
    let num = useContext(Mycontext)
    return (
        <div>
            <h1>{num}</h1>
        </div>
    )
}
export default ExUseContext;