// @flow

export default function FacebookCounter(a:HTMLAnchorElement) {
  let link = a.href;
  link = link.split('?u=')[1];

  function updateDOM() {
    const response = JSON.parse(this.responseText);
    if (response.error) {
      console.warn('Error getting Facebook share count:', response.error.message);
      return;
    }
    const count = document.createElement('span');
    count.textContent = response.share.share_count;
    a.append(count);
  }
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updateDOM);
  oReq.open('GET', `https://graph.facebook.com/?id=${link}`);
  oReq.send();
}
