/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
 const {user}=useSelector(state=>state.user)
 if(user){
   if(user.admin){
       return children
   }else{
       return <Navigate to={'/'}/>
   }
 }else{
     return <Navigate to={'/'}/>
 }
}

export default ProtectedRoute
