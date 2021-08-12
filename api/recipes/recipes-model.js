function getRecipeById(recipe_id){
    return Promise.resolve(`your recipe id is ${recipe_id}`)
}

module.exports = { getRecipeById }