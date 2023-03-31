// Name: Steven Nazaroff
// Email: stn223@lehigh.edu
// Class number: CSE 264
// Assignment number/name: hw5


  $.ajax("/users",{
    type: "GET",
    processData: true,
    dataType: "json",
    success: function (data){
      console.log('AJAX success:', data);
      $('#content').html('<h1>Server Response</h1><p>' + data + '</p>');
    },
    error: function (jqXHR, textStatus, errorThrown) {  //if there is an error
      alert("Error: " + jqXHR.responseText);
      alert("Error: " + textStatus);
      alert("Error: " + errorThrown);
    }
  });