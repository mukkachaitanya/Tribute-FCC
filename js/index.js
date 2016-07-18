$('li').each(function() {
  var $p = $(this);
  $p.html($p.html().replace(/^(\w+)/, '<span style="color: red;"><strong>$1</strong></span>'));
});
