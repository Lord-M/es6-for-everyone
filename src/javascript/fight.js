export function fight(firstFighter, secondFighter) {
  // return winner
  for (;;) {
    const damageToSecond = getDamage(firstFighter, secondFighter);
    const secondFighterHealth = +secondFighter.health - damageToSecond;
    secondFighter.health = secondFighterHealth;

    if (secondFighterHealth > 0) {
      const damageToFirst = getDamage(secondFighter, firstFighter);
      const firstFighterHealth = +firstFighter.health - damageToFirst;
      firstFighter.health = firstFighterHealth;

      if (firstFighterHealth <= 0) {
        return secondFighter;
      }
    } else {
      return firstFighter;
    }
  }
}

export function getDamage(attacker, enemy) {
  // damage = hit - block
  // return damage
  const hitPower = getHitPower(attacker);
  const blockPower = getBlockPower(enemy);
  const damage = hitPower - blockPower;
  return damage;
}

export function getHitPower(fighter) {
  const criticalHitChanceMin = 1;
  const criticalHitChanceMax = 2;

  const criticalHitChance = Math.random() * (criticalHitChanceMax - criticalHitChanceMin) + criticalHitChanceMin;
  const power = +fighter.attack * criticalHitChance;

  return power;
}

export function getBlockPower(fighter) {
  const dodgeChanceMin = 1;
  const dodgeChanceMax = 2;

  const dodgeChance = Math.random() * (dodgeChanceMax - dodgeChanceMin) + dodgeChanceMin;
  const power = +fighter.defense * dodgeChance;

  return power;
}
