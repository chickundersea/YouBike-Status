document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#searchForm");
  const keyword = document.querySelector("#searchBox");
  const summit = document.querySelector("#summit");

  form.addEventListener("summit", (e) => {
    e.preventDefault();
  });
  const request = keyword.value;

  if (request == "") {
    const url =
      "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((sites) => {
        const bikelist = document.querySelector(".siteList");

        sites.filter((site)=> site.ar.includes(request)).forEach((site) => {
            const item = 
            bikelist.insertAdjacentHTML('beforeend', item)
        })

        })
  }
});
