<p align="center">
	<h1 align="center">Recipe Much :page_facing_up: :tm:</h1>
</p>

<p align="center">
  <a href="#-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-How-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Nest](https://nestjs.com/)
- [Docker](https://www.docker.com/)
- [Typescript](https://www.typescriptlang.org/)

## 💻 Project

This API was built in order to return recipes through ingredients, it was made using **Node.js**, **Nest.js**, **Typescript** and **Docker**..

## 🤔 How to use

- Make a fork;
- Set an .env file with Giphy credentials(.env.example has a for you test)
- Install nest.js dependencies: `npm install`;
- Run docker: `docker-compose up'`;
- Connect in localhost: `http://localhost:3000`.

## Routes 

 /recipes
 
 To get a recipe you need to enter min 1 ingredient and max 3
 
 request example: **@GET** http://localhost:3000/recipes?i=garlic
 
 response example:
 ```
 {
    "keywords": [
        "garlic"
    ],
    "recipes": [
        {
            "title": "Garlic Dijon Grilling Sauce",
            "ingredients": "garlic, dijon mustard",
            "link": "http://www.kraftfoods.com/kf/recipes/garlic-dijon-grilling-sauce-56449.aspx",
            "gif": "https://giphy.com/gifs/cooking-Q4PcMC8apFXBm"
        },
        {
            "title": "Bruschetta With Roasted Garlic and Cherry Tomatoes",
            "ingredients": "garlic, italian bread",
            "link": "http://www.recipezaar.com/Bruschetta-With-Roasted-Garlic-and-Cherry-Tomatoes-244281",
            "gif": "https://giphy.com/gifs/cherry-quadcopter-chopping-HQyRzRVrJnT6U"
        },
 ```
 
 OBS: The API has cache control, from the second request you will notice that the response will be faster.
  Validations were also added if the user sends points, semicolons and improper spaces

## :memo: License

This project is under License MIT. See the documentation [LICENSE](LICENSE) for more details.

---

<p align="center">Developed by <a href="https://www.linkedin.com/in/leonardo-balsalobre/">Leonardo Balsalobre</a> :copyright:
