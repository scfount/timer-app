
$(function(){

  $('.custom-checkbox #all').click(function(){
    if (this.checked) {
      $('.custom-control-input').each(function () {
        $(this).prop('checked', true);
      });
    } else { 
      $('.custom-control-input').each(function () {
        $(this).prop('checked', false);
      });
    }
  });

  



});