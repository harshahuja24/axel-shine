// Check if userData exists in localStorage and log it if it does
const savedUserData = localStorage.getItem('userData');
if (savedUserData) {
    const userData = JSON.parse(savedUserData);
    console.log('UserData loaded from localStorage:', userData);
}

// const savedCartList = localStorage.getItem('cartList');
// if (savedCartList) {
//     const cartList = JSON.parse(savedCartList);
//     console.log('CartList loaded from localStorage:', cartList);

// }


const workersData = [
    {
        eid: 1,
        name: "John Doe",
        status: "available",
        category: "electrical",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com"
    },
    {
        eid: 2,
        name: "Jane Smith",
        status: "assigned",
        category: "plumbing",
        phoneNumber: "234-567-8901",
        email: "jane.smith@example.com"
    },
    {
        eid: 3,
        name: "Alice Johnson",
        status: "available",
        category: "clean",
        phoneNumber: "345-678-9012",
        email: "alice.johnson@example.com"
    },
    {
        eid: 4,
        name: "Michael Brown",
        status: "available",
        category: "electrical",
        phoneNumber: "456-789-0123",
        email: "michael.brown@example.com"
    },
    {
        eid: 5,
        name: "Emily Davis",
        status: "assigned",
        category: "plumbing",
        phoneNumber: "567-890-1234",
        email: "emily.davis@example.com"
    },
    {
        eid: 6,
        name: "William Wilson",
        status: "available",
        category: "clean",
        phoneNumber: "678-901-2345",
        email: "william.wilson@example.com"
    },
    {
        eid: 7,
        name: "Olivia Martinez",
        status: "available",
        category: "electrical",
        phoneNumber: "789-012-3456",
        email: "olivia.martinez@example.com"
    },
    {
        eid: 8,
        name: "Daniel Rodriguez",
        status: "assigned",
        category: "plumbing",
        phoneNumber: "890-123-4567",
        email: "daniel.rodriguez@example.com"
    },
    {
        eid: 9,
        name: "Sophia Garcia",
        status: "available",
        category: "clean",
        phoneNumber: "901-234-5678",
        email: "sophia.garcia@example.com"
    },
    {
        eid: 10,
        name: "Liam Smith",
        status: "available",
        category: "electrical",
        phoneNumber: "012-345-6789",
        email: "liam.smith@example.com"
    }
];

localStorage.setItem('workersData', JSON.stringify(workersData));
const electrical = [];
const plumbing = [];
const clean = [];
const availableWorker = [];
const assignedWorker = [];

for (let i = 0; i < workersData.length; i++) {
    if (workersData[i].category === 'electrical') {
        electrical.push(workersData[i]);
    }
    if (workersData[i].category === 'plumbing') {
        plumbing.push(workersData[i]);
    }
    if (workersData[i].category === 'clean') {
        clean.push(workersData[i]);
    }
    if (workersData[i].status === 'available') {
        availableWorker.push(workersData[i]);
    }
    if (workersData[i].status === 'assigned') {
        assignedWorker.push(workersData[i]);
    }
}

console.log('Electrical workers:', electrical);
console.log('Plumbing workers:', plumbing);
console.log('Clean workers:', clean);
console.log('Available workers:', availableWorker);
console.log('Assigned workers:', assignedWorker);



function assignRandomWorker(workersData) {
    if (workersData.length === 0) {
      return null; 
    }
    const randomIndex = Math.floor(Math.random() * workersData.length);
    const assignedWorker = workersData[randomIndex];
    assignedWorker.status = 'assigned'; 
    return assignedWorker;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const savedCartData = localStorage.getItem('cartList');
    let totalPrice = 0;
    if (savedCartData) {
      const cartList = JSON.parse(savedCartData);
      const tbody = document.querySelector('.tbody');
      tbody.innerHTML = ""; 
      const assignedWorkers = [];
      for (let i = 0; i < cartList.length; i++) {
        const item = cartList[i];
        totalPrice += parseFloat(item.cost);
        let assignedWorker = null;
        if (item.name.toLowerCase().includes('clean')) {
          assignedWorker = assignRandomWorker(clean);
        } else if (item.name.toLowerCase().includes('plumbing')) {
          assignedWorker = assignRandomWorker(plumbing);
        } else if (item.name.toLowerCase().includes('electrical')) {
          assignedWorker = assignRandomWorker(electrical);
        }
        const struct = `<tr>
                          <th scope="row">${i + 1}</th>
                          <td>${assignedWorker ? assignedWorker.name : 'No available worker'}</td>
                          <td>${assignedWorker.phoneNumber} <br> ${assignedWorker.email}</td>
                          <td>${item.name}</td>
                          <td>${item.cost}</td>
                        </tr>`;
        tbody.innerHTML += struct;
        if (assignedWorker) {
          assignedWorkers.push(assignedWorker);
        }
      }
      console.log('Assigned workers:', assignedWorkers);
    }
    document.getElementById('totalPriceDisplay').textContent = "Total Cost: $" + totalPrice.toFixed(2);
  
  });