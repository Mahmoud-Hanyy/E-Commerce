let filterarray = [];
let galleryarray = [
    {
        id: 1,
        name: "Leathers Jackets",
        src: "./assets/images/products/jacket-5.jpg",
        desc: "Leather jackets for men "
    },
    {
        id: 2,
        name: " Full-Zip Jacket",
        src: "assets/images/products/jacket-6.jpg",
        desc: "MEN Yarn Fleece Full-Zip Jacket"
    },
    {
        id: 3,
        name: "Brown shoes",
        src: "./assets/images/products/shoe-2.jpg",
        desc: " Casual brown shoes for men  "
    },
    {
        id: 4,
        name: "Black Floral Wrap Midi Skirt",
        src: "./assets/images/products/clothes-3.jpg",
        desc: " Black Floral Wrap Midi Skirt "
    },
    {
        id: 5,
        name: "Womens Party Wear Shoes",
        src: "./assets/images/products/party-wear-1.jpg",
        desc: " Womens Party Wear Shoes  "
    },
]

showgallery(galleryarray);

function showgallery(currarray) {
    document.getElementById("card").innerText = "";

    for (var i = 0; i < currarray.length; i++) {
        document.getElementById("card").innerHTML += `
            <div class="col-md-4 mt-3" >
            <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                    <img src="${currarray[i].src}" width="100%" height="320px" />
                    <p class="mt-2">${currarray[i].desc}</p>
                    <a href="index.html" <button class="btn btn-primary w-100 mx-auto"></button>Back to Home </a>
            </div>        
            </div>
        `
    }
}

document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function (a) {
        if (a.name.includes(text)) {
            return a.name;
        }
    });
    if (this.value == "") {
        showgallery(galleryarray);
    }
    else {
        if (filterarray == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }
        else {
            showgallery(filterarray);
            document.getElementById("para").style.display = 'none';
        }
    }
})
