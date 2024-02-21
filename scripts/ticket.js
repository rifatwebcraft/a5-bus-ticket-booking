const allSeat = document.getElementsByClassName('click-button');
let count = 0;
let availableSeat = 8;
for (const seat of allSeat){
    seat.addEventListener('click', function(e){
        if(seat.classList.contains("bg-green-400") === true){
            return
        }
        if(count >= 4){
            alert('Soory! You cannot book more than four seats!')
            return
        }
        seat.classList.add('bg-green-400');
        count = count + 1;
    
        setInnerText('seatBookingDisplay', count);



        availableSeat = availableSeat-1;
       
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


        totalPrice('total-price', parseInt(td2.innerText));
        
       

        grandTotal(); 
    
   
    })
}




// total price
function totalPrice (id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertTotal = parseInt(totalCost);
    const convertSingleCost = value;
    const sumTotal = convertTotal + convertSingleCost;
   setInnerText(id, sumTotal);
}



// grand total
function grandTotal(){
    const totalCost = document.getElementById('total-price').innerText;
    const convertTotalCost = parseInt(totalCost);
    setInnerText('grand-total', convertTotalCost);

//   cupon input

    document.getElementById('btn-aply').addEventListener('click', function(e){
        const inputSection = document.getElementById('input-section');
        inputSection.style.display = 'none';
    
    })

    document.getElementById('input-cupon').addEventListener('keyup', function(e){
        const text = e.target.value;
        console.log(text);
        const aplyButton = document.getElementById('btn-aply');
    
        if(text == 'NEW15'){
            aplyButton.removeAttribute('disabled');
            const discount = convertTotalCost * 15 / 100;
           const  finalTotal = convertTotalCost - discount;
            
            setInnerText('grand-total', finalTotal);
        }
        else if(text == 'Couple 20'){
            aplyButton.removeAttribute('disabled');
            const discount = convertTotalCost * 20 / 100;
            const  finalTotal = convertTotalCost - discount;
            setInnerText('grand-total', finalTotal);
        }

        else{
            aplyButton.setAttribute('disabled', true);
        }
       
        
    })     
    
}

// set innertext
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


document.getElementById('modal-button').addEventListener('click', function(){
    window.location.reload();
})