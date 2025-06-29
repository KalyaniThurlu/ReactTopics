import FlowerImg from "../src/assets/flower.jpg"
import Imagejpg from "../src/assets/image2.jpg"
import Image3 from "../src/assets/image3.jpg"
import Image4 from "../src/assets/image4.jpg"


const ImageGallary=()=>{

    return(
        <div className="d-flex-justfy-content-center-align-items-center" style={{marginLeft:"20%"}}>
          <h1 style={{marginLeft:"30%"}}>hello</h1>
          <img src={FlowerImg}
           alt="flower" width="200" />
           <img src={Imagejpg} alt="image" width="200" height="250" />
           <img src={Image3}
            alt="image3" width="200" height="250" />
            <img src={Image4} alt="image4" width="200"  height="250" />
            
            <div>
            
        
        
           <img src={Imagejpg} alt="image" width="200" height="250" />
           <img src={FlowerImg}
           alt="flower" width="200" />
           <img src={Image4} alt="image4" width="200"  height="250" />
           <img src={Image3}
            alt="image3" width="200" height="250" />
            
            
            </div>
        </div>

        
    )
}
export default ImageGallary
