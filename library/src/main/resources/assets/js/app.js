$(":button").click(function() {
        var isbn = this.id;
        var url1 = "v1/books/"+isbn+"?status=lost"
        var buttonNow = ':button#'+isbn;
        
                  $.ajax({
                  url: url1 ,
                  type: 'PUT',
                  success: function(data) {
                          alert('About to report lost on ISBN ' + isbn);
                         
                         location.reload();
                         
                  }
               
                });
               
              $(buttonNow).attr("disabled", true);
});    

  /* on page reload */    
$(document).ready(function() {
    var books = document.getElementById("books");
    for (var i = 0, row; row = books.rows[i]; i++) {
            var bookStatus=books.rows[i].cells[4].innerHTML;
            if (bookStatus=="lost")
            {
                    var newIsbn=books.rows[i].cells[0].innerHTML;
                    document.getElementById(newIsbn).disabled = true;
            }
    }

	
});    





