/**
 * DEBUG VERSION - Google Apps Script for Portfolio Contact Form
 * This version provides detailed error reporting
 */

// Configuration - Replace with your actual values
const SHEET_NAME = 'Contact Submissions';
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // REPLACE THIS!

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Log all received data for debugging
    console.log('Received POST request');
    console.log('Parameters:', e.parameter);
    console.log('Post data:', e.postData);
    
    // Handle form data
    let formData;
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      formData = e.parameter;
      console.log('Using parameter data');
    } else if (e.postData && e.postData.contents) {
      console.log('Using postData contents');
      try {
        formData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        console.log('JSON parse failed, trying URL decode');
        const formEntries = e.postData.contents.split('&');
        formData = {};
        formEntries.forEach(entry => {
          const [key, value] = entry.split('=');
          if (key && value) {
            formData[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
          }
        });
      }
    } else {
      throw new Error('No form data received');
    }
    
    console.log('Processed form data:', formData);
    
    // Check if spreadsheet ID is set
    if (SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID_HERE') {
      throw new Error('SPREADSHEET_ID not configured! Please update the script with your actual spreadsheet ID.');
    }
    
    // Try to open the spreadsheet
    console.log('Attempting to open spreadsheet:', SPREADSHEET_ID);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet opened successfully');
    
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      console.log('Sheet not found, creating new sheet:', SHEET_NAME);
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
      
      console.log('Headers added to new sheet');
    }
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      formData.name || 'No name provided',
      formData.email || 'No email provided',
      formData.phone || 'No phone provided',
      formData.message || 'No message provided',
      'New'
    ];
    
    console.log('Adding row data:', rowData);
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    console.log('Row added successfully');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 6);
    
    // Try to send email notification
    try {
      sendEmailNotification(formData, timestamp);
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }
    
    // Return success response
    const response = {
      status: 'success',
      message: 'Form submitted successfully',
      timestamp: timestamp.toISOString(),
      data: formData
    };
    
    console.log('Returning success response:', response);
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    const errorResponse = {
      status: 'error',
      message: 'Failed to submit form: ' + error.toString(),
      timestamp: new Date().toISOString(),
      details: error.stack
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  const response = {
    status: 'success',
    message: 'Contact form endpoint is working',
    timestamp: new Date().toISOString(),
    spreadsheetConfigured: SPREADSHEET_ID !== 'YOUR_SPREADSHEET_ID_HERE'
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
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
    
    GmailApp.sendEmail(
      'amitadhikary59684@gmail.com',
      subject,
      body
    );
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
}

/**
 * Test function with better debugging
 */
function testScript() {
  console.log('Running test script...');
  console.log('Spreadsheet ID:', SPREADSHEET_ID);
  
  if (SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID_HERE') {
    console.error('ERROR: Spreadsheet ID not configured!');
    return;
  }
  
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message from the script.',
      timestamp: new Date().toISOString()
    }
  };
  
  console.log('Test data:', testData);
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
} 