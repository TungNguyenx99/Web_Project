const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.getElementById('count');
const total =document.getElementById('total');
const movieSelect=document.getElementById('movie');
console.log(seats,container);
populateUI();
let ticketPrice=+movieSelect.value

const setMovieData=(movieIndex,moviePrice)=>{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

const updateSelectedCount=()=>{
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const seatsIndex=[...selectedSeats].map(seat=>{
        return [...seats].indexOf(seat)
    })     
    console.log(seatsIndex);

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    count.innerText=selectedSeats.length
    total.innerText=selectedSeats.length*ticketPrice
}


function populateUI(){
    const selectedSeats=JSON.parse( localStorage.getItem('selectedSeats'))
    if(selectedSeats!==null &&selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')
            }
        })
    }
    
    const selectedMovieIndex=JSON.parse( localStorage.getItem('selectedMovieIndex'))

    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex=selectedMovieIndex
    }
}
movieSelect.addEventListener('change',e=>{  
    ticketPrice=+e.target.value;
    console.log(e.target);
    setMovieData(e.target.selectedIndex,e.target.value)  
    updateSelectedCount();
})

container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount()
    }
})

updateSelectedCount()