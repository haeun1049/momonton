const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
      clockMain = clockContainer.querySelector("h2");

    function getTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;  // 월
        const day = date.getDate(); 

        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockMain.innerText = `${year}년 ${month}월 ${day}일`
        clockTitle.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

      function init() {
        getTime();
        setInterval(getTime, 1000);
      }

      init();