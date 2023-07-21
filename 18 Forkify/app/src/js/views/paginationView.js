import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const btn = event.target.closest(".btn--inline ");
      if (!btn) return;
      console.log(btn);

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);

      handler(goToPage);
    });
  }

  _generateMarkupBtnNext(page) {
    return `
        <button data-goto="${page}" class="btn--inline pagination__btn--next">
          <span>Page ${page}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
  }

  _generateMarkupPrev(page) {
    return `
    <button data-goto="${page}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${page}</span>
    </button>
  `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtnNext(curPage + 1);
    }

    //last page
    if (curPage === numPages) {
      return this._generateMarkupPrev(curPage - 1);
    }

    //other page
    if (curPage < numPages) {
      return (
        this._generateMarkupBtnNext(curPage + 1) +
        this._generateMarkupPrev(curPage - 1)
      );
    }

    // Page1 and there are no other pages
    return "";
  }
}

export default new PaginationView();
