// ========== appointment.js ==========
// Complete Appointment Page Functionality

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAppointment);
  } else {
    initAppointment();
  }

  function initAppointment() {
    // Generate time slots
    generateTimeSlots();
    
    // Doctor selection
    const doctorCards = document.querySelectorAll('.doctor-card');
    const selectedDoctorDisplay = document.getElementById('selectedDoctorDisplay');
    let selectedDoctor = null;
    
    doctorCards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove selected class from all cards
        doctorCards.forEach(c => c.classList.remove('selected'));
        
        // Add selected class to clicked card
        this.classList.add('selected');
        
        // Get doctor info
        const doctorName = this.querySelector('.doctor-name').textContent;
        const doctorSpecialty = this.querySelector('.doctor-specialty').textContent;
        
        // Update selected doctor display
        selectedDoctorDisplay.innerHTML = `<i class="fas fa-user-md"></i><span>${doctorName} - ${doctorSpecialty}</span>`;
        
        // Store selected doctor
        selectedDoctor = { name: doctorName, specialty: doctorSpecialty };
        
        // Add animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
      
      // Add hover animation
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
          this.style.transform = '';
        }
      });
    });
    
    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(slot => {
      slot.addEventListener('click', function() {
        // Remove selected class from all time slots
        timeSlots.forEach(s => s.classList.remove('selected'));
        
        // Add selected class to clicked slot
        this.classList.add('selected');
        
        // Add animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      });
      
      // Hover effect
      slot.addEventListener('mouseenter', function() {
        if (!this.classList.contains('selected') && !this.classList.contains('disabled')) {
          this.style.transform = 'translateY(-2px)';
        }
      });
      
      slot.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
          this.style.transform = '';
        }
      });
    });
    
    // Form submission
    const appointmentForm = document.getElementById('appointmentForm');
    
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate doctor selection
      if (!selectedDoctor) {
        alert('Please select a doctor');
        return;
      }
      
      // Validate date
      const date = document.getElementById('appointmentDate').value;
      if (!date) {
        alert('Please select a date');
        return;
      }
      
      // Validate time slot
      const selectedTimeSlot = document.querySelector('.time-slot.selected');
      if (!selectedTimeSlot) {
        alert('Please select a time slot');
        return;
      }
      
      // Validate treatment
      const treatment = document.getElementById('treatment').value;
      if (!treatment) {
        alert('Please select a treatment');
        return;
      }
      
      // Validate patient info
      const patientName = document.getElementById('patientName').value;
      const patientAge = document.getElementById('patientAge').value;
      const patientEmail = document.getElementById('patientEmail').value;
      const patientPhone = document.getElementById('patientPhone').value;
      
      if (!patientName || !patientAge || !patientEmail || !patientPhone) {
        alert('Please fill in all required patient information');
        return;
      }
      
      // Get form data
      const formData = {
        doctor: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        date: new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        time: selectedTimeSlot.textContent,
        treatment: document.getElementById('treatment').options[document.getElementById('treatment').selectedIndex].text,
        patientName: patientName,
        patientAge: patientAge,
        patientEmail: patientEmail,
        patientPhone: patientPhone,
        patientAddress: document.getElementById('patientAddress').value,
        patientMessage: document.getElementById('patientMessage').value,
        whatsappUpdates: document.getElementById('whatsappUpdates').checked,
        firstVisit: document.getElementById('firstVisit').checked
      };
      
      // Show success modal
      showSuccessModal(formData);
      
      // Reset form (optional - comment out if you want to keep data)
      // resetForm();
    });
    
    // Reset button
    document.getElementById('resetForm').addEventListener('click', resetForm);
    
    // Date input min value
    const dateInput = document.getElementById('appointmentDate');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    
    // Disable weekends (optional)
    dateInput.addEventListener('change', function() {
      const selectedDate = new Date(this.value);
      const day = selectedDate.getDay();
      
      // Disable Sundays (0) and Saturdays (6) if needed
      if (day === 0) {
        alert('Appointments are not available on Sundays. Please select another day.');
        this.value = '';
      }
    });
  }
  
  // Generate time slots
  function generateTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    const slots = [
      '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
      '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
    ];
    
    timeSlotsContainer.innerHTML = '';
    
    slots.forEach((slot, index) => {
      const slotElement = document.createElement('div');
      slotElement.className = 'time-slot';
      slotElement.textContent = slot;
      
      // Disable some slots randomly for demo
      if (index === 3 || index === 8 || index === 12 || index === 15) {
        slotElement.classList.add('disabled');
        slotElement.title = 'Already booked';
      }
      
      timeSlotsContainer.appendChild(slotElement);
    });
  }
  
  // Reset form
  function resetForm() {
    // Remove selected doctor
    document.querySelectorAll('.doctor-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('selectedDoctorDisplay').innerHTML = '<i class="fas fa-user-md"></i><span>No doctor selected</span>';
    
    // Reset date
    document.getElementById('appointmentDate').value = '';
    
    // Remove selected time slot
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
    
    // Reset treatment
    document.getElementById('treatment').value = '';
    
    // Reset patient info
    document.getElementById('patientName').value = '';
    document.getElementById('patientAge').value = '';
    document.getElementById('patientEmail').value = '';
    document.getElementById('patientPhone').value = '';
    document.getElementById('patientAddress').value = '';
    document.getElementById('patientMessage').value = '';
    
    // Reset checkboxes
    document.getElementById('whatsappUpdates').checked = false;
    document.getElementById('firstVisit').checked = true;
    
    // Add animation
    const form = document.getElementById('appointmentForm');
    form.style.transform = 'scale(0.98)';
    form.style.opacity = '0.5';
    setTimeout(() => {
      form.style.transform = '';
      form.style.opacity = '';
    }, 300);
  }
  
  // Show success modal
  function showSuccessModal(data) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.modal-overlay');
    
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }
    
    // Modal content
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-icon">
          <i class="fas fa-check"></i>
        </div>
        <h2 class="modal-title">Appointment Confirmed!</h2>
        <p class="modal-message">Your appointment has been successfully scheduled.</p>
        <div class="modal-details">
          <div class="modal-detail-item">
            <i class="fas fa-user-md"></i>
            <span>${data.doctor}</span>
          </div>
          <div class="modal-detail-item">
            <i class="fas fa-calendar-alt"></i>
            <span>${data.date}</span>
          </div>
          <div class="modal-detail-item">
            <i class="fas fa-clock"></i>
            <span>${data.time}</span>
          </div>
          <div class="modal-detail-item">
            <i class="fas fa-tooth"></i>
            <span>${data.treatment}</span>
          </div>
          <div class="modal-detail-item">
            <i class="fas fa-user"></i>
            <span>${data.patientName}</span>
          </div>
        </div>
        <button class="modal-close">Great, Thanks!</button>
      </div>
    `;
    
    // Show modal
    setTimeout(() => {
      modal.classList.add('active');
    }, 100);
    
    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', function() {
      modal.classList.remove('active');
      
      // Reset form after closing
      setTimeout(() => {
        resetForm();
      }, 300);
    });
    
    // Close on overlay click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => {
          resetForm();
        }, 300);
      }
    });
  }
})();