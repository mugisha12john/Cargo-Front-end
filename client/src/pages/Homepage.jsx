import CallToAction from "../components/CallToAction.jsx"
import Footer from "../components/Footer.jsx"
import Home from "../components/Home.jsx"
import Nav from "../components/Nav.jsx"
import WhatourClientSay from "../components/WhatourClientSay.jsx"
import WhatweDo from "../components/WhatweDo.jsx"
import WhoweAre from "../components/WhoweAre.jsx"
import WhychooseUs from "../components/WhychooseUs.jsx"
function Homepage(){
    return(<>
    <Nav></Nav>
    <Home></Home>
    <WhoweAre></WhoweAre>
    <WhychooseUs></WhychooseUs>
    <WhatweDo></WhatweDo>
    <WhatourClientSay></WhatourClientSay>
    <CallToAction></CallToAction>
    <Footer></Footer>
    </>)
}
export default Homepage;