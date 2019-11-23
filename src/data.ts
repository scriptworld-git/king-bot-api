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
			costsW: 75,	costsC: 50,	costsI: 100
		},
		2: {
			name: 'Praetorian',
			id: '2',
			attack: 30,
			speed: 5,
			infantry_defense: 65,
			calvary_defense: 35,
			carry_capacity: 20,
			costsW: 80, costsC: 100, costsI: 160
		},
		3: {
			name: 'Imperian',
			id: '3',
			attack: 70,
			speed: 7,
			infantry_defense: 40,
			calvary_defense: 25,
			carry_capacity: 50,
			costsW: 100, costsC: 110, costsI:140
		},
		4: {
			name: 'Equites Legati',
			id: '4',
			attack: 0,
			speed: 16,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
			costsW: 100, costsC: 140, costsI:10
		},
		5: {
			name: 'Equites Imperatoris',
			id: '5',
			attack: 120,
			speed: 14,
			infantry_defense: 65,
			calvary_defense: 50,
			carry_capacity: 100,
			costsW: 350, costsC: 260, costsI:180
		},
		6: {
			name: 'Equites Caesaris',
			id: '6',
			attack: 180,
			speed: 10,
			infantry_defense: 80,
			calvary_defense: 105,
			carry_capacity: 70,
			costsW: 280, costsC: 340, costsI:600
		},
		7: {
			name: 'Battering Ram',
			id: '7',
			attack: 60,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 75,
			carry_capacity: 0,
			costsW: 700, costsC: 180, costsI:400
		},
		8: {
			name: 'Fire Catapult',
			id: '8',
			attack: 75,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
			costsW: 690, costsC: 1000, costsI:400
		},
		9: {
			name: 'Senator',
			id: '9',
			attack: 50,
			speed: 4,
			infantry_defense: 40,
			calvary_defense: 30,
			carry_capacity: 0,
			costsW: 30750,	costsC: 27200, costsI:45000
		},
		10: {
			name: 'Settler',
			id: '10',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costsW: 3500, costsC: 3000, costsI:4500
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
			costsW: 85, costsC: 65, costsI:30
		},
		2: {
			name: 'Spearfighter',
			id: '12',
			attack: 10,
			speed: 7,
			infantry_defense: 35,
			calvary_defense: 60,
			carry_capacity: 40,
			costsW: 125, costsC: 50, costsI:65
		},
		3: {
			name: 'Axefighter',
			id: '13',
			attack: 60,
			speed: 7,
			infantry_defense: 30,
			calvary_defense: 30,
			carry_capacity: 50,
			costsW: 80, costsC: 65, costsI:130
		},
		4: {
			name: 'Scout',
			id: '14',
			attack: 0,
			speed: 10,
			infantry_defense: 10,
			calvary_defense: 5,
			carry_capacity: 0,
			costsW: 140, costsC: 80, costsI:30
		},
		5: {
			name: 'Paladin',
			id: '15',
			attack: 55,
			speed: 10,
			infantry_defense: 100,
			calvary_defense: 40,
			carry_capacity: 110,
			costsW: 330, costsC: 170, costsI:200
		},
		6: {
			name: 'Teutonic Knight',
			id: '16',
			attack: 150,
			speed: 9,
			infantry_defense: 50,
			calvary_defense: 75,
			carry_capacity: 80,
			costsW: 350, costsC: 400, costsI:320
		},
		7: {
			name: 'Ram',
			id: '17',
			attack: 65,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 80,
			carry_capacity: 0,
			costsW: 800, costsC: 150, costsI:250
		},
		8: {
			name: 'Catapult',
			id: '18',
			attack: 50,
			speed: 3,
			infantry_defense: 60,
			calvary_defense: 10,
			carry_capacity: 0,
			costsW: 660, costsC: 900, costsI:370
		},
		9: {
			name: 'Chief',
			id: '19',
			attack: 40,
			speed: 4,
			infantry_defense: 60,
			calvary_defense: 40,
			carry_capacity: 0,
			costsW: 35500, costsC: 26600, costsI:25000
		},
		10: {
			name: 'Settler',
			id: '20',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costsW: 4000, costsC: 3500, costsI:3200
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
			costsW: 85, costsC: 100, costsI:50
		},
		2: {
			name: 'Swordsman',
			id: '22',
			attack: 65,
			speed: 6,
			infantry_defense: 35,
			calvary_defense: 20,
			carry_capacity: 45,
			costsW: 95, costsC: 60, costsI:140
		},
		3: {
			name: 'Pathfinder',
			id: '23',
			attack: 0,
			speed: 17,
			infantry_defense: 20,
			calvary_defense: 10,
			carry_capacity: 0,
			costsW: 140, costsC: 110, costsI:20
		},
		4: {
			name: 'Theutates Thunder',
			id: '24',
			attack: 90,
			speed: 19,
			infantry_defense: 25,
			calvary_defense: 40,
			carry_capacity: 75,
			costsW: 200, costsC: 280, costsI:130
		},
		5: {
			name: 'Druidrider',
			id: '25',
			attack: 45,
			speed: 16,
			infantry_defense: 115,
			calvary_defense: 55,
			carry_capacity: 35,
			costsW: 300, costsC: 270, costsI:190
		},
		6: {
			name: 'Haeduan',
			id: '26',
			attack: 140,
			speed: 13,
			infantry_defense: 60,
			calvary_defense: 165,
			carry_capacity: 65,
			costsW: 300, costsC: 380, costsI:440
		},
		7: {
			name: 'Ram',
			id: '27',
			attack: 50,
			speed: 4,
			infantry_defense: 30,
			calvary_defense: 105,
			carry_capacity: 0,
			costsW: 750, costsC: 370, costsI:220
		},
		8: {
			name: 'Trebuchet',
			id: '28',
			attack: 70,
			speed: 3,
			infantry_defense: 45,
			calvary_defense: 10,
			carry_capacity: 0,
			costsW: 590, costsC: 1200, costsI:400
		},
		9: {
			name: 'Chieftain',
			id: '29',
			attack: 40,
			speed: 5,
			infantry_defense: 50,
			calvary_defense: 50,
			carry_capacity: 0,
			costsW: 30750,	costsC: 45400, costsI:31000
		},
		10: {
			name: 'Settler',
			id: '30',
			attack: 0,
			speed: 5,
			infantry_defense: 80,
			calvary_defense: 80,
			carry_capacity: 3000,
			costsW: 3000, costsC: 4000, costsI:3000
		}
	}
};
