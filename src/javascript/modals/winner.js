import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showWinnerModal(fighter) {
  // show winner name and image
  const { name, source } = fighter;
  const title = 'Winner';

  const bodyElement = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  const imageElement = createElement({ tagName: 'img', className: 'fighter-image', attributes: { src: source } });

  nameElement.innerText = name;
  bodyElement.append(imageElement, nameElement);

  showModal({ title, bodyElement });
}