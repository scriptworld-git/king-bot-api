import { log, sleep, get_random_int } from '../util';
import { Iunits, Iplayer } from '../interfaces';
import { feature_collection, feature_item, Ioptions } from './feature';
import { village, player } from '../gamedata';
import api from '../api';
import logger from '../logger';
import { troops, tribe } from '../data';


interface Ioptions_recruit_units extends Ioptions {
	village_name: string,
	wait_time: number,
	target_villageId: number,
	target_village_name: string,
	target_playerId: string,
	target_player_name: string,
	target_tribeId: number,
	target_distance: number,
	t1: number,
	t2: number,
	t3: number,
	t4: number,
	t5: number,
	t6: number,
	t7: number,
	t8: number,
	t9: number,
	t10: number,
	t11: number,
	date: string,
	time: string,
	send_hero: boolean,
}

class recruit_units extends feature_collection {
	get_ident(): string {
		return 'recruit_units';
	}

	get_new_item(options: Ioptions_recruit_units): recruit_units_feature {
		return new recruit_units_feature({ ...options });
	}

	get_default_options(options: Ioptions): Ioptions_recruit_units {
		return {
			...options,
			village_name: '',
			wait_time: 60,
			target_villageId: 0,
			target_village_name: '',
			target_playerId: '',
			target_player_name: '',
			target_distance: 0,
			target_tribeId: 0,
			t1: 0,
			t2: 0,
			t3: 0,
			t4: 0,
			t5: 0,
			t6: 0,
			t7: 0,
			t8: 0,
			t9: 0,
			t10: 0,
			t11: 0,
			date: '',
			time: '',
			send_hero: false,
		};
	}
}

class recruit_units_feature extends feature_item {
	options: Ioptions_recruit_units;

	set_options(options: Ioptions_recruit_units): void {
		const { uuid, run, error, village_name,
			wait_time,
			target_villageId,
			target_village_name,
			target_playerId,
			target_player_name,
			target_tribeId,
			target_distance,
			t1,
			t2,
			t3,
			t4,
			t5,
			t6,
			t7,
			t8,
			t9,
			t10,
			t11,
			send_hero,
			date,
			time } = options;

		this.options = {
			...this.options,
			uuid,
			run,
			error,
			village_name,
			wait_time,
			target_villageId,
			target_village_name,
			target_playerId,
			target_player_name,
			target_tribeId,
			target_distance,
			t1,
			t2,
			t3,
			t4,
			t5,
			t6,
			t7,
			t8,
			t9,
			t10,
			t11,
			send_hero,
			date,
			time

		};
	}

	get_options(): Ioptions_recruit_units {
		return { ...this.options };
	}

	set_params(): void {
		this.params = {
			ident: 'recruit_units',
			name: 'recruit units'
		};
	}

	get_description(): string {
		const { village_name, target_village_name } = this.options;
		return `${village_name} -> ${target_village_name} : ${this.options.wait_time}`;
	}

	get_long_description(): string {
		return 'sends merchants from the origin village to the desination at a given interval.';
	}

	async recruit_units(): Promise<number> {
			var { village_name, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11 } = this.options;
			const params = [
                village.own_villages_ident,
            ];
						const units: Iunits = {
							1: Number(t1),
							2: Number(t2),
							3: Number(t3),
							4: Number(t4),
							5: Number(t5),
							6: Number(t6),
							7: Number(t7),
							8: Number(t8),
							9: Number(t9),
							10: Number(t10),
							11: Number(t11)
						};

			const Locationidss = units[1];
			const Unitss = units[2];
			const Amount = units[3];

			const LocationidssStable = units[5];
			const UnitssStable = units[6];
			const AmountStable = units[7];
			const UnitssOnOff = units[4];
			const UnitssStableOnOff = units[8];

			let response = await api.get_cache(params);
			const vill = village.find(village_name, response);
			const sourceVillage_id = vill.villageId;
			const player_data: Iplayer = await player.get();
			const own_tribe: tribe = player_data.tribeId;

			let sleep_time: number = null;
			sleep_time = units[9]*60;
			log(`RecruitUnits ${this.options.village_name} Let sleeps ${sleep_time}`);
			await sleep(sleep_time);
            // this next features
			
			//Barrack
			var costUnits1 = [0, 0, 0];
			var costUnitssStable1 = [0, 0, 0];
			if (UnitssOnOff > 0) {
				var Unit_name = troops[own_tribe][Unitss].name;
				var Unit_ID = troops[own_tribe][Unitss].id;
				
				costUnits1[0] = troops[own_tribe][Unitss].costsW*Amount;
				costUnits1[1] = troops[own_tribe][Unitss].costsC*Amount;
				costUnits1[2] = troops[own_tribe][Unitss].costsI*Amount;				
			};
			
			//Stable
			if (UnitssStableOnOff > 0) {
				var Unit2_name = troops[own_tribe][UnitssStable].name;
				var Unit_ID2 = troops[own_tribe][UnitssStable].id;
				
				costUnitssStable1[0] = troops[own_tribe][UnitssStable].costsW*Amount;
				costUnitssStable1[1] = troops[own_tribe][UnitssStable].costsC*Amount;
				costUnitssStable1[2] = troops[own_tribe][UnitssStable].costsI*Amount;
			};
			
			//log(`Recruit Units:> ${Unit_name} cost  ${costUnits1} Stable:>${Unit2_name} cost  ${costUnitssStable1}`);
			
			var totalcost = [0, 0, 0];
            totalcost[0] = costUnitssStable1[0] + costUnits1[0];
            totalcost[1] = costUnitssStable1[1] + costUnits1[1];
            totalcost[2] = costUnitssStable1[2] + costUnits1[2];
				
			//log(`Totalcost Wood:${totalcost[0]} Clay:${totalcost[1]} Iron:${totalcost[2]}`);

				var resources = [0, 0, 0];
					
				if (vill.storage['1'] > totalcost[0] ) {
                        resources[0] = 1;
                    }
				if (vill.storage['2'] > totalcost[1]) {
                        resources[1] = 1;
                    }
				if (vill.storage['3'] > totalcost[2]) {
                        resources[2] = 1;
                    }
				//log(`Resources Wood:${resources[0]} Clay:${resources[1]} Iron:${resources[2]}`);
		 
		 
				if (resources[0] + resources[1] + resources[2] == 3) {
						if (UnitssOnOff > 0) {
                        log(`Recruit Barracks At:${this.options.village_name} LOCAT:${Locationidss} UNIT:${Unit_ID} Amount:${Amount}`);
						await api.start_recruitUnitsBarracks(sourceVillage_id,Locationidss,Unit_ID,Amount);
						}
						if (UnitssStableOnOff > 0) {
						log(`Recruit Stable At:${this.options.village_name} LOCAT:${LocationidssStable} UNIT:${Unit_ID2} Amount:${AmountStable}`);
						await api.start_recruitUnitsStable(sourceVillage_id,LocationidssStable,Unit_ID2,AmountStable);
						}
				}
                else {
					const wait = await get_random_int(300, 600);
					log(`Resources no enough wait : ${wait}`);
                    await sleep(wait);
				}


			return sleep_time;
    }

	async run(): Promise<void> {
			log(`Recruit Units ${this.options.village_name} started`);
            while (this.options.run) {

                let sleep_time: any   = await this.recruit_units();

                if (!sleep_time) {
                  logger.info('Finished Recruit Units.', 'Recruit Units');
                    break;
                }
                if (!sleep_time || sleep_time <= 0)
                    sleep_time = 60;
                if (sleep_time > 300)
                    sleep_time = 300;
				log(`RecruitUnits ${this.options.village_name} End  Let sleeps ${sleep_time}`);
                await sleep(sleep_time);
            }
            this.running = false;
            this.options.run = false;
            log(`RecruitUnits ${this.options.village_name} stopped`);
	}
}

export default new recruit_units();
