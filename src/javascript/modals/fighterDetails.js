import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, attack, defense, health, source } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const fighterInfo = createElement({ tagName: 'div', className: 'fighter-info' });
  const nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  const attackElement = createElement({ tagName: 'p' });
  const defenseElement = createElement({ tagName: 'p' });
  const healthElement = createElement({ tagName: 'p' });
  const imageElement = createElement({ tagName: 'img', className: 'fighter-image', attributes: { src: source } });

  // show fighter name, attack, defense, health, image

  nameElement.innerText = name;
  attackElement.innerText = `Attack: ${attack}`;
  defenseElement.innerText = `Defense: ${defense}`;
  healthElement.innerText = `Health: ${health}`;

  fighterInfo.append(nameElement, attackElement, defenseElement, healthElement);
  fighterDetails.append(imageElement, fighterInfo);

  return fighterDetails;
}
