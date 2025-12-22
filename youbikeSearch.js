document.addEventListener("DOMContentLoaded", () => {
  const keyword = document.querySelector("#searchBox");
  const btn = document.querySelector("#submission");
  btn.addEventListener("click", () => {
    const request = keyword.value;

    if (request !== "") {
      const url =
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

      fetch(url)
        .then((resp) => resp.json())
        .then((sites) => {
          const bikeList = document.querySelector(".siteList");
          bikeList.innerHTML = ""
          sites
            .filter((site) => site.ar.includes(request))
            .forEach((site) => {
              const item = `<li class="list-group-item s1">
                <i class="fas fa-bicycle"></i>
                ${site.sna.replace("YouBike2.0_", "")}      (${
                site.available_rent_bikes
              })<br />
                <span class="textSmall2">${site.ar}</span>
              </li>`;
              bikeList.insertAdjacentHTML("beforeend", item);
            });
        });
    }
  });
});
