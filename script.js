const secondsContainer = document.querySelector("#seconds")
const minutesContainer = document.querySelector("#minutes")
const hoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")



const nextDate = new Date().getFullYear() 
const newCountDown = new Date(`March 30 ${nextDate} 00:00:00`)


const updateCountDown = () => {
    const currentTime = new Date()
    const differenceDate = newCountDown - currentTime

    const days = Math.floor(differenceDate / 1000 / 60 / 60 / 24)
    const hours = Math.floor(differenceDate / 1000 / 60 / 60) % 24
    const minutes = Math.floor(differenceDate / 1000 / 60) % 60
    const seconds = Math.floor(differenceDate / 1000) % 60



    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours
    daysContainer.textContent = days < 10 ? "0" + days : days

}

setInterval(updateCountDown, 1000)