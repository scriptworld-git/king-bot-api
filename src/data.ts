export enum tribe {
	roman = '1',
	teuton = '2',
	gaul = '3'
}

export enum mission_type {
	spy = 6
}

export const buildings: { [index: number]: string } = {
	1: 'wood',
	2: 'clay',
	3: 'iron',
	4: 'crop',
	5: 'sawmill',
	6: 'brickyard',
	7: 'iron foundry',
	8: 'grain mill',
	9: 'bakery',
	10: 'warehouse',
	11: 'granary',
	12: '',
	13: 'smithy',
	14: 'tournament square',
	15: 'main building',
	16: 'rally point',
	17: 'marketplace',
	18: 'embassy',
	19: 'barracks',
	20: 'stable',
	21: 'workshop',
	22: 'academy',
	23: 'cranny',
	24: 'town hall',
	25: 'residence',
	26: 'palace',
	27: 'treasury',
	28: 'trade office',
	29: 'great barracks',
	30: 'great stable',
	31: 'city wall',
	32: 'earth wall',
	33: 'palisade',
	34: 'stonemasons lodge',
	35: 'brewery',
	36: 'trapper',
	37: '',
	38: 'great warehouse',
	39: 'great granary',
	40: 'world of wonder',
	41: 'horse drinking trough',
	42: 'water ditch',
	43: 'natarian wall',
	44: '',
	45: 'hidden treasury'
};

export const troops: any = {
	// roman units
	1: {
		1: {
			name: 'Legionnaire',
			id: '1',
			attack: 40,
			speed: 6,
			infantry_defense: 35,
			calvary_defense: 50,
			carry_capacity: 50,
			costs: [ 75, 50, 100, 0	]
		},
		2: {
			name: 'Praetorian',
			id: '2',
			attack: 30,
			speed: 5,
			infantry_defense: 65,
			calvary_defense: 35,
			carry_capacity: 20,
			costs: [ 80, 100, 160, 0 ]
		},
		3: {
			name: 'Imperian',
			id: '3',
			attack: 70,
			speed: 7,
			infantry_defense: 40,
			calvary_defense: 25,
			carry_capacity: 50,
			costs: [ 100, 110, 140, 0 ]
		},
		4: {
			name: 'Equites Legati',
			id: '4',
			attack: 0,
			speed: 16,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
			costs: [ 100, 140, 10, 0 ]
		},
		5: {
			name: 'Equites Imperatoris',
			id: '5',
			attack: 120,
			speed: 14,
			infantry_defense: 65,
			calvary_defense: 50,
			carry_capacity: 100,
			costs: [ 350, 260, 180,	0 ]
		},
		6: {
			name: 'Equites Caesaris',
			id: '6',
			attack: 180,
			speed: 10,
			infantry_defense: 80,
			calvary_defense: 105,
			carry_capacity: 70,
			costs: [ 280, 340, 600, 0 ]
		},
		7: {
			name: 'Battering Ram',
			id: '7',
			attack: 60,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 75,
			carry_capacity: 0,
			costs: [ 700, 180, 400,	0 ]
		},
		8: {
			name: 'Fire Catapult',
			id: '8',
			attack: 75,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
			costs: [ 690, 1000, 400, 0 ]
		},
		9: {
			name: 'Senator',
			id: '9',
			attack: 50,
			speed: 4,
			infantry_defense: 40,
			calvary_defense: 30,
			carry_capacity: 0,
			costs: [ 30750,	27200, 45000, 0 ]
		},
		10: {
			name: 'Settler',
			id: '10',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costs: [ 3500, 3000, 4500, 0 ]
		},
	},
	// teuton units
	2: {
		1: {
			name: 'Clubswinger',
			id: '11',
			attack: 40,
			speed: 7,
			infantry_defense: 20,
			calvary_defense: 5,
			carry_capacity: 60,
			costs: [ 85, 65, 30, 0 ]
		},
		2: {
			name: 'Spearfighter',
			id: '12',
			attack: 10,
			speed: 7,
			infantry_defense: 35,
			calvary_defense: 60,
			carry_capacity: 40,
			costs: [ 125, 50, 65, 0 ]
		},
		3: {
			name: 'Axefighter',
			id: '13',
			attack: 60,
			speed: 7,
			infantry_defense: 30,
			calvary_defense: 30,
			carry_capacity: 50,
			costs: [ 80, 65, 130, 0 ]
		},
		4: {
			name: 'Scout',
			id: '14',
			attack: 0,
			speed: 10,
			infantry_defense: 10,
			calvary_defense: 5,
			carry_capacity: 0,
			costs: [ 140, 80, 30, 0 ]
		},
		5: {
			name: 'Paladin',
			id: '15',
			attack: 55,
			speed: 10,
			infantry_defense: 100,
			calvary_defense: 40,
			carry_capacity: 110,
			costs: [ 330, 170, 200,	0 ]
		},
		6: {
			name: 'Teutonic Knight',
			id: '16',
			attack: 150,
			speed: 9,
			infantry_defense: 50,
			calvary_defense: 75,
			carry_capacity: 80,
			costs: [ 350, 400, 320,	0 ]
		},
		7: {
			name: 'Ram',
			id: '17',
			attack: 65,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 80,
			carry_capacity: 0,
			costs: [ 800, 150, 250, 0 ]
		},
		8: {
			name: 'Catapult',
			id: '18',
			attack: 50,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
			costs: [ 660, 900, 370, 0 ]
		},
		9: {
			name: 'Chief',
			id: '19',
			attack: 40,
			speed: 4,
			infantry_defense: 60,
			calvary_defense: 40,
			carry_capacity: 0,
			costs: [ 35500, 26600, 25000, 0	]
		},
		10: {
			name: 'Settler',
			id: '20',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costs: [ 4000, 3500, 3200, 0 ]
		}
	},
	// gaul units
	3: {
		1: {
			name: 'Phalanx',
			id: '21',
			attack: 15,
			speed: 7,
			infantry_defense: 40,
			calvary_defense: 50,
			carry_capacity: 35,
			costs: [ 85, 100, 50, 0	]
		},
		2: {
			name: 'Swordsman',
			id: '22',
			attack: 65,
			speed: 6,
			infantry_defense: 35,
			calvary_defense: 20,
			carry_capacity: 45,
			costs: [ 95, 60, 140, 0 ]
		},
		3: {
			name: 'Pathfinder',
			id: '23',
			attack: 0,
			speed: 17,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
			costs: [ 140, 110, 20, 0 ]
		},
		4: {
			name: 'Theutates Thunder',
			id: '24',
			attack: 90,
			speed: 19,
			infantry_defense: 25,
			calvary_defense: 40,
			carry_capacity: 75,
			costs: [ 200, 280, 130, 0 ]
		},
		5: {
			name: 'Druidrider',
			id: '25',
			attack: 45,
			speed: 16,
			infantry_defense: 115,
			calvary_defense: 55,
			carry_capacity: 35,
			costs: [ 300, 270, 190, 0 ]
		},
		6: {
			name: 'Haeduan',
			id: '26',
			attack: 140,
			speed: 13,
			infantry_defense: 60,
			calvary_defense: 165,
			carry_capacity: 65,
			costs: [ 300, 380, 440, 0 ]
		},
		7: {
			name: 'Ram',
			id: '27',
			attack: 50,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 105,
			carry_capacity: 0,
			costs: [ 750, 370, 220, 0 ]
		},
		8: {
			name: 'Trebuchet',
			id: '28',
			attack: 70,
			speed: 3,
			infantry_defense: 45,
			calvary_defense: 10,
			carry_capacity: 0,
			costs: [ 590, 1200, 400, 0 ]
		},
		9: {
			name: 'Chieftain',
			id: '29',
			attack: 40,
			speed: 5,
			infantry_defense: 50,
			calvary_defense: 50,
			carry_capacity: 0,
			costs: [ 30750,	45400, 31000, 0 ]
		},
		10: {
			name: 'Settler',
			id: '30',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costs: [ 3000, 4000, 3000, 0 ]
		}
	}
};
