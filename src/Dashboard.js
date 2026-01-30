import React, { useState } from 'react';

function Dashboard() {
  const [message, setMessage] = useState({
    type: 'sms',
    recipients: '',
    content: '',
    scheduled: false,
    scheduleTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending message:', message);
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMessage({
      ...message,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Zynco Messaging Dashboard</h1>
        
        <div className="dashboard-grid">
          <div className="message-form">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Message Type</label>
                <select name="type" value={message.type} onChange={handleChange}>
                  <option value="sms">SMS</option>
                  <option value="email">Email</option>
                  <option value="ussd">USSD</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Recipients</label>
                <textarea
                  name="recipients"
                  placeholder="Enter phone numbers or emails (comma separated)"
                  value={message.recipients}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Message Content</label>
                <textarea
                  name="content"
                  placeholder="Enter your message"
                  value={message.content}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="scheduled"
                    checked={message.scheduled}
                    onChange={handleChange}
                  />
                  Schedule Message
                </label>
              </div>
              
              {message.scheduled && (
                <div className="form-group">
                  <label>Schedule Time</label>
                  <input
                    type="datetime-local"
                    name="scheduleTime"
                    value={message.scheduleTime}
                    onChange={handleChange}
                  />
                </div>
              )}
              
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="stats-panel">
            <h3>Message Statistics</h3>
            <div className="stat-card">
              <h4>Messages Sent Today</h4>
              <p className="stat-number">1,247</p>
            </div>
            <div className="stat-card">
              <h4>Delivery Rate</h4>
              <p className="stat-number">98.5%</p>
            </div>
            <div className="stat-card">
              <h4>Credits Remaining</h4>
              <p className="stat-number">5,432</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;