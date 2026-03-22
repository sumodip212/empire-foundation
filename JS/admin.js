 // Tab functionality
        function showTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
            
            // Load data for the tab
            if (tabName === 'volunteers') loadVolunteers();
            else if (tabName === 'contacts') loadContacts();
            else if (tabName === 'newsletter') loadNewsletter();
            else if (tabName === 'blood') loadBloodDonors();
        }
        
        // Load stats
        async function loadStats() {
            try {
                const response = await fetch('/api/stats');
                const result = await response.json();
                
                if (result.success) {
                    document.getElementById('volunteerCount').textContent = result.data.volunteers || 0;
                    document.getElementById('contactCount').textContent = result.data.contacts || 0;
                    document.getElementById('subscriberCount').textContent = result.data.subscribers || 0;
                    document.getElementById('bloodCount').textContent = result.data.bloodDonors || 0;
                }
            } catch (error) {
                console.error('Error loading stats:', error);
            }
        }
        
        // Load volunteers
        async function loadVolunteers() {
            const container = document.getElementById('volunteersTable');
            
            try {
                const response = await fetch('/api/volunteers');
                const result = await response.json();
                
                if (result.success && result.data.length > 0) {
                    let html = `
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Skills</th>
                                    <th>Availability</th>
                                    <th>Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;
                    
                    result.data.forEach(volunteer => {
                        html += `
                            <tr>
                                <td>${volunteer.id}</td>
                                <td><strong>${volunteer.name}</strong></td>
                                <td>${volunteer.email}</td>
                                <td>${volunteer.phone}</td>
                                <td>${volunteer.city}, ${volunteer.state}</td>
                                <td>${volunteer.skills ? volunteer.skills.join(', ') : 'N/A'}</td>
                                <td>
                                    <span class="status-badge ${volunteer.available ? 'status-available' : 'status-unavailable'}">
                                        ${volunteer.available ? 'Available' : 'Unavailable'}
                                    </span>
                                </td>
                                <td>${volunteer.joinedAt}</td>
                            </tr>
                        `;
                    });
                    
                    html += '</tbody></table>';
                    container.innerHTML = html;
                } else {
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-users"></i>
                            <h3>No Volunteers Yet</h3>
                            <p>Volunteer applications will appear here</p>
                        </div>
                    `;
                }
            } catch (error) {
                container.innerHTML = '<div class="empty-state">Error loading volunteers</div>';
            }
        }
        
        // Load contacts
        async function loadContacts() {
            const container = document.getElementById('contactsTable');
            
            try {
                const response = await fetch('/api/contact');
                const result = await response.json();
                
                if (result.success && result.data.length > 0) {
                    let html = `
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Interest</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;
                    
                    result.data.forEach(contact => {
                        html += `
                            <tr>
                                <td>${contact.id}</td>
                                <td><strong>${contact.name}</strong></td>
                                <td>${contact.email}</td>
                                <td>${contact.phone || 'N/A'}</td>
                                <td>${contact.interest || 'N/A'}</td>
                                <td>${contact.message ? contact.message.substring(0, 50) + '...' : 'N/A'}</td>
                                <td>${new Date(contact.createdAt).toLocaleDateString()}</td>
                            </tr>
                        `;
                    });
                    
                    html += '</tbody></table>';
                    container.innerHTML = html;
                } else {
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-envelope"></i>
                            <h3>No Messages Yet</h3>
                            <p>Contact form submissions will appear here</p>
                        </div>
                    `;
                }
            } catch (error) {
                container.innerHTML = '<div class="empty-state">Error loading contacts</div>';
            }
        }
        
        // Load newsletter
        async function loadNewsletter() {
            const container = document.getElementById('newsletterTable');
            
            try {
                const response = await fetch('/api/newsletter');
                const result = await response.json();
                
                // Since GET /api/newsletter might not exist, we'll try to get from subscribers
                const statsResponse = await fetch('/api/stats');
                const stats = await statsResponse.json();
                
                if (stats.success && stats.data.subscribers > 0) {
                    // Read subscribers.json directly via a workaround
                    // Since no direct API, we'll show stats
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-newspaper"></i>
                            <h3>${stats.data.subscribers} Subscribers</h3>
                            <p>Newsletter subscription data is stored in the backend</p>
                        </div>
                    `;
                } else {
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-newspaper"></i>
                            <h3>No Subscribers Yet</h3>
                            <p>Newsletter subscribers will appear here</p>
                        </div>
                    `;
                }
            } catch (error) {
                container.innerHTML = '<div class="empty-state">Error loading newsletter</div>';
            }
        }
        
        // Load blood donors
        async function loadBloodDonors() {
            const container = document.getElementById('bloodTable');
            
            try {
                const response = await fetch('/api/blood-donors');
                const result = await response.json();
                
                if (result.success && result.data.length > 0) {
                    let html = `
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Blood Type</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th>Last Donated</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;
                    
                    result.data.forEach(donor => {
                        html += `
                            <tr>
                                <td>${donor.id}</td>
                                <td><strong>${donor.name}</strong></td>
                                <td><span style="color: #e63946; font-weight: bold;">${donor.bloodType}</span></td>
                                <td>${donor.phone}</td>
                                <td>${donor.email}</td>
                                <td>${donor.city}, ${donor.state}</td>
                                <td>
                                    <span class="status-badge ${donor.available ? 'status-available' : 'status-unavailable'}">
                                        ${donor.available ? 'Available' : 'Unavailable'}
                                    </span>
                                </td>
                                <td>${donor.lastDonated || 'N/A'}</td>
                            </tr>
                        `;
                    });
                    
                    html += '</tbody></table>';
                    container.innerHTML = html;
                } else {
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-tint"></i>
                            <h3>No Blood Donors Yet</h3>
                            <p>Blood donor registrations will appear here</p>
                        </div>
                    `;
                }
            } catch (error) {
                container.innerHTML = '<div class="empty-state">Error loading blood donors</div>';
            }
        }
        
        // Initial load
        loadStats();
        loadVolunteers();