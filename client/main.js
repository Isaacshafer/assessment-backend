document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  

  let sayHello = (body) => {
      axios.post('http://localhost:4000/api/hello', body)
      .then(res => {
          alert(res.data)
        })
  }
  let submitButton = document.querySelector('#submitButton')
  let submithandler = () => {
      
    let input = document.querySelector('#input-1')
    let bodyObj = {
    input: input.value
    }
    sayHello(bodyObj)
  }
  

  let nameDeleter = (body) => {
      axios.delete('http://localhost:4000/api/delete', body)
      .then(res => {
          alert(res.data)
      })
  }
  let deleteButton = document.getElementById('deleteButton')

 

      

  let deleteHandler = (e) => {
    e.preventDefault()
    let deleteName = document.getElementById('input-2')
    let bodyObj = {
          deleteName: deleteName.value
      }
    console.log(deleteName)
    console.log(deleteName.value)
    console.log(bodyObj)
    nameDeleter(bodyObj)
  }
let getUsersButton = document.getElementById('getUsers')
  let getUsers = () => {
      axios('http://localhost:4000/api/users')
      .then(res => alert(res.data))
  }
submitButton.addEventListener('click', submithandler)
deleteButton.addEventListener('click', deleteHandler)
getUsersButton.addEventListener('click', getUsers)


