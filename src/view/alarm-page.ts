import { $ } from '../@shared/utils';
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
const hourOptionData = Array.from(Array(24), (_, index) => index + 1);
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

const alarmListWrapper = () => {
  return `<div class="alarm__list">
            list
          </div>`;
};

const alarmWrapper = (navigation: string, apps: string): string => {
  return `<div class="alarm">
            ${navigation}
            <div class="alarm-inner">
              ${apps}
            </div>
          </div>`;
};

const renderAlarmPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', alarmWrapper(navigation, alarmListWrapper()));
};

export { renderAlarmPage, alarmInputWrapper };
