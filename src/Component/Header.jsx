import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
//  const [logindata, setLogin] = useState([])

const history = useNavigate ()

 const navbar = useNavigate ();

 const  handleItem =()=>{
    navbar('/Item')
 }
 const handleBilling =() =>{
    navbar('/Billing')
 }

 const userLogout=()=>{
    // localStorage.removeItem('userlogin')
    history("/Login")
 }
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MR Sagar Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <button className='btn btn-danger'onClick={userLogout}>log out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    
     <div className="d-grid gap-5 d-md-block">
  <button className="btn btn-primary mx-5" type="button" onClick={handleItem}>Item</button>
    <button className="btn btn-primary" type="button"onClick={handleBilling}>Billing</button>

</div>
</div>

    )
}