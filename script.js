//Create a request variable

var request1 = new XMLHttpRequest();


//Create a new Connection for rest countries

request1.open('GET', "https://restcountries.eu/rest/v2/all", true); 


getTemperature = (country) => {
    
// Create a new request variable for Weather data
    var request2 = new XMLHttpRequest();
  
//Get latitude and longitude data from argument
    let lat = country.latlng[0];
    let long = country.latlng[1];
    
    let apiKey = "c0e1fbd20a0db246023e19f29593c62c";  
    
    let apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
//Create a new connection for Weather data    

    request2.open('GET', apiCall, true);

    //Send the Connection

    request2.send();

    //Registering event listener and retrieving data
    request2.onload = () => {
        
        let weatherData = JSON.parse(this.response);
        return weatherData;

    }



}


//3.Send the Connection

request1.send();

//4. Register an event listener,once the data is ready,the function will be executed

request1.onload = function () {
    
  //let countryData = JSON.parse(this.response);
  try {
    
    let countryData = JSON.parse(this.response);
    if (countryData.length !== 250)
    {
      throw new SyntaxError('incomplete countries data');
      }

    for (i = 0; i < countryData.length; i++)
    console.log(countryData[i].name, getTemperature(countryData[i]));
          
      
  
  }

  catch (error) {
    
    alert('Name:'+ error.name);
    alert('Message'+ error.message);
    alert('Stack'+ error.stack);
    
  }
  
    
    
}