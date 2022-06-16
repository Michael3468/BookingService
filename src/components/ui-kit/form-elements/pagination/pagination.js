/* eslint-disable no-undef */
import 'paginationjs/dist/pagination';
import '../../cards/room-card/roomCard';

import roomCard from '../../cards/room-card/room-card-template.pug';
import data from '../../../../assets/json/rooms.json';

import './pagination.scss';

function simpleTemplating(rooms) {
  let html = '';
  $.each(rooms, function (index, room) {
    const locals = {
      room,
    };
    html += roomCard(locals);
  });
  return html;
}

function initSlickSlider() {
  $('.js-slick-picture').slick({
    dots: true,
  });
}

function initFooter(currentPage, pSize) {
  const pageSize = pSize;
  const prevPage = currentPage - 1;
  let fromPage;
  const toPage = currentPage * pageSize;

  if (currentPage === 1) {
    fromPage = currentPage;
  } else {
    fromPage = prevPage * pageSize + 1;
  }
  return `<div class = paginationjs-pages-footer>${fromPage} - ${toPage} из 100+ вариантов аренды</div>`;
}

function initPagination() {
  const pSize = 12;
  const container = $('.js-pagination-container');

  const config = {
    dataSource: data,
    pageSize: pSize,
    pageNumber: 1,
    pageRange: 1,
    locator: 'rooms',
    autoHidePrevious: true,
    autoHideNext: true,
    prevText: '',
    nextText: '',
    footer: (currentPage) => {
      return initFooter(currentPage, pSize);
    },
    callback(rooms) {
      var html = simpleTemplating(rooms);
      $('.search-room-room-cards__grid-layout').html(html);
    },
  };

  container.pagination(config);
  container.addHook('afterPaging', initSlickSlider);
}

window.addEventListener('DOMContentLoaded', () => {
  initPagination();
  initSlickSlider();
});
