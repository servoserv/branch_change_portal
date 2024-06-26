document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
    const branchChangeForm = document.getElementById('branchChangeForm');
    const vacancyTable = document.getElementById('vacancyTable');
  
    if (adminLoginForm) {
      adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    
    if (branchChangeForm) {
      branchChangeForm.addEventListener('submit', handleBranchChange);
    }
  
    loadAdminData();
  
    vacancyTable.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Edit') {
        editVacancy(event);
      }
    });
  });
  
  async function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Assuming a simple check for demonstration purposes
    if (username === 'admin' && password === 'password') {
      window.location.href = 'admin.html';
    } else {
      document.getElementById('loginResult').innerText = 'Invalid username or password';
    }
  }
  
  async function handleBranchChange(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/branch-change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      document.getElementById('result').innerText = result.message;
    } catch (error) {
        console.log(error);
      document.getElementById('result').innerText = 'Error submitting request';
    }
  }
  
  async function loadAdminData() {
    const studentTable = document.getElementById('studentTable');
    const vacancyTable = document.getElementById('vacancyTable');
  
    try {
      const [requestsResponse, vacanciesResponse] = await Promise.all([
        fetch('/api/admin/requests'),
        fetch('/api/admin/vacancies')
      ]);
      
      const [requests, vacancies] = await Promise.all([
        requestsResponse.json(),
        vacanciesResponse.json()
      ]);
      
      populateTable(studentTable, requests, 'tudent');
      populateTable(vacancyTable, vacancies, 'vacancy');
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
  
  function populateTable(table, data, type) {
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    data.forEach(item => {
      const row = document.createElement('tr');
      
      if (type === 'tudent') {
        row.innerHTML = `
          <td>${item.rollNo}</td>
          <td>${item.name}</td>
          <td>${item.cgpa}</td>
          <td>${item.jeeRank}</td>
          <td>${item.category}</td>
          <td>${item.preference1}</td>
          <td>${item.preference2}</td>
          <td>${item.preference3}</td>
          <td>${item.allocatedBranch}</td>
          <td>
            <button onclick="deleteRequest('${item.rollNo}')">Delete</button>
          </td>
        `;
      } else if (type === 'vacancy') {
        row.innerHTML = `
          <td>${item.branchName}</td>
          <td><input type="number" value="${item.open}" /></td>
          <td><input type="number" value="${item.openPwd}" /></td>
          <td><input type="number" value="${item.ews}" /></td>
          <td><input type="number" value="${item.ewsPwd}" /></td>
          <td><input type="number" value="${item.sc}" /></td>
          <td><input type="number" value="${item.scPwd}" /></td>
          <td><input type="number" value="${item.st}" /></td>
          <td><input type="number" value="${item.stPwd}" /></td>
          <td><input type="number" value="${item.obcNcl}" /></td>
          <td><input type="number" value="${item.obcNclPwd}" /></td>
          <td>
            <button>Edit</button>
          </td>
        `;
      }
      
      tbody.appendChild(row);
    });
  }
  
  async function editVacancy(event) {
    const row = event.target.parentNode.parentNode;
    const branchName = row.cells[0].textContent;
    const vacancyData = {};
  
    // Get the input values from the table cells
    Array.from(row.cells).slice(1, -1).forEach((cell, index) => {
      const category = Object.keys(Vacancy.schema.obj)[index];
      vacancyData[category] = parseInt(cell.children[0].value, 10);
    });
  
    try {
      const response = await fetch(`/api/admin/vacancies/${branchName}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacancyData)
      });
  
      if (response.ok) {
        loadVacancyData();
      } else {
        console.error('Error updating vacancy data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function loadVacancyData() {
    const vacancyTable = document.getElementById('vacancyTable');
  
    try {
      const response = await fetch('/api/admin/vacancies');
      const vacancies = await response.json();
  
      populateTable(vacancyTable, vacancies, 'vacancy');
    } catch (error) {
      console.error('Error loading vacancy data:', error);
    }
  }
  
  async function deleteRequest(rollNo) {
    try {
      const response = await fetch(`/api/admin/delete-request/${rollNo}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        loadAdminData();
      } else {
        console.error('Error deleting request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function publishResults() {
    // Implement logic to publish results
    alert('Results published');
  }