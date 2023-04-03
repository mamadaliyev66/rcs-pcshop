import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import {Routes,Route,useParams} from "react-router-dom"
import EhtiyotQismlar from "./EhtiyotQismlar";
import PageLink from "../components/PageLink"
import AdminPanel from "./AdminPanel";
import AddPC from "./AddPC";
import AddProds from "./AddProds";
import AddEQ from "./AddEQ";
import AddEQI from "./AddEQI";
function Pages() {

        return (
          
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/ehtiyot-qismlar" element={<EhtiyotQismlar />} />
                <Route path="/adminPanel" element={<AdminPanel />} />
                <Route path="/addpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasaddpcaddpcasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdasdkbasdasjhdbkajshdbasfdasdfdasdsdf123123nmbsndbf13ke23easdasdd" element={<AddPC />} />
                <Route path="/asdasdahdbaasdhkjbasdjhfaskdjhfkasdhdfsadfbbbvxcnmvxmcnvbasdmcnvbxcnvbhasdasdxcvasdasdasdasasasd" element={<AddProds/>}/>
                <Route path="/aasdjkdghjsdfhjsdfgjkjkhgdasdjbnnjakshdgk731y9asddfv1u23127889172738ysdtfagjsydt7i23t835gsdhgfi276t4918y29y129yhgsdfat823" element={<AddEQ/>}/>
                <Route path="/qwertyuiop123456asdfghjkl67890zxcvbnmasdsd8fsa7d8f8avb7afd9a76sdfvsa98d98svkjzhkgjfuyasd56f7s58s7da8f87ashvyd56as976d498236gh1gj82639" element={<AddEQI/>}/>
                <Route path=":page" element={<PageLink />} />

              </Routes>
  
    )
  }
  
  export default Pages