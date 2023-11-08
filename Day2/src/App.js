import './Assets/css/App.css';
import {User} from 'lucide-react';
const App = () => {
  return (
    <div className="myform">
        <form className="f1">
          <h3 className='reg'><User size={35} color='blueviolet' strokeWidth={1} className='ub'/>REGISTRATION FORM</h3>
          <input type="text" name="name" id="" placeholder='Name' className="fx1"></input>
          <input type="email" name="" id="" placeholder="Email"  className="fx1"/>
          <input type="number" name="" id="" placeholder="Phone"  className="fx1"/>
          <input type="text" name="" id="" placeholder="Username"  className="fx1"/>
          <input type="password" name="" id="" placeholder="Password"  className="fx1"/>
          <input type="submit" value="Register"  className="fx2"/>
        </form>
      </div>
  )
}
export default App;