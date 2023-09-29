import React ,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
const MaybeShoeNavbar=({children})=>{
const location=useLocation();
const [shoeNavBar,setShowNavBar]=useState(false);
useEffect(()=>{
console.log('this is location:',location)
if(location.pathname=='/' ||location.pathname=='/login'||location.pathname=='/registration'){
    setShowNavBar(false)
}else{
    setShowNavBar(true)
}
},[location])

return(
    <div>{shoeNavBar && children }</div>
)
}
export default MaybeShoeNavbar