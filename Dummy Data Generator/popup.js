
function copyText(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text);
}

function makeRealEmail(name) {
    let clean = name.toLowerCase().replace(" ", ".");
    let num = Math.floor(Math.random() * 900 + 100);
    return `${clean}${num}@gmail.com`;
}


async function generateRealData() {
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;

        document.getElementById("avatar").src = user.picture.large;
        document.getElementById("name").textContent = fullName;
        document.getElementById("email").textContent = makeRealEmail(fullName);
        document.getElementById("phone").textContent = user.phone;
        document.getElementById("city").textContent = user.location.city;
        document.getElementById("country").textContent = user.location.country;

    } catch (err) {
        console.error("Error fetching data:", err);
    }
}


function copyAllCSV() {
    const name = document.getElementById("name").textContent;
    const email = document.getElementById("email").textContent;
    const phone = document.getElementById("phone").textContent;
    const city = document.getElementById("city").textContent;
    const country = document.getElementById("country").textContent;

    const csvData = `${name},${email},${phone},${city},${country}`;

    navigator.clipboard.writeText(csvData);
}

generateRealData();
