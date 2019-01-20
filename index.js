$(function(){
    //user clicks add item
    $("#js-shopping-list-form").submit(event => {
      event.preventDefault();
      const userEntry = $(this).find('#shopping-list-entry');
      $('.shopping-list').append(
        "<li>" +
          '<span class="shopping-item">' + userEntry.val() + '</span>'+
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
         "</li>"
      );
    });
    //user clicks check
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
      $(this).closest('li').children().first().toggleClass('shopping-item__checked');
    });
    //user clicks delete
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      $(this).closest( "li" ).remove();
    });
  });
  
  