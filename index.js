function debug(e){
  alert('Evento: ' + e.type);
}
function abrir(){
  document.getElementById('poupap').style.display = 'block';
}
function ver(){
  document.getElementById('aparecer1').style.display = 'block';

}
$(document).ready(function () {
  setTimeout(function () {
      $('#aparecer1').fadeOut(1500);
  }, 5000);
});

$(document).ready(function() {
  var count =0;
  var badge = $('#valoratualinformado');
  badge.text(count);
  $(document).on('click', '#valoratualadd', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#valoratualremovido', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
})
$(document).ready(function() {
  var count =0;
  var badge = $('#mobileatualvalor');
  badge.text(count);
  $(document).on('click', '#mobileatualadd', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#mobileatualremove', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 









$(document).ready(function() {
  var count =0;
  var badge = $('#mobileatualvalor1');
  badge.text(count);
  $(document).on('click', '#mobileatualadd1', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#mobileatualremove1', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
















$(document).ready(function() {
  var count =0;
  var badge = $('#valoratualinformado1');
  badge.text(count);
  $(document).on('click', '#valoratualadd1', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#valoratualremovido1', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
























$(document).ready(function() {
  var count =0;
  var badge = $('#carrinhoIndex');
  badge.text(count);
  $(document).on('click', '#buttonAdd', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonAddRemover', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
$(document).ready(function() {
  var count =0;
  var badge = $('#carrinhoIndex1');
  badge.text(count);
  $(document).on('click', '#buttonAdd1', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonAddRemover1', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
$(document).ready(function() {
  var count = 0;
  var badge = $('#carrinhoIndex2');
  badge.text(count);
  $(document).on('click', '#buttonAdd2', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonAddRemover2', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
})
$(document).ready(function() {
  var count = 0;
  var badge = $('#carrinhoIndexMobile');
  badge.text(count);
  $(document).on('click', '#buttonAddMobile', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonRemoveMobile', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
$(document).ready(function() {
  var count = 0;
  var badge = $('#carrinhoIndexMobile1');
  badge.text(count);
  $(document).on('click', '#buttonAddMobile1', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonRemoveMobile1', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 
$(document).ready(function() {
  var count = 0;
  var badge = $('#carrinhoIndexMobile2');
  badge.text(count);
  $(document).on('click', '#buttonAddMobile2', function(e){
    e.preventDefault;
    count++;
    badge.text(count)
    });
    $(document).on('click', '#buttonRemoveMobile2', function(e){
      e.preventDefault;
      count--;
      badge.text(count)
      });
}) 

