let sceduleElements = document.querySelectorAll(".scedule");
let btn_show = document.querySelector(".btn-show button")
let btn_hide = document.querySelector(".ff button")
let menu = document.querySelector(".menu")
let form = document.querySelector('.dd')
let scedule_box = document.querySelector(".scedule_box")
let nameInput = document.querySelector(".name")
let priceInput = document.querySelector('.price')
let addButton = document.querySelector('.added')


btn_hide.onclick = () => {
    menu.classList.add("close")
}

btn_show.onclick = () => {
    menu.classList.toggle("active")
}


form.onsubmit = (e) => {
    e.preventDefault()

    priceInput.addEventListener('input', function() {
        let inputValue = this.value.trim()
    
        if (!/^\d+$/.test(inputValue)) {
            addButton.disabled = true
        } else {
            addButton.disabled = false 
        }
        })


    let fd = new FormData(form)
    let obj = {}

    fd.forEach((value, key) => {
        obj[key] = value
    })

    console.log(obj)

    let scedule = document.createElement("div")
    let naming = document.createElement("div")
    let pricing = document.createElement("div")

    scedule.classList.add("scedule")
    naming.classList.add("naming")
    pricing.classList.add("pricing")

    scedule_box.append(scedule)
    scedule.append(naming,pricing)

    let name_obj = obj.name
    let price_obj = obj.price

    naming.textContent = name_obj

    if (!/^\d+$/.test(price_obj)) {
        priceInput.style.border = '2px solid red'
        addButton.disabled = true
    } else {
        priceInput.style.border = ''
        pricing.textContent = `${price_obj} $`
    }
}