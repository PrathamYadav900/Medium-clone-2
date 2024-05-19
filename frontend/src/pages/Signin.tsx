import Quotes from "../components/Quotes"
import Auth from "../components/Auth"
const Signin = () => {
  return (
    <div>
    <div className="grid grid-cols-1 lg:grid grid-cols-2">
        <div>
          <Auth type="signin"/>
        </div>
        <div className="hidden lg:block"><Quotes/></div>
  
    </div>
    </div>
  )
}
export default Signin
