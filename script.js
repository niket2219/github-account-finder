var form=document.getElementById("myform")
form.addEventListener('submit',function(e){
e.preventDefault()
var search = document.getElementById("search").value

var orname=search.split(' ').join('')

fetch("https://api.github.com/users/"+orname)
  .then((result) =>
  result.json()
)
  .then((data) => {
    console.log(data)

    document.getElementById("box1").innerHTML=`<img src="${data.avatar_url}" width="60%" style="border-radius:50%;position:absolute; left:20%;top:5%;">`
    var div=document.createElement("div");
    div.innerHTML=`<h2><i>Loginned as : ${data.login} <i></h2><style>h2{position:absolute;top:61%;left:24%;}</style>+<br><h3>Account Created On : ${data.created_at}</h3></br><style>h3{position:absolute;top:71%;left:24%;}</style>+<p><b> ID : ${data.id} </b></p><style>p{position:absolute;top:86%;left:24%;font-size:larger;}</style>`
    document.getElementById("box1").appendChild(div)

})
})

var form=document.getElementById("myform")
form.addEventListener('submit',function(e){
e.preventDefault()
var search = document.getElementById("search").value
var orname=search.split(' ').join('')

fetch("https://api.github.com/users/"+orname+"/repos")
  .then((result) =>
  result.json()
)
  .then((data) => {
    console.log(data)
    var div=document.createElement("div");
    div.innerHTML=`<h1 class="r1">Top Repositories <hr><br>
    </br><h2 class="s1">Repo Name:${data[0].name}</h2><br></br>
    <p class="id1">ID:${data[0].id}</p>
    <br></br>
    <p class="l1">
    Language used :${data[0].language}</p><br></br>
    <p class="branch1">Default_branch :${data[0].default_branch}</p>
    <p class="push1">Pushed-at :${data[0].pushed_at}</p>
    <p class="desc1">Description :${data[0].description}</p>
    
    </h1>`
    document.getElementById("box2").appendChild(div)

    var div=document.createElement("div");
    div.innerHTML=`<h2 class="s2">Repo Name:${data[1].name}</h2><br></br>
    <p class="id2">ID:${data[1].id}</p>
    <br></br>
    <p class="l2">
    Language used :${data[1].language}</p><br></br>
    <p class="branch2">Default_branch :${data[1].default_branch}</p>
    <p class="push2">Pushed-at :${data[1].pushed_at}</p>
<p class="desc2">Watchers:${data[1].watchers}</p>
    
    </h1>`
    document.getElementById("box2").appendChild(div)

  })

  })