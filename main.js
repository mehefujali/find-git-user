const lodeUser = async (username) => {

      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()
      displayUser(data)


}


document.getElementById("searchBtn").addEventListener("click", () => {
      const userId = document.getElementById("usernameInput")
      lodeUser(userId.value)
      userId.value = ""

})

lodeUser("mehefujali")
const displayUser = (userData) => {
      const { avatar_url, name, html_url } = userData

      const userCard = document.getElementById("userCard")
      userCard.innerHTML = `
      <img src="${avatar_url}">
      <h1>${name}</h1>
      <a href="${html_url}">${html_url}</a>
      `
}