
const  handleSubmitLogin = async (event, url, userLogin, register = false) => {

  event.preventDefault();
    try {
      if(register){
        if(event?.target?.password?.value !== event?.target?.passwordComfirm?.value) {
          throw new Error("Password must match") }
      } 
      const data =  {
        email: event?.target?.email?.value,
        password: event?.target?.password?.value,
        name: event?.target?.name?.value,
      }
      const options = (data) => { 
        return { 
          method: 'POST',
          credentials: 'include',
          headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),
        }
      }
      const response = await fetch(url, options(data))
      const result = await response.json() 
      
        if( response.status >= 400 && response.status < 600) { 
          console.log("error al intentar loggearse")
          throw new Error(result.msg)}  
        else {
            await fetch("/api/loggin", options(result));
            window.sessionStorage.setItem('token',`Bearer ${result.token}`);
            window.sessionStorage.setItem('userName',result.user);
            userLogin.setToken(window.sessionStorage.token)
            userLogin.setUserName(window.sessionStorage.userName)
            alert(`${window.sessionStorage.userName} Log in exitoso!`)
            window.location.replace("/")
    }
  }
   catch(error){ 
    alert(`${error}`)}
  }



  export default handleSubmitLogin;
