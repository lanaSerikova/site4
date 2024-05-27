const arrTown = [{
    id: 1, name: 'Гомель', content: `<h1>Гомель</h1>
        <p> Гомель — второй в Белоруссии после Минска</p>
    <h2> Цифры и факты</h2>
    <p> Гомель — второй по величине (после Минска) город республики Беларусь. По последней переписи населения в Гомеле
        насчитывается чуть более полумиллиона жителей.</p>
    <p> Город расположен на юго-востоке Белоруссии, примерно в трехстах километрах от столицы страны, в так называемом
        Гомельском полесье, входящем в состав знаменитого Белорусского полесья. Площадь Гомеля — 135 квадратных
        километров.</p>
    <p> Надо отметить еще, что Гомель стоит на реке Сож, которая является вторым по величине притоком Днепра. Кстати, по
        территории Белоруссии Сож (общая длина реки 648 км) протекает на расстоянии 493 километра.</p> `,
    img: "gomel1.jpg",
}, {
    id: 2, name: 'Лоев', content: "2", img: "",
}, {
    id: 3, name: 'Речица', content: "3", img: "речица.jpg",
}, {
    id: 4, name: 'Юровичи', content: "4", img: "",
}, {
    id: 5, name: 'Мозырь', content: "5", img: "",
}, {
    id: 6, name: 'Туров', content: "6", img: "",
}, {
    id: 7, name: 'Красный берег', content: "7", img: "",
}, {
    id: 8, name: 'Чечерск', content: "8", img: "",
}, {
    id: 9, name: 'Ветка', content: "9", img: "",
}]
const slaider = ['fon.jpg', 'речица.jpg', 'gomel1.jpg']
let item1Menu =
    document.querySelector('.item1 ul');
if (item1Menu !== null)
    for (let i = 0; i < arrTown.length; i++) {
        item1Menu.innerHTML +=
            `<li 
    onclick=functA(${arrTown[i].id})>${arrTown[i].name}</li>`
    }
//============================
let arrAs = document.querySelectorAll('.item1 a')

function functA(n) {
    for (let i = 0; i < arrTown.length; i++) {
        if (arrTown[i].id == n)
            document.querySelector('.item2')
                .innerHTML = `<div><img src=img/${arrTown[i].img}></div>` + arrTown[i].content
    }
}
//==================СЛАЙДЕР

let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')
let sldImg = document.querySelector('#contImg #sliderImg')
let sld0Img = document.querySelector('#contImg #sliderImg img')
let str; let n;
if (sld0Img !== null && leftBtn !== null
    && rightBtn !== null && sldImg !== null) {

    str = sld0Img.getAttribute('src').slice(4)


    rightBtn.onclick = function () {
        n = serchI();
        proverka(n)
        dopRightFunction(n)
        str = slaider[n + 1];
    }
    //===============================

    leftBtn.onclick = function () {
        n = serchI()
        proverka(n)
        dopLeftFunction(n)
        str = slaider[n - 1];
    }
    function dopRightFunction(n) {
        if (n + 1 == slaider.length - 1) {
            rightBtn.style.visibility = 'hidden';
        }
        if (n < slaider.length) {
            sldImg.innerHTML = `<img src=img/${slaider[n + 1]} />`
        }
    }
    function dopLeftFunction(n) {
        if (n - 1 == 0) {
            leftBtn.style.visibility = 'hidden';
        }
        if (n > 0) {
            sldImg.innerHTML = `<img src=img/${slaider[n - 1]} />`
        }
    }
    function serchI() {
        for (let i = 0; i < slaider.length; i++) {
            if (slaider[i] == str) {
                n = i;
                return n;
            }
        }
    }
    function proverka(n) {
        if (n - 1 != 0 && n - 1 != slaider.length - 1)
            leftBtn.style.visibility = 'visible';
        rightBtn.style.visibility = 'visible';
    }
}
//===================================
let ddMenu = document.getElementById(`menu`)
let ddDiv = document.querySelector(`nav ul`)
ddMenu.onclick = function () {
    ddMenu.classList.toggle('krest')
    ddDiv.classList.toggle('topMenu')
}
