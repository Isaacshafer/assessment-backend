const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let users = []

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get('/api/fortune', (req, res) => {
  let fortunes = ['A faithful friend is a strong defense.', "A feather in the hand is better than a bird in the air.", 'A fresh start will put you on your way.', 'A friend asks only for your time not your money.', 'A friend is a present you give yourself.', 'A gambler not only will lose what he has, but also will lose what he does not have.', 'A golden egg of opportunity falls into your lap this month.', 'A good friendship is often more important than a passionate romance.']

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]
  res.status(200).send(randomFortune)
})

app.post('/api/hello', (req, res) => {
  let name = req.body.input
  users.push(name)
  res.status(200).send(`hello ${name}, its nice to see you`)
})


app.delete('/api/delete/:id', (req, res) => {
  let index = req.params.id
    users.splice(index, 1)
    res.status(200).send(`user at index ${index} has been deleted`)
})


app.get('/api/users', (req,res) => {
  res.status(200).send(users)
})

app.put('/api/edit/:id', (req, res) => {
  let index = req.params.id
  let newName = req.body.newName
  users.splice(index, 1, newName)
  res.status(200).send(`user at index ${index} is now ${newName}`)
})

app.listen(4000, () => console.log("Server running on 4000"));
