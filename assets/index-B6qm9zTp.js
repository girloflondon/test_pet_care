(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const l=[{name:"Биосфера Балтики",type:"АНО институт",year:"2018",description:"Мы занимаемся реабилитацией диких животных в Калининградской области. Наша цель - строительство центра реабилитации и реинтродукции диких животных на территории региона.",link:"https://balticbiosphere.ru/"},{name:"Центр реабилитации бездомных животных «Славянское»",type:"АНО Реабилитационный Центр",year:"2021",description:"Мы некоммерческая организация и нам очень нужна ваша поддержка. Неважно какой суммой вы готовы поделиться — мы рады любой помощи!",link:"https://slavyanskoe.org/"},{name:"Тимвилль",type:"Приют для бездомных животных",year:"2010",description:"Мы - приют для добрых, чудесных, но, к сожалению, брошенных хозяевами собак. На данный момент Наш Приют находится за Полесском. Ориентир - поселок Саранское, Полесского района. В нашем приюте нет клеток и цепей. Собаки проживают в больших вольерах. Обязательное дежурство каждый день! Уборка, кормёжка и выгул. Волонтеры стараются создавать комфортные условия для своих подопечных. В приюте собакам хорошо, но это не дом. Любой наш питомец мечтает о своем доме, о человеке, который будет его любить и заботится о нем. Приезжайте к нам, выбирате себе самого преданного друга!",link:"https://timville.ru/sobaki/"},{name:"«Дом для одиноких кошек»",type:"Телеграм-канал",year:"2023",description:"Приют более 15 лет содержит калининградка Анна Брылевская, спасая покалеченных и смертельно больных животных, нуждающихся в постоянном уходе и лечении. В приюте живут 112 кошек и 14 собак. В калининградском «филиале» — самые тяжёлые коты, им нужен круглосуточный медицинский уход. За городом построен дом для тех, кто уже выздоровел, но также нуждается в присмотре.",link:"https://t.me/d_o_k39"},{name:"Балтика 39",type:"Телеграм-канал",year:"2024",description:"Мы помогаем нуждающимся в помощи бездомным кошкам Калининграда и области",link:"https://t.me/baltika39_cat"},{name:"Доброму сердцу преданный друг",type:"Группа ВКонакте",year:"2015",description:"Волонтёрская группа помощи бездомным животным Зеленоградского района существует семь лет. Группой руководят несколько местных жительниц. За четыре года они стерилизовали более 400 бездомных кошек, около половины из них пристроили.",link:"https://vk.com/bezdomnye.zelenogradska"},{name:"Благотворительный фонд «Поможем вместе 39»",type:"Группа ВКонтакте",year:"2014",description:"Существует более 5 лет, приютом руководит калининградка Татьяна Савина (Гальминене). «Поможем вместе 39» специализируется преимущественно на крупных породах — кавказских и среднеазиатских овчарках, брошенных хозяевами.",link:"https://vk.com/ko_sao_komanda"},{name:"«Преданная душа»",type:"Группа ВКонтакте",year:"2016",description:"Приют для бездомных собак находится на хуторе в Гвардейском районе, где живёт его хозяйка Наталия Сарбеева. Содержание 70 псов лежит на ней и Марине Горлачёвой, у которой в Калининграде живут 25 котов.",link:"https://vk.com/predannayadusha39"},{name:"«Сломанные игрушки»",type:"Телеграм-канал",year:"2009",description:"Приют «Сломанные игрушки», он же «Передержка в Косме» существует с 2009 года. В основном здесь живут старые собаки и псы-инвалиды. Средний возраст питомцев — десять лет, но есть и молодые, активные собаки, которые нуждаются в хозяевах.",link:"https://t.me/priyutvKosme https://t.me/priyutvKosme"}];function g(){fetch("/load-content").then(e=>{if(console.log("Статус ответа:",e.status),console.log("Тип контента:",e.headers.get("Content-Type")),!e.ok)throw new Error(`Ошибка HTTP: ${e.status}`);if(e.headers.get("Content-Type").includes("application/json"))return e.json();throw new Error("Ожидался JSON, но был получен другой формат данных")}).then(e=>{console.log("Полученные данные:",e),document.querySelectorAll(".editable").forEach((t,c)=>{e[`field_${c}`]&&(t.innerText=e[`field_${c}`])})}).catch(e=>{console.error("Ошибка при загрузке данных:",e)})}document.addEventListener("DOMContentLoaded",g);const f=document.querySelector(".burger"),y=document.querySelector(".header-nav"),h=document.querySelector(".body"),u=document.querySelector(".burger__dark"),_=document.getElementsByClassName("header__a");function m(e){document.querySelector(".active").classList.remove("active"),y.classList.remove("header-nav__active"),h.classList.remove("no_scroll"),u.classList.remove("dark")}function k(e){e.preventDefault(),this.classList.toggle("active"),y.classList.toggle("header-nav__active"),h.classList.toggle("no_scroll"),u.classList.toggle("dark"),f.classList.contains("active")&&(Array.from(_).forEach(t=>{t.addEventListener("click",m)}),u.addEventListener("click",m))}f.addEventListener("click",k);const p=document.querySelector(".main__list"),b=document.getElementById("all"),v=document.getElementById("back"),L=document.getElementById("forward");let r=0;const a=5;function i(e,t){p.innerHTML="",l.slice(e,t).forEach(n=>{const o=document.createElement("div");o.classList.add("main__list-item"),o.innerHTML=`
      <div class="list-item__header">
        <img
          class="list-item__header-image"
          src="../src/assets/images/icons/dog-cat-icon.svg"
          alt="${n.name}"
        />
        <h4 class="list-item__header-title">${n.name}</h4>
      </div>
      <div class="list-item__block1">
        <div class="block1__text-block">
          <p class="block1__text1">
            <span class="block1__text1-subheader">Тип: </span> ${n.type}
          </p>
          <p class="block1__text2">
            <span class="block1__text2-subheader">Год: </span> ${n.year}
          </p>
        </div>
        <span class="block1__element"></span>
        <p class="block1__text">
          ${n.description}
        </p>
      </div>
      <form class="list-item__block2" action="${n.link}">
        <p class="block2__text">Подробнее о фонде</p>
        <button type="submit" class="block2__button"></button>
      </form>
    `,p.appendChild(o)})}i(0,a);b.addEventListener("click",()=>{i(0,l.length)});L.addEventListener("click",()=>{if((r+1)*a<l.length){r++;const e=r*a,t=Math.min(e+a,l.length);i(e,t)}});v.addEventListener("click",()=>{if(r>0){r--;const e=r*a,t=e+a;i(e,t)}});function E(){console.log("Начинаем загрузку ссылок..."),fetch("/load-links").then(e=>{if(console.log("Ответ от сервера:",e),!e.ok)throw console.error("Ответ не OK. Статус:",e.status),new Error("Ошибка загрузки ссылок: неверный ответ сервера.");const t=e.headers.get("Content-Type");if(console.log("Content-Type заголовок:",t),!t||!t.includes("application/json"))throw new Error(`Ожидался JSON, но получен ${t}`);return e.json()}).then(e=>{if(console.log("Полученные ссылки:",e),!Array.isArray(e))throw new Error("Неверный формат данных. Ожидался массив.");w(e)}).catch(e=>{console.error("Ошибка при загрузке или отображении ссылок:",e)})}function w(e){e.forEach(t=>{console.log(`Обработка ссылки для платформы: ${t.platform}`);const c=t.platform==="facebook"?"facebook-btn":"instagram-btn",n=document.getElementById(c);n?(n.addEventListener("click",()=>{window.open(t.link,"_blank")}),console.log(`Кнопка для ${t.platform} успешно настроена.`)):console.error(`Кнопка для ${t.platform} не найдена на странице.`)})}E();
