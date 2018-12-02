let myMenu = document.querySelector('.menu'),
    myItem = document.querySelectorAll('.menu-item')[1],
    myItemTwo = document.querySelectorAll('.menu-item')[2],
    myColumn = document.getElementsByTagName('column'),
    myTitle = document.getElementById('title'),
    myAdv = document.querySelector('.adv'),
    myPrompt = document.getElementById('prompt'),
    bodyBg = document.body,
    five = document.createElement('li');
    myPrompt = prompt('Ваше отношение к технике Apple?'),
    answer = document.getElementById('prompt');
    

    myMenu.insertBefore(myItemTwo, myItem);
    answer.textContent = myPrompt;
    myTitle.innerHTML = 'Мы продаём только подлинную технику Apple';
    bodyBg.style.backgroundImage = 'url(../img/apple_true.jpg)';
    


    five.classList.add('menu-item');
    five.innerHTML = 'Пятый пункт';
    myMenu.appendChild(five);
    myAdv.remove();

    
    









// let answer = prompt('Ваше отношение к техние Apple?');

//     document.myPrompt.appendChild(answer);
//     console.log(myPrompt);
















// let myMenu = document.querySelector('.menu'),
//     myItem = document.querySelectorAll('.menu-item'),
//     myTitle = document.getElementById('.title'),
//     bodyBg = document.querySelector('body');

//     // bodyBg.style.backgroundImage = url('');
    
    




//     deleted = document.querySelector('.adv');

//     // answer = prompt('Ваше отношение к технике apple?');

    
//     five = document.createElement('li');
//     five.classList.add('menu-item');
//     myMenu.appendChild(five);
//     deleted.remove();
    









  









