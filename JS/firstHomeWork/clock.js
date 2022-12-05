
document.onload(Rename(prompt("Adınız nedir?")), Clock())

function Clock() {

    var time = new Date()
    document.getElementById('myClock').innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + time.toLocaleString('tr-TR', { weekday: 'long' })
    setInterval('Clock()', 1000)
}

function Rename(name) {
    document.getElementById('myName').innerHTML = name
}