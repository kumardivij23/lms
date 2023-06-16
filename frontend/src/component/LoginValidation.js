function Validation(values)
{
    // alert("")
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-z])[a-zA-z0-9]{8,}$/

    if(values.email==="")
    {
        error.email="Name should not be empty"
    }
    else if(!email_pattern.test(values.email))
    {
        error.email="Email Didnt match"
    }
    else{
        error.email=""
    }

    if(values.password === "")
    {
        error.password="password should not be empty"
    }
    else if(!password_pattern.test(values.password))
    {
        error.password="password didnt match"
    }
    else{
        error.password=""
    }

    return error;
}

export default Validation;