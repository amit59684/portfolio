# 📊 Google Sheets Integration Setup Guide

Follow these steps to set up Google Sheets integration for your portfolio contact form.

## 🚀 Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name your spreadsheet: **"Portfolio Contact Submissions"**
4. **Copy the Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit#gid=0
   ```
   The ID is the long string between `/d/` and `/edit`

## ⚙️ Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default code in `Code.gs`
4. Copy and paste the entire content from `google-sheets-script.gs` (created above)
5. **Replace the configuration**:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Paste your actual spreadsheet ID
   ```

## 🔧 Step 3: Deploy the Script

1. In Google Apps Script, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to "Type"
3. Select **"Web app"**
4. Configure the deployment:
   - **Description**: "Portfolio Contact Form"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **"Deploy"**
6. **Copy the Web App URL** (it looks like):
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## 🔑 Step 4: Update Your Portfolio

1. Create a `.env` file in your project root (if it doesn't exist):
   ```bash
   # .env file
   REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. **Replace `YOUR_SCRIPT_ID`** with the actual script ID from step 3

## 🧪 Step 5: Test the Integration

1. **Test the script directly**:
   - In Google Apps Script, run the `testScript()` function
   - Check if a test row appears in your Google Sheet

2. **Test the contact form**:
   - Fill out and submit your portfolio contact form
   - Check your Google Sheet for the new submission
   - Check your email for the notification

## 📋 What Your Google Sheet Will Look Like

| Timestamp | Name | Email | Phone | Message | Status |
|-----------|------|-------|-------|---------|--------|
| 2024-01-15 10:30:25 | John Doe | john@example.com | +1234567890 | Hello, I'd like to work with you! | New |

## 🔒 Security Features

✅ **Automatic email notifications** to your Gmail  
✅ **Timestamped submissions** for tracking  
✅ **Status column** for managing leads  
✅ **Auto-formatted headers** for readability  
✅ **Error handling** for failed submissions  

## 🛠️ Optional Customizations

### Add More Columns
You can modify the script to capture additional data:
```javascript
// In the doPost function, add more fields:
const rowData = [
  timestamp,
  formData.name || '',
  formData.email || '',
  formData.phone || '',
  formData.message || '',
  formData.company || '', // Add company field
  formData.budget || '',  // Add budget field
  'New'
];
```

### Change Email Template
Modify the `sendEmailNotification` function to customize the email format.

### Add Auto-Reply
You can add an auto-reply feature to send confirmation emails to form submitters.

## 🚨 Troubleshooting

### Form submissions not appearing in sheet?
1. Check if the script URL is correct in your `.env` file
2. Ensure the script is deployed as a web app with "Anyone" access
3. Check the script execution logs in Google Apps Script

### Not receiving email notifications?
1. Verify your email address in the script
2. Check your spam folder
3. Ensure Gmail API permissions are granted

### CORS errors?
The script automatically handles CORS headers, but make sure:
1. The script is deployed as a web app (not just saved)
2. Access is set to "Anyone"

## 🎉 You're All Set!

Your contact form will now:
- ✅ Save all submissions to Google Sheets
- ✅ Send you email notifications instantly
- ✅ Include phone numbers in submissions
- ✅ No longer require the subject field

**Need help?** Check the browser console for any error messages or test the script URL directly in your browser. 