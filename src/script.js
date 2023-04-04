  
  
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