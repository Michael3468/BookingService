/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import 'paginationjs/dist/pagination';
import '../../cards/room-card/roomCard';

import roomCard from '../../cards/room-card/room-card-template.pug';
import data from '../../../../assets/json/rooms.json';

import './pagination.scss';

class Pagination {
  constructor() {
    this._addListeners();
    this._simpleTemplating = this._simpleTemplating.bind(this);
    this._initPagination = this._initPagination.bind(this);
  }

  _addListeners() {
    window.addEventListener('DOMContentLoaded', () => {
      this._initPagination();
      this._initSlickSlider();
    });
  }

  _initPagination() {
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
      footer: (currentPage) => this._initFooter(currentPage, pSize),
      callback: (rooms) => {
        const html = this._simpleTemplating(rooms);
        $('.search-room-room-cards__grid-layout').html(html);
      },
    };

    container.pagination(config);
    container.addHook('afterPaging', this._initSlickSlider);
  }

  _initSlickSlider() {
    $('.js-slick-picture').slick({
      dots: true,
    });
  }

  _initFooter(currentPage, pSize) {
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

  _simpleTemplating(rooms) {
    let html = '';
    $.each(rooms, (index, room) => {
      const locals = {
        room,
      };
      html += roomCard(locals);
    });
    return html;
  }
}

export default Pagination;
