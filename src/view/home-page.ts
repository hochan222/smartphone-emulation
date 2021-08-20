import { $ } from '../@shared/utils';

const getHomeWrapper = (navigation: string): string => {
  return `<div class="home">
            ${navigation}
                <div class="modal-inner p-8">
                  <button class="modal-close">
                    <svg viewbox="0 0 40 40">
                      <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                  </button>
                  <header>
                    <h2 class="text-center">🔎 유튜브 검색</h2>
                  </header>
                  <form id="modal-search-form" class="d-flex">
                    <input type="text" id="modal-search-input" class="w-100 mr-2 pl-2" placeholder="검색" />
                    <button type="button" id="modal-search-button" class="btn bg-cyan-500">검색</button>
                  </form>
                  <section class="mt-2">
                    <span class="text-gray-700">최근 검색어: </span>
                    <div id="modal-recent-search-items">
                    </div>
                  </section>
                  <section>
                    <div id="modal-saved-video-length" class="d-flex justify-end text-gray-700">
                      저장된 영상 갯수: 50개/100개
                    </div>
                  </section>
                  <section id="modal-videos" class="video-wrapper">
                  </section>
                </div>
              </div>`;
};

const renderHomePage = (navigation: string): void => {
  $('#app')?.insertAdjacentHTML('beforeend', getHomeWrapper(navigation));
};

export default renderHomePage;
