var form = document.querySelector('#searchForm');

function queryOMDB(){
   
    var omdbStub = 'http//www.omdbapi.com/?apikey=593dbd9c&t=' + movieInput;
   
   fetch(omdbStub)
   .then(function(response) {
    return response.json
   })
   .then(function(data) {
    console.log(data);
    console.log(data.Title);
   })
}


form.addEventListener('submit', getUserInput());

function getUserInput(event){
    event.preventDeafult();

    var formInput = document.querySelector('#searchBar').value;

    formInput = formInput.trim();

    console.log(formInput);

    queryOMDB(formInput);
}