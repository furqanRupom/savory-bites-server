const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const meals = require('./category/category.json');
const allMeals = require('./data/savoryBites.json');
app.get('/',(req,res)=>{
    res.send('hello people')
})

app.use(cors())

app.get('/category',(req,res)=>{
    res.send(meals)
})

app.get('/category/:categoryName',(req,res)=>{
    const name = req.params.categoryName
    const filterByCategoriesMeals = allMeals.filter(meals => meals.strCategory === name)
    res.send(filterByCategoriesMeals)
})

app.get('/order/:id',(req,res)=>{
    const mealsId = req.params.id
    const findYourMeals = allMeals.find(meals => meals.idMeal == mealsId)
    res.send(findYourMeals);

})
app.get('/search/:name',(req,res)=>{
    const meals = []
    const mealsName = req.params.name
    console.log(mealsName)
    const searchMealsByName = allMeals.find(meals => meals.strMeal == mealsName)
    meals.push(searchMealsByName)
    res.send(meals);
})
app.listen(port,()=>{
    console.log(`savory bites running on ${port}`)
})