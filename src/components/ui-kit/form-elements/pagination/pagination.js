import './pagination.scss';

//- http://pagination.js.org
import 'paginationjs/dist/pagination';


$(function(){

  const _pageSize = 12;

  $('#pagination-container').pagination({
    dataSource: function(done){
      var result = [];
      for (var i = 1; i < 180; i++) {
          result.push(i);
      }
      done(result);
    },
    pageSize: _pageSize,
    pageNumber: 1,
    pageRange: 1,
    autoHidePrevious: true,
    autoHideNext: true,
    prevText: '',
    nextText: '',
    footer: function(currentPage) {
      var pageSize = _pageSize;
      var prevPage = currentPage - 1;
      var fromPage;
      var toPage = currentPage * pageSize;

      if (currentPage == 1) {
        fromPage = currentPage;
      } else {
        fromPage = prevPage * pageSize + 1;
      }
      return '<div class=paginationjs-pages-footer>' + fromPage + ' - ' + toPage + ' из 100+ вариантов аренды</div>';
    },
    callback: function(data, pagination) {
        var html = template(data);
        $('#data-container').html(html);
    }
  })

});