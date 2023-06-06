var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
var delTrash = document.querySelectorAll('.fa-trash')
var heart = document.querySelectorAll('.fa-heart')
// var delTrash = document.getElementsByClassName('fa-trash')
// console.log(delTrash)


for(let i = 0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerHTML++
        SommeTotal()
    })
}

for(let i = 0;i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click',function(){
        if(btnMoins[i].nextElementSibling.innerHTML>0){
            btnMoins[i].nextElementSibling.innerHTML--
            SommeTotal()
        }
    })
}

for(let i = 0;i<delTrash.length;i++){
    delTrash[i].addEventListener('click',function(){
        delTrash[i].parentElement.remove()
        SommeTotal()
        // console.log(delTrash)
    })
} 


for(let i = 0;i<heart.length;i++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('mahmoud')
    })
}

function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var somme = document.getElementById('somme')
    var sum = 0

    for(let i = 0;i<price.length;i++){
        sum = sum + price[i].innerText*qte[i].innerText
    }

    somme.innerText = sum

}