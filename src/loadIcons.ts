import store from '@/store';
import { Icon } from './models/Icon.model';

export async function loadIcons(): Promise<void> {
  const xhr = new XMLHttpRequest(); // a new request
  xhr.open('GET', 'https://icons.timos.design/resources/icons.json', true);
  xhr.send(null);
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      store.commit('updateIcons', JSON.parse(xhr.responseText) as Icon[]);
    }
  };
}
