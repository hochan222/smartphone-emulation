import { $, padStart } from '../@shared/utils';
import model from '../model';
import { IalarmData } from '../model/interface';
import './alarm-page.css';

const meridiemOptionData = [
  {
    value: 'am',
    option: '오전',
  },
  {
    value: 'pm',
    option: '오후',
  },
];
const hourOptionData = Array.from(Array(12), (_, index) => index);
const minuteOptionData = Array.from(Array(6), (_, index) => index * 10);

const optionWrapper = ({ option, value }: { option: string | number; value: string | number }): string => {
  return `<option value="${value}">${option}</option>`;
};

const selectWrapper = (selectId: string, options: string): string => {
  return `<select id="${selectId}" class="alarm__select">
            ${options}
          </select>`;
};

const alarmInputWrapper = (): string => {
  const meridiemOption = meridiemOptionData.map(({ option, value }) => optionWrapper({ option, value })).join('');
  const hourOption = hourOptionData.map((hour) => optionWrapper({ option: hour, value: hour })).join('');
  const minuteOption = minuteOptionData.map((minute) => optionWrapper({ option: minute, value: minute })).join('');

  return `<div class="alarm__input">
            ${selectWrapper('alarm-meridiem-select', meridiemOption)}
            ${selectWrapper('alarm-hour-select', hourOption)} 
            <p>시</p>
            ${selectWrapper('alarm-minute-select', minuteOption)}
            <p>분</p>
            <button id="alarm-submit-button" class="alarm__button">저장</button>
          </div>`;
};

const alarmListElementWrapper = ({ meridiem, hour, minute }: IalarmData): string => {
  return `<div class="alarm__list-element">
            <p><time>${meridiem === 'am' ? '오전' : '오후'} ${
    meridiem === 'pm' ? String(+hour + 12) : padStart(2, '0', hour)
  }시 ${padStart(2, '0', minute)}분</time></p>
            <button class="alarm__list-element-button" data-meridiem="${meridiem}" data-hour="${hour}" data-minute="${minute}">삭제</button>
          </div>`;
};

const alarmListWrapper = () => {
  const alarmData = model.getLocalStorageAlarmData('alarmData');
  const alarmListTag = alarmData
    ?.map(({ meridiem, hour, minute }) => alarmListElementWrapper({ meridiem, hour, minute }))
    .join('');
  return `<div class="alarm__list">
            ${alarmListTag}
          </div>`;
};

const alarmWrapper = (navigation: string, apps: string): string => {
  return `<section class="alarm">
            ${navigation}
            <article class="alarm-inner">
              ${apps}
            </article>
          </section>`;
};

const renderAlarmList = (): void => {
  const alarmInnerElement = $('.alarm-inner') as HTMLDivElement;

  if (!alarmInnerElement) {
    return;
  }
  alarmInnerElement.innerHTML = '';
  alarmInnerElement.insertAdjacentHTML('beforeend', alarmListWrapper());
};

const renderAlarmPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', alarmWrapper(navigation, alarmListWrapper()));
};

export { renderAlarmPage, alarmInputWrapper, renderAlarmList };
