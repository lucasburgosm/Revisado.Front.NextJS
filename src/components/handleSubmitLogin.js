// Defines an async function to handle login form submission
const handleSubmitLogin = async (event, url, userLogin, register = false) => {

  event.preventDefault(); // Prevents the form from submitting

  try {
    // If the user is registering, checks that the password and password confirmation match
    if(register){
      if(event?.target?.password?.value !== event?.target?.passwordComfirm?.value) {
        throw new Error("Password must match") }
    } 

    // Creates an object with the form data
    const data =  {
      email: event?.target?.email?.value,
      password: event?.target?.password?.value,
      name: event?.target?.name?.value,
    }

    // Defines a function to create the options object for the fetch request
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

    // Sends a POST request with the form data to the provided url and receives a JSON response
    const response = await fetch(url, options(data))
    const result = await response.json() 

    // If the response status is between 400 and 600, throws an error with the response message
    if( response.status >= 400 && response.status < 600) { 
      console.log("error al intentar loggearse")
      throw new Error(result.msg)}  
    else {
        // If the login is successful, sends a POST request with the result data and sets the token and username in the session storage
        await fetch("/api/loggin", options(result));
        window.sessionStorage.setItem('token',`Bearer ${result.token}`);
        window.sessionStorage.setItem('userName',result.user);
        userLogin.setToken(window.sessionStorage.token)
        userLogin.setUserName(window.sessionStorage.userName)
        alert(`${window.sessionStorage.userName} Log in exitoso!`)
        window.location.replace("/")
    }
  }
  // Catches any errors and shows an alert with the error message
  catch(error){ 
    alert(`${error}`)}
  }

// Exports the function to be used in other modules
export default handleSubmitLogin;
