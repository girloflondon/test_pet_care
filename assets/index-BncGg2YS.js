(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const a=[{name:"Биосфера Балтики",type:"АНО институт",year:"2018",description:"Мы занимаемся реабилитацией диких животных в Калининградской области. Наша цель - строительство центра реабилитации и реинтродукции диких животных на территории региона.",link:"https://balticbiosphere.ru/"},{name:"Центр реабилитации бездомных животных «Славянское»",type:"АНО Реабилитационный Центр",year:"2021",description:"Мы некоммерческая организация и нам очень нужна ваша поддержка. Неважно какой суммой вы готовы поделиться — мы рады любой помощи!",link:"https://slavyanskoe.org/"},{name:"Тимвилль",type:"Приют для бездомных животных",year:"2010",description:"Мы - приют для добрых, чудесных, но, к сожалению, брошенных хозяевами собак. На данный момент Наш Приют находится за Полесском. Ориентир - поселок Саранское, Полесского района. В нашем приюте нет клеток и цепей. Собаки проживают в больших вольерах. Обязательное дежурство каждый день! Уборка, кормёжка и выгул. Волонтеры стараются создавать комфортные условия для своих подопечных. В приюте собакам хорошо, но это не дом. Любой наш питомец мечтает о своем доме, о человеке, который будет его любить и заботится о нем. Приезжайте к нам, выбирате себе самого преданного друга!",link:"https://timville.ru/sobaki/"},{name:"«Дом для одиноких кошек»",type:"Телеграм-канал",year:"2023",description:"Приют более 15 лет содержит калининградка Анна Брылевская, спасая покалеченных и смертельно больных животных, нуждающихся в постоянном уходе и лечении. В приюте живут 112 кошек и 14 собак. В калининградском «филиале» — самые тяжёлые коты, им нужен круглосуточный медицинский уход. За городом построен дом для тех, кто уже выздоровел, но также нуждается в присмотре.",link:"https://t.me/d_o_k39"},{name:"Балтика 39",type:"Телеграм-канал",year:"2024",description:"Мы помогаем нуждающимся в помощи бездомным кошкам Калининграда и области",link:"https://t.me/baltika39_cat"},{name:"Доброму сердцу преданный друг",type:"Группа ВКонакте",year:"2015",description:"Волонтёрская группа помощи бездомным животным Зеленоградского района существует семь лет. Группой руководят несколько местных жительниц. За четыре года они стерилизовали более 400 бездомных кошек, около половины из них пристроили.",link:"https://vk.com/bezdomnye.zelenogradska"},{name:"Благотворительный фонд «Поможем вместе 39»",type:"Группа ВКонтакте",year:"2014",description:"Существует более 5 лет, приютом руководит калининградка Татьяна Савина (Гальминене). «Поможем вместе 39» специализируется преимущественно на крупных породах — кавказских и среднеазиатских овчарках, брошенных хозяевами.",link:"https://vk.com/ko_sao_komanda"},{name:"«Преданная душа»",type:"Группа ВКонтакте",year:"2016",description:"Приют для бездомных собак находится на хуторе в Гвардейском районе, где живёт его хозяйка Наталия Сарбеева. Содержание 70 псов лежит на ней и Марине Горлачёвой, у которой в Калининграде живут 25 котов.",link:"https://vk.com/predannayadusha39"},{name:"«Сломанные игрушки»",type:"Телеграм-канал",year:"2009",description:"Приют «Сломанные игрушки», он же «Передержка в Косме» существует с 2009 года. В основном здесь живут старые собаки и псы-инвалиды. Средний возраст питомцев — десять лет, но есть и молодые, активные собаки, которые нуждаются в хозяевах.",link:"https://t.me/priyutvKosme https://t.me/priyutvKosme"}];function f(){fetch("/load-content").then(e=>{if(console.log("Статус ответа:",e.status),console.log("Тип контента:",e.headers.get("Content-Type")),!e.ok)throw new Error(`Ошибка HTTP: ${e.status}`);if(e.headers.get("Content-Type").includes("application/json"))return e.json();throw new Error("Ожидался JSON, но был получен другой формат данных")}).then(e=>{console.log("Полученные данные:",e),document.querySelectorAll(".editable").forEach((s,i)=>{e[`field_${i}`]&&(s.innerText=e[`field_${i}`])})}).catch(e=>{console.error("Ошибка при загрузке данных:",e)})}document.addEventListener("DOMContentLoaded",f);const y=document.querySelector(".burger"),h=document.querySelector(".header-nav"),_=document.querySelector(".body"),u=document.querySelector(".burger__dark"),k=document.getElementsByClassName("header__a");function m(e){document.querySelector(".active").classList.remove("active"),h.classList.remove("header-nav__active"),_.classList.remove("no_scroll"),u.classList.remove("dark")}function g(e){e.preventDefault(),this.classList.toggle("active"),h.classList.toggle("header-nav__active"),_.classList.toggle("no_scroll"),u.classList.toggle("dark"),y.classList.contains("active")&&(Array.from(k).forEach(s=>{s.addEventListener("click",m)}),u.addEventListener("click",m))}y.addEventListener("click",g);const p=document.querySelector(".main__list"),v=document.getElementById("all"),b=document.getElementById("back"),L=document.getElementById("forward");let c=0;const r=5;function l(e,s){p.innerHTML="",a.slice(e,s).forEach(o=>{const t=document.createElement("div");t.classList.add("main__list-item"),t.innerHTML=`
      <div class="list-item__header">
        <img
          class="list-item__header-image"
          src="./src/assets/images/icons/dog-cat-icon.svg"
          alt="${o.name}"
        />
        <h4 class="list-item__header-title">${o.name}</h4>
      </div>
      <div class="list-item__block1">
        <div class="block1__text-block">
          <p class="block1__text1">
            <span class="block1__text1-subheader">Тип: </span> ${o.type}
          </p>
          <p class="block1__text2">
            <span class="block1__text2-subheader">Год: </span> ${o.year}
          </p>
        </div>
        <span class="block1__element"></span>
        <p class="block1__text">
          ${o.description}
        </p>
      </div>
      <form class="list-item__block2" action="${o.link}">
        <p class="block2__text">Подробнее о фонде</p>
        <button type="submit" class="block2__button"></button>
      </form>
    `,p.appendChild(t)})}l(0,r);v.addEventListener("click",()=>{l(0,a.length)});L.addEventListener("click",()=>{if((c+1)*r<a.length){c++;const e=c*r,s=Math.min(e+r,a.length);l(e,s)}});b.addEventListener("click",()=>{if(c>0){c--;const e=c*r,s=e+r;l(e,s)}});
