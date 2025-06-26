/**
 * Google Apps Script for Portfolio Contact Form
 * This script receives form submissions and writes them to a Google Sheet
 */

// Configuration - Replace with your actual values
const SHEET_NAME = 'Contact Submissions'; // Name of the sheet tab
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Get this from your Google Sheet URL

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    console.log('Received POST request');
    console.log('Event object:', JSON.stringify(e));
    
    let formData = {};
    
    // Handle different ways data can be sent
    if (e && e.parameter) {
      console.log('Using e.parameter');
      formData = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      console.log('Using e.postData.contents');
      try {
        // Try JSON first
        formData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        console.log('JSON parse failed, trying URL decode');
        // Parse URL-encoded data
        const formEntries = e.postData.contents.split('&');
        formEntries.forEach(entry => {
          const [key, value] = entry.split('=');
          if (key && value) {
            formData[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
          }
        });
      }
    } else {
      console.log('No recognizable data format found');
      console.log('Available properties:', Object.keys(e || {}));
      throw new Error('No form data received. Event: ' + JSON.stringify(e));
    }
    
    console.log('Processed form data:', formData);
    
    // Get or create the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Name', 'Email', 'Phone', 'Message', 'Status']
      ]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.message || '',
      'New'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 6);
    
    // Optional: Send email notification to you
    sendEmailNotification(formData, timestamp);
    
    // Return success response with CORS headers
    const output = ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return output;
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response with CORS headers
    const output = ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to submit form: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return output;
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  const output = ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Contact form endpoint is working',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  
  return output;
}

/**
 * Send email notification when a new form is submitted
 */
function sendEmailNotification(formData, timestamp) {
  try {
    const subject = '🚀 New Contact Form Submission - Portfolio';
    const body = `
      Hello Amit,
      
      You have received a new contact form submission on your portfolio website!
      
      📋 SUBMISSION DETAILS:
      ━━━━━━━━━━━━━━━━━━━━━━━━━━
      👤 Name: ${formData.name}
      📧 Email: ${formData.email}
      📱 Phone: ${formData.phone}
      ⏰ Submitted: ${timestamp.toLocaleString()}
      
      💬 MESSAGE:
      ━━━━━━━━━━━━━━━━━━━━━━━━━━
      ${formData.message}
      
      ━━━━━━━━━━━━━━━━━━━━━━━━━━
      
      You can reply directly to ${formData.email} or call them at ${formData.phone}.
      
      Best regards,
      Your Portfolio Contact Form Bot 🤖
    `;
    
    // Send email to yourself
    GmailApp.sendEmail(
      'amitadhikary59684@gmail.com', // Your email address
      subject,
      body
    );
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

/**
 * Test function to verify the script works
 */
function testScript() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message from the script.',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
} 