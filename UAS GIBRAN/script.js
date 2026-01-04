function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();

    const hari = now.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const jam = now.toLocaleTimeString("id-ID");

    timeElement.innerHTML = `${hari} | ${jam}`;
}

// Update setiap 1 detik
setInterval(updateTime, 1000);

// Panggil langsung saat halaman dibuka
updateTime();
