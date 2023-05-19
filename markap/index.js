sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summerSports = sports.slice(5, 7).concat(sports.slice(9, 11));
winterSports = sports.slice(0, 2).concat(sports.slice(3, 5));
fruits = sports.slice(2, 3).concat(sports.slice(7, 9));

console.log('*** Winter sports ***');
for (i = 0; i < winterSports.length; i++) {
  const sport = winterSports[i][0];
  const emoji = winterSports[i][1];
  console.log(`${sport}: ${emoji}`);
}

console.log('\n*** Summer sports ***');
for (i = 0; i < summerSports.length; i++) {
  const sport = summerSports[i][0];
  const emoji = summerSports[i][1];
  console.log(`${sport}: ${emoji}`);
}

console.log('\n*** Fruits ***');
for (i = 0; i < fruits.length; i++) {
  const fruit = fruits[i][0];
  const emoji = fruits[i][1];
  console.log(`${fruit}: ${emoji}`);
}