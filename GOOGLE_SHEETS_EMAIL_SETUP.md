# SAKTHI MOTORS — Contact Form Setup (Google Sheets + Email Notification)

This guide shows you how to receive inquiries from the **"SEND US A MESSAGE"** contact form directly into a **Google Sheet** (Row-by-Row Lead Tracker) and simultaneously send an **Instant Email Notification** to `sakthimotors2016@gmail.com`.

This solution is:
- **100% Free Forever** (No third-party subscription or server required).
- **Automated**: Every time a customer submits the form, a new row is added in your spreadsheet, and a branded notification email with the customer's phone number and message arrives in your inbox.

---

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.new) while logged into your Google account (`sakthimotors2016@gmail.com` or your personal Google account).
2. Name the spreadsheet: **`Sakthi Motors Website Leads`**.
3. In **Row 1**, set up these 6 column headers:

| A | B | C | D | E | F |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Date & Time** | **Customer Name** | **Phone Number** | **Email Address** | **Interested Motorcycle** | **Message** |

*(You can bold Row 1 and give it a background color for easy viewing).*

---

## Step 2: Add the Google Apps Script

1. In your Google Sheet menu bar at the top, click **Extensions** → **Apps Script**.
2. A new code editor tab will open with a file named `Code.gs`.
3. Delete any default code inside `Code.gs`, and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 1. SAVE NEW INQUIRY ROW TO GOOGLE SHEET
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.customerName,
      data.phone,
      data.email,
      data.interestedMotorcycle,
      data.message
    ]);

    // 2. SEND INSTANT EMAIL NOTIFICATION TO DEALERSHIP INBOX
    var recipient = "sakthimotors2016@gmail.com";
    var subject = "🏍️ New Customer Lead: " + data.customerName + " (" + data.interestedMotorcycle + ")";

    var emailHtml =
      "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;'>" +
        "<div style='background-color: #004DA8; color: #ffffff; padding: 20px; text-align: center;'>" +
          "<h2 style='margin: 0; font-size: 20px;'>SAKTHI MOTORS</h2>" +
          "<p style='margin: 5px 0 0; font-size: 14px;'>New Website Inquiry Received</p>" +
        "</div>" +
        "<div style='padding: 24px; background-color: #ffffff; color: #1E2B56;'>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 15px;'>" +
            "<tr><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%;'>Customer Name:</td><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #004DA8; font-weight: bold;'>" + data.customerName + "</td></tr>" +
            "<tr><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Phone Number:</td><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'><a href='tel:" + data.phone + "' style='color: #004DA8; text-decoration: none; font-weight: bold;'>" + data.phone + "</a></td></tr>" +
            "<tr><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Email:</td><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9;'>" + (data.email || "Not provided") + "</td></tr>" +
            "<tr><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Interested Bike:</td><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>" + data.interestedMotorcycle + "</td></tr>" +
            "<tr><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;'>Date & Time:</td><td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;'>" + data.timestamp + "</td></tr>" +
            "<tr><td style='padding: 12px 0 0; font-weight: bold; vertical-align: top;'>Message:</td><td style='padding: 12px 0 0; color: #334155; line-height: 1.5;'>" + data.message + "</td></tr>" +
          "</table>" +
          "<div style='margin-top: 24px; text-align: center;'>" +
            "<a href='tel:" + data.phone + "' style='background-color: #004DA8; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; margin-right: 10px;'>📞 Call Customer</a>" +
            "<a href='https://wa.me/91" + data.phone + "' style='background-color: #25D366; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;'>💬 WhatsApp Customer</a>" +
          "</div>" +
        "</div>" +
        "<div style='background-color: #f8fafc; padding: 12px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;'>" +
          "Sakthi Motors Dealership Lead • Chinnamanur, Theni" +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: emailHtml
    });

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (<i class="fa-solid fa-floppy-disk"></i> or press `Ctrl + S`).

---

## Step 3: Deploy as a Web App

1. At the top right of the Apps Script window, click the blue **Deploy** button → select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Sakthi Motors Contact Form Web App`
   - **Execute as**: **Me (`your-google-account@gmail.com`)**
   - **Who has access**: **Anyone** *(Important: Choose "Anyone" so the public website can submit form data)*
4. Click **Deploy**.
5. Google will ask you to authorize permissions:
   - Click **Authorize access**.
   - Select your Google account.
   - Click **Advanced** (at the bottom of the security warning) → Click **Go to Sakthi Motors (unsafe)**.
   - Click **Allow**.
6. Google will give you a **Web app URL** that looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Click **Copy** to copy this URL.

---

## Step 4: Paste Your Web App URL into Website Code

1. Open your project file:
   [`sakthi-motors/script.js`](file:///C:/Users/KAVIN%20NEYAN/.gemini/antigravity/scratch/sakthi-motors/script.js)
2. Go to line **1166**:
   ```javascript
   const FORM_ENDPOINT = "";
   ```
3. Paste your copied Google Web App URL inside the quotes:
   ```javascript
   const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```
4. Save `script.js` (`Ctrl + S`).

---

## Step 5: Test It!

1. Open [`sakthi-motors/contact.html`](file:///C:/Users/KAVIN%20NEYAN/.gemini/antigravity/scratch/sakthi-motors/contact.html) in your browser.
2. Fill out the **SEND US A MESSAGE** form with test details:
   - Full Name: `Kavin Test`
   - Phone Number: `9384946001`
   - Email: `test@gmail.com`
   - Interested Motorcycle: `Pulsar N160`
   - Message: `Testing Google Sheets and email integration.`
3. Click **SEND MESSAGE**.
4. Check your Google Sheet: A new row appears automatically!
5. Check your Gmail (`sakthimotors2016@gmail.com`): You will see the incoming email with one-click **Call Customer** and **WhatsApp Customer** buttons!
