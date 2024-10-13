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
      const { avatar_url, name, html_url, blog, public_repos, bio } = userData
      console.log(userData);

      const userCard = document.getElementById("userCard")
      userCard.innerHTML = `
      <div>
      <img class=" border-2 border-white rounded-full w-40" src="${avatar_url}">
      <h1 class=" text-2xl font-bold">${name || "N/A"}</h1>
      <p>Bio : ${bio || "N/A"}</p>
      <a href="${html_url}">Profile link : ${html_url || "N/A"}</a>
      <br>
      <a href="${blog}">portfolio link : ${blog || "N/A"}</a>
      <p>Public repos : ${public_repos || "N/A"}</p>
      </div>
      `
}