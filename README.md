# FaceX Recognizer

FaceX Recognizer is web based ocr project. Due to which you can use it on any OS. Here you can extract data from image without getting any complication. As we have easy to use UI. To achive ocr functionality I used google vision api.


## How to Start this project

### Step 1: Login to Google Cloud Platform 
 https://console.cloud.google.com/ 

### Step 2: Enable vision api 

  To enable vision api go to "APIs & Services" section. Then click on "Enable APIS & SERVICES" and search for vision api.
  Then click on cloud vision api make it enable if not.
  
### Step 3: Set up Billing

  To use cloud platform services you have to set up billing. But, Don't worry google gives you 1 years free credits to use google apis services.
  You just have to make payment of 1 ruppes. To set up billing.
  
  To set-up billing goto "Billing" section and fill your details to set up billing.
  
### Step 4: Generate ApiKey.json
  
  To Generate ApiKey.json file goto "APIs & Services>Credentials" section.
  Then, click on "Create Credentials>Service account".
  Then, Fill out all the details create done.
  After successful Creating Service Account. goto "APIs & Services>Credentials" section.
  Then, In service account section now you can see one new service acount click on that email.
  Then, Goto "Keys" section. Click on "ADD Key>Create new key" choose key type JSON.
  Then, click on "Create". And save the JSON file with the "ApiKey" name.
  
### Step 5: Update ApiKey.json file
  After downloading "ApiKey.json" file.
  Copy "ApiKey.json" file and replace the file with the file in this Project "ApiKey.json" file.

### Step 6: npm i
    run "npm i" command to install all the essential packages to run the project.
    
### Step 7: npm start
    run "npm start" command to run the expressJS server.
    Then,After Server starts successfully. Open http://localhost:5000/.


## To See Live Project Open link given below
  https://face-x-recognizer.herokuapp.com/
  
