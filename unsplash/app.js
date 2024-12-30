let demodiv = document.getElementById("demo");

let searchPhoto = async () => {
    let key = "yWeihqH1lgJkS-I2HEiKBCY9ws0JLAEnWcAtFGjppnw";

    let apiUrl = await fetch (`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${key}`);

    let data = await apiUrl.json();
    console.log(data);
   

    demodiv.innerHTML = data.results.map((item) => ( 
    `<div>
    <img src=${item.urls.small} width="200px"/>
    </div>
    `
    ))

}

searchPhoto();