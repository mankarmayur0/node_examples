const querySearch = document.querySelector('form');
const queryInput = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

querySearch.addEventListener('submit', (e) => {
    e.preventDefault();
    if( !queryInput.value )
        return; 

    // const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+queryInput.value+'.json?access_token=pk.eyJ1IjoibWFua2FybWF5dXIwIiwiYSI6ImNrNGxibXVwajA0MzMzbm81YXVsb3c5cHYifQ.JeELlEf3mE75Cs9IqVTuFA';

    messageOne.textContent = 'fetching forecast...';
    messageTwo.textContent = '';
    fetch('/weather?address='+queryInput.value).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = '';
            if( data.error )
                messageTwo.textContent = data.error;
            else
                messageTwo.textContent = data.forecast;
        });
    });
    
    queryInput.value = '';
})  