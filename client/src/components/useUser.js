
function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  

  const useTokenValidation = () => {
    let isLogged=false;
    if(localStorage.getItem('token')===null){
       isLogged=false;
    }else if((parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now())=== true){
      isLogged= true
    }
    else if((parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now())=== false){
      localStorage.removeItem('token')
      localStorage.removeItem('Nombre')
      isLogged= false
    }
    return isLogged;
    }
    


  
    
 
  
  
  export default useTokenValidation;