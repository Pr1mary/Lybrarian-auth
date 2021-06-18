# Lybrarian-auth
Authorization services for lybrarian app

## api documentation

rest api documentation for authorization services in lybrarian

### Login path

This path use to call login method on api, it will verify if the account is on the database then it will return a status and token if success or it will return a status and its message.

path: */login/*

method: **POST**

body:

```
{
    usr: String
    pss: String
}
```
return (success):
```
{
    status: "OK"
    token: String
}
```
return (failed):
```
{
    status: "ERROR"
    msg: String
}
```

### Register path

This path is use to call register method, it will add the user data to the database that can be use for login then return status and message wether the registration process is success or failed.

path: */register*

method: **POST**

body:
```
{
    fullname: String
    username: String
    email: String
    password: String
    role: String
    timestamp: Date
}
```
return:
```
{
    status: "OK" || "ERROR"
    msg: String
}
```

### Auth path

This path is use to call auth method, it will verify if the token is legit or not and return status and token if success or status and message if failed.

path: */auth/*

method: **POST**

send:
```
{
    token: String
}
```
return (success):
```
{
    status: "OK"
    token: String
}
```
return (failed):
```
{
    status: "ERROR"
    msg: String
}
```
