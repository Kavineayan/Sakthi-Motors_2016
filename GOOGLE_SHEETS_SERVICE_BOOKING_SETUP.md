# SAKTHI MOTORS — Service Booking Setup Guide (Google Sheets + Email Notification)

This guide provides the complete, step-by-step setup to connect the **SERVICE BOOKING** section on `services.html` to a private Google Sheet and receive automatic email alerts at `sakthimotors2016@gmail.com` every time a customer books a service.

---

## Highlights of this Implementation
- **100% Free Forever**: Hosted directly on your Google Workspace / Gmail account using Google Sheets and Google Apps Script.
- **Zero Third-Party Dependencies**: No paid forms or external subscription services required.
- **Direct Dealership Notifications**: Automated email alert arrives instantly in `sakthimotors2016@gmail.com` with one-tap calling to customer mobile numbers.
- **Centralized Ledger**: Every appointment is logged chronologically in your spreadsheet for follow-ups and service history tracking.

---

## Step 1: Create the Google Spreadsheet

1. Open your browser and navigate to [Google Sheets](https://sheets.new) (sign in with `sakthimotors2016@gmail.com` or your dealership administrative account).
2. Name the spreadsheet: **`SAKTHI MOTORS - SERVICE BOOKINGS`**
3. In **Row 1** of Sheet 1, enter the following 10 column headers:

| Col | Header Name | Description |
| :---: | :--- | :--- |
| **A** | **Booking Timestamp** | Date and time the customer submitted the form |
| **B** | **Customer Name** | Full name of the bike owner |
| **C** | **Mobile Number** | 10-digit Indian phone number |
| **D** | **Registration Number** | Vehicle number (e.g., TN 57 AB 1234) |
| **E** | **Vehicle Model** | Selected Bajaj model or custom entry |
| **F** | **Other Model Details** | Specified model if "Other" was chosen |
| **G** | **Service Type** | First, Second, Third, Paid, or Accident Service |
| **H** | **Preferred Service Date** | Date requested by customer (YYYY-MM-DD) |
| **I** | **Operating Hours** | Dealership service hours for the chosen day |
| **J** | **Status** | Initialized as `New Request` (Change to Confirmed/Completed) |

*(Tip: You can highlight Row 1, set the background color to `#1C2C5A` (dealership navy), text color to white, and bold the text).*

---

## Step 2: Add Google Apps Script Backend

1. In your Google Sheet top menu, click **Extensions** → **Apps Script**.
2. A new tab will open with the script editor.
3. Rename the project in the top left from *Untitled project* to **`Sakthi Motors Service Booking Web App`**.
4. Delete all default text inside the `Code.gs` window, and paste the following code:

```javascript
/**
 * SAKTHI MOTORS - SERVICE BOOKING BACKEND WEB APP
 * Handles POST requests from services.html, appends rows to Google Sheet,
 * and sends instant email notification to sakthimotors2016@gmail.com.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for other concurrent executions to finish
  lock.tryLock(30000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rawData = e.postData ? e.postData.contents : "{}";
    var data = JSON.parse(rawData);

    // Format timestamp in Indian Standard Time (IST)
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    // 1. APPEND ROW TO GOOGLE SPREADSHEET
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.mobile || "",
      data.registration || "",
      data.model || "",
      data.otherModel || "",
      data.serviceType || "",
      data.serviceDate || "",
      data.serviceHours || "",
      data.status || "New Request"
    ]);

    // 2. SEND NOTIFICATION EMAIL TO SAKTHI MOTORS DEALERSHIP INBOX
    var recipient = "sakthimotors2016@gmail.com";
    var subject = "🏍️ Service Booking: " + (data.name || "Customer") + " - " + (data.registration || "") + " (" + (data.serviceType || "") + ")";

    var emailHtml =
      "<div style='font-family: Arial, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);'>" +
        "<div style='background-color: #1C2C5A; color: #ffffff; padding: 22px 24px; text-align: center; border-bottom: 3px solid #006DE1;'>" +
          "<h1 style='margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;'>SAKTHI MOTORS</h1>" +
          "<p style='margin: 6px 0 0; font-size: 13px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1px;'>New Service Appointment Request</p>" +
        "</div>" +
        "<div style='padding: 24px; background-color: #ffffff; color: #1e293b;'>" +
          "<p style='margin: 0 0 16px; font-size: 15px;'>A customer has submitted a new motorcycle service booking through your website:</p>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;'>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 38%; color: #475569;'>Customer Name</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1C2C5A;'>" + (data.name || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Mobile Number</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700;'>" +
                "<a href='tel:" + (data.mobile || "") + "' style='color: #006DE1; text-decoration: none;'>📞 " + (data.mobile || "N/A") + "</a>" +
              "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Vehicle Reg. Number</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace; font-size: 15px; font-weight: 700; color: #006DE1;'>" + (data.registration || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Vehicle Model</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;'>" + (data.model || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Service Type</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #d97706;'>" + (data.serviceType || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Preferred Date</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1e293b;'>" + (data.serviceDate || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Working Hours</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #475569;'>" + (data.serviceHours || "N/A") + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style='padding: 10px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #475569;'>Received At</td>" +
              "<td style='padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b;'>" + timestamp + "</td>" +
            "</tr>" +
          "</table>" +
          "<div style='background-color: #eff6ff; border-left: 4px solid #006DE1; padding: 12px 16px; border-radius: 4px; margin-bottom: 18px;'>" +
            "<p style='margin: 0; font-size: 13px; color: #1e3a8a; line-height: 1.5;'>" +
              "<strong>Next Action:</strong> Contact the customer at <a href='tel:" + (data.mobile || "") + "' style='color: #006DE1; font-weight: bold;'>" + (data.mobile || "") + "</a> to confirm slot availability and service bay allocation." +
            "</p>" +
          "</div>" +
          "<p style='margin: 0; font-size: 12px; color: #94a3b8; text-align: center;'>" +
            "Sent automatically from Sakthi Motors Official Website (services.html)" +
          "</p>" +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: emailHtml
    });

    // 3. RETURN SUCCESSFUL JSON RESPONSE
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Service booking recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

5. Click the floppy disk icon (💾 **Save project**) or press `Ctrl + S`.

---

## Step 3: Deploy as a Web App

1. In the top right corner of the Apps Script window, click the blue **Deploy** button → **New deployment**.
2. In the modal that appears, click the gear icon (⚙️) next to *Select type* and choose **Web app**.
3. Fill out the deployment configuration:
   - **Description**: `Sakthi Motors Service Booking v1`
   - **Execute as**: **`Me (your_email@gmail.com)`** *(Important: Leave this as "Me")*
   - **Who has access**: **`Anyone`** *(Important: Must be "Anyone" so website visitors can submit the form without needing to sign into Google)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click **Authorize access**.
   - Select your Google account.
   - Click **Advanced** (in small grey text at the bottom left).
   - Click **Go to Sakthi Motors Service Booking Web App (unsafe)**.
   - Click **Allow** to give the script permission to write to your Sheet and send emails on your behalf.
6. Once authorization finishes, Google will display your **Web App URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Click **Copy** to copy this URL.

---

## Step 4: Link Web App URL to Website

1. Open `script.js` in your project folder.
2. Locate line 31 near the top:
   ```javascript
   const SERVICE_BOOKING_API = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `"YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"` with your copied Web App URL:
   ```javascript
   const SERVICE_BOOKING_API = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
4. Save `script.js` (and make sure `js/script.js` is updated as well).

---

## Step 5: Test the Integration

1. Open `services.html` in your browser.
2. Scroll to the **SERVICE BOOKING** section (or click "BOOK SERVICE").
3. Fill in:
   - Name: `Test Customer`
   - Mobile: `9384946001`
   - Registration Number: `TN 57 AB 1234`
   - Model: Select `Pulsar NS 400Z`
   - Service Type: `First Service`
   - Preferred Date: Select tomorrow's date
4. Click **BOOK SERVICE**.
5. Verification:
   - Form shows button spinner `SUBMITTING...`.
   - On completion, the form is replaced with the green card: **`SERVICE REQUEST RECEIVED`**.
   - Check your Google Sheet: A new row should appear with all 10 columns filled.
   - Check `sakthimotors2016@gmail.com`: A styled booking alert email should be in your inbox.
