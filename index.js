let sec = 10
const startCounter = () => {
    setInterval(counter, 1000)
}

const counter = () => {
    if(sec >= 0 ){
        document.getElementById('timer').innerText = sec--     
    }
    
    if(sec == 0 ){
        setTimeout(()=>{
             window.location.href = 'https://youtube.com/live/NEnvAhkKI7k'
        },1500)
    }
}

 startCounter()
