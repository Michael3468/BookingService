/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import './pagination.scss';

import 'paginationjs/dist/pagination';

(() => {
  const _pageSize = 12;

  $('#pagination-container').pagination({
    dataSource: (done) => {
      const result = [];
      for (let i = 1; i < 180; i += 1) {
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
    footer: (currentPage) => {
      const pageSize = _pageSize;
      const prevPage = currentPage - 1;
      let fromPage;
      const toPage = currentPage * pageSize;

      if (currentPage === 1) {
        fromPage = currentPage;
      } else {
        fromPage = prevPage * pageSize + 1;
      }
      return `<div class=paginationjs-pages-footer>${fromPage} - ${toPage} из 100+ вариантов аренды</div>`;
    },
    callback: (data) => {
      const html = template(data);
      $('#data-container').html(html);
    },
  });
})();
