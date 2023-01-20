export const setTokenCookie = (result: string ) : void => {
  fetch("/api/loggin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result)})

}

