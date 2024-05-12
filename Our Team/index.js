const savedworkersData = localStorage.getItem('workersData')
if(savedworkersData){
    var workersData = JSON.parse(savedworkersData)
}
console.log(workersData)



const cardspace = document.querySelector('.row');
cardspace.innerHTML = "";

for (let i = 0; i < workersData.length; i++) {

    const card = document.createElement('div')
    card.classList.add('col-md-4', 'mb-3', 'mb-sm-0', 'card');

    if(workersData[i].status === 'available'){
        card.classList.add('pleasent-hover-green')
    }
    if(workersData[i].status === 'assigned'){
        card.classList.add('pleasent-hover-red')
    }
    



    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${workersData[i].name}</h5>
            <p class="card-text">Phone Number: ${workersData[i].phoneNumber}</p>
            <p class="card-text">Email: ${workersData[i].email}</p>
            <p class="card-text">Status: ${workersData[i].status}</p>
        </div>`;

    cardspace.appendChild(card)
}
