const allSeat = document.getElementsByClassName('click-button');
let count = 0;
let availableSeat = 8;
for (const seat of allSeat){
    seat.addEventListener('click', function(e){

        seat.classList.add('bg-green-400');
        count = count + 1;
        // console.log(count);
        // document.getElementById('seatBookingDisplay').innerText = count;
        setInnerText('seatBookingDisplay', count);

        availableSeat = availableSeat-1;
        // document.getElementById('available-seat').innerText = availableSeat;
        setInnerText('available-seat', availableSeat);

        const seatName = e.target.innerText;
        console.log(seatName);

        const selectedContainer = document.getElementById('seat-booking-details');

        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = seatName;
        const td1 = document.createElement('td')
        td1.innerText = 'Economy';
        const td2 = document.createElement('td');
        td2.innerText = 550 ;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        selectedContainer.appendChild(tr);

        
    })
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}