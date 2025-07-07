
import axios from "axios";
import { useEffect, useState } from "react";

const CustomCounter = () => {
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fetch products
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setItems(res.data.products);
        setMsg("Products fetched successfully!");
      })
      .catch((error) => {
        console.log(error);
        setMsg("Failed to fetch products.");
      });
  }, []);

  // Scroll progress logic
  //   const scrollTop = document.documentElement.scrollTop;
  //   const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   const scrolled = (scrollTop / winHeight) * 100;
  //   setScrollProgress(scrolled);
  // };
  
  // window.addEventListener("scroll", handleScroll);
  
  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollProgress(scrolled);
  };
  
  window.addEventListener("scroll", handleScroll); // ✅ correct event name

  return () => window.removeEventListener("scroll", handleScroll); // ✅ cleanup
}, []);


  return (
    <div>
      {/* Progress bar */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: "5px",
        backgroundColor: "brown",
      }} />

      <div style={{
        backgroundColor: "blue",
        width: "100%",
        height: "80px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h2>This is custom counter</h2>
      </div>

      <div style={{ padding: "20px" }}>
      

        <ol style={{marginLeft:"40%"}}>
          {items.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

}
export default CustomCounter;
