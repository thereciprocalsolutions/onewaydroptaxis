 var firebaseConfig = {
    apiKey: "AIzaSyCKf3WDN2lizGP0_s9sk8zIvLrTPAusCfg",
    authDomain: "onewaytaxibookingform.firebaseapp.com",
    databaseURL: "https://onewaytaxibookingform.firebaseio.com",
    projectId: "onewaytaxibookingform",
    storageBucket: "onewaytaxibookingform.appspot.com",
    messagingSenderId: "395128137252",
    appId: "1:395128137252:web:c15b8624c5880034751ab1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);  
 // firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('book');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var pickuplocation = getInputVal('pickuplocation');
    var pickuptime = getInputVal('pickuptime');
    var droplocation = getInputVal('droplocation');
    var cars = getInputVal('cars');
    var time = getInputVal('time');
    var Service = getInputVal('Service');
  
  
    // Save message
    saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars, time, Service);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },2000);
    
    //window.open('bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, pickuplocation,  pickuptime, droplocation, cars, time, Service){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      pickuplocation:pickuplocation,
      pickuptime:pickuptime,
      droplocation:droplocation,
      cars:cars,
      time:time,
      Service:Service

    });
  }