import { $ } from '../@shared/utils';

const alarmWrapper = (navigation: string): string => {
  return `<div class="alarm">
            ${navigation}
            <div class="alarm-inner">
              alarm
            </div>
          </div>`;
};

const renderAlarmPage = (navigation: string): void => {
  const appId = $('#app') as HTMLDivElement;

  appId.innerHTML = '';
  appId.insertAdjacentHTML('beforeend', alarmWrapper(navigation));
};

export default renderAlarmPage;
