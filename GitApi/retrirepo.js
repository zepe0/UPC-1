function repo() {
    fetch("https://api.github.com/users/octocat/repos").then((res)=>{        
       
      let repos = res.json()
      var nodo = document.getElementById("repo")
      repos.map((repo)=>{
        nodo.innerHTML(repo.name)
        
      })
    })
   

}