//Sticky header
$(document).ready(function(){
$("#sticky-header").sticky({topSpacing:0, wrapperClassName:"header-wrapper"});
});

//Back to TOC
$(document).ready(function(){
$(".back-to-top").sticky({topSpacing:100});
});

//Back to appendix themes
$(document).ready(function(){
  $(".back-to-top-2").sticky({topSpacing:100, wrapperClassName:"sticky-wrapper-2"});
});

//Return to main article from peer review
$(document).ready(function(){
$(".back-to-article").sticky({topSpacing:100, wrapperClassName:"back-to-article-wrapper"});
});
