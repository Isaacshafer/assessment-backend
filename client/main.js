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
  

  let submitButton = document.querySelector('#submitButton')

  let createName = () => {
      
    let input = document.querySelector('#input-1')
    let bodyObj = {
    input: input.value
    }
    axios.post('http://localhost:4000/api/hello', bodyObj)
      .then(res => {
          alert(res.data)
        })
  }
  

  let nameDeleter = () => {      
    let newIndex = document.getElementById('input-2').value    
      axios.delete(`http://localhost:4000/api/delete/${newIndex}`)
      .then((res) => {
          alert(res.data)
      })
  }
  let deleteButton = document.getElementById('deleteButton')

 

let getUsersButton = document.getElementById('getUsers')
  let getUsers = () => {
      axios('http://localhost:4000/api/users')
      .then(res => alert(res.data))
  }

let editUsers = () => {
  let newName = document.getElementById('newName').value
  let changeIndex = document.getElementById('nameIndex').value
  let bodyObj = {
    newName
  }
  axios.put(`http://localhost:4000/api/edit/${changeIndex}`, bodyObj)
  .then(res => {
    alert(res.data)
  })

}
let editName = document.getElementById('editName')



submitButton.addEventListener('click', createName)
deleteButton.addEventListener('click', nameDeleter)
getUsersButton.addEventListener('click', getUsers)
editName.addEventListener('click', editUsers)

