function check(form)
{
if(form.username.value == "antony" && form.pwd.value === "1234")
{
    alert ("Login successfully");
    window.location = "userhomepage.html"; 
    return false;
}
else if(form.username.value == "kelvinkyalo" && form.pwd.value === "56789")
{
    window.location = "userhomepage.html"; 
    return false;
}
else if(form.username.value == "george" && form.pwd.value === "0000")
{
    window.location = "userhomepage.html"; 
    return false;
}
else if(form.username.value == "brenda" && form.pwd.value === "5555")
{
    window.location = "userhomepage.html"; 
    return false;
}
else
{
    alert(" Access denied")
    return false;
}
}