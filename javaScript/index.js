function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment(los - angeles).tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement = losAngelesTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement = shanghaiTime.format("h:mm:ss [<small> A </small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone=== "current"){
    cityTimezone=moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", "").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  <div class="city" >
          <div>
            <h2>${cityTimezone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")} </small>
          </div>
        </div>`;
}

updateTime;
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
