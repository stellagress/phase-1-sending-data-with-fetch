// Add your code here

function submitData(userName, userEmail) {



return fetch('http://localhost:3000/users', {
method : 'POST',
headers : {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
},

body : JSON.stringify({
name: userName,
email: userEmail
})
})

.then(res => res.json())
.then(function (data) {
document.body.innerHTML = data.id
})

.catch(function(error) {
    //alert("You got an error")
    //console.log(error.message)

    document.body.innerHTML = error.message
});

}









// let usersTag = document.createElement('div')
// document.querySelector('body').appendChild(usersTag)
// I thought I would have to use this, however, not necesary 













// function submitData(userName, userEmail) {



//     return fetch('http://localhost:3000/users', {
//     method : 'POST',
//     headers : {
//         'Content-Type' : 'application/json',
//         'Accept' : 'application/json',
//     },
    
//     body : JSON.stringify({
//     name: userName,
//     email: userEmail
    
//     })
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }
    





