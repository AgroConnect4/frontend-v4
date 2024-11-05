import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebaseConfig'

const Admin = () => {
    const [isAdmin, setIsAdmin]= useState(false);

    useEffect(()=>{
        const checkAdminClaim= async ()=>{
            const user = auth.currentUser;
            if(user){
                const idTokenResult = await user.getIdTokenResult();
                setIsAdmin(idTokenResult.claims.admin);
            }
        }
        checkAdminClaim();
    },[])
    
  return (
    <div>Pagina do administrador:</div>
    {isAdmin ? <p>Bem viado administrador!!</p>: <p>Vc não tem as credenciais para acessar a parte do adm</p>}
  )
}

export default Admin