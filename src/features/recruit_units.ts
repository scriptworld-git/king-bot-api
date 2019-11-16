import { log, find_state_data, sleep, list_remove, get_random_int } from '../util';
import { Ifarmlist, Ivillage, Iunits, Iplayer } from '../interfaces';
import { Ifeature, Irequest, feature_collection, feature_item, Ioptions } from './feature';
import { farming, village, player } from '../gamedata';
import api from '../api';
import database from '../database';
import uniqid from 'uniqid';
import { troops, tribe } from '../data';
import logger from '../logger';


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
			var { village_name, target_villageId, target_distance, target_village_name, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 } = this.options;
			const params = [
                village.own_villages_ident,
            ];
			const units = {
				1: Number(t1), //Locationidss
				2: Number(t2),  //Unitss
				3: Number(t3),   //Amount
				4: Number(t4), //on/off
				5: Number(t5),  //Locationi
				6: Number(t6),   //Unitss
				7: Number(t7),    //Amount
				8: Number(t8),    //on/off
				9: Number(t9),    //Time
				10: Number(t10)    //--
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

			let sleep_time: number = null;
			sleep_time = units[9]*60;
			log(`RecruitUnits ${this.options.village_name} Let sleeps ${sleep_time}`);
            await sleep(sleep_time);

			var costUnits = [0, 0, 0, 0, 0];
			var costUnitssStable = [0, 0, 0, 0, 0];

			if (UnitssOnOff > 0) {
				if (Unitss == 21) {
				//21: phalanx
				costUnits[1] = 85*Amount;
                costUnits[2] = 100*Amount;
                costUnits[3] = 50*Amount;
                costUnits[4] = 0;
				}
				if (Unitss == 22) {
				//22: swordsm
				costUnits[1] = 95*Amount;
                costUnits[2] = 60*Amount;
                costUnits[3] = 140*Amount;
                costUnits[4] = 0;
				}
			}
			if (UnitssStableOnOff > 0) {
				if (UnitssStable == 23) {
				//23: pathfin
				costUnitssStable[1] = 140*AmountStable;
                costUnitssStable[2] = 110*AmountStable;
                costUnitssStable[3] = 20*AmountStable;
                costUnitssStable[4] = 0;
				}
				if (UnitssStable == 24) {
				//24: theutat
				costUnitssStable[1] = 200*AmountStable;
                costUnitssStable[2] = 280*AmountStable;
                costUnitssStable[3] = 130*AmountStable;
                costUnitssStable[4] = 0;
				}
				if (UnitssStable == 25) {
				//25: druidri
				costUnitssStable[1] = 300*AmountStable;
                costUnitssStable[2] = 270*AmountStable;
                costUnitssStable[3] = 190*AmountStable;
                costUnitssStable[4] = 0;
				}
				if (UnitssStable == 26) {
				//26: headuan
				costUnitssStable[1] = 300*AmountStable;
                costUnitssStable[2] = 380*AmountStable;
                costUnitssStable[3] = 440*AmountStable;
                costUnitssStable[4] = 0;
				}
			}
				var totalcost = [0, 0, 0, 0, 0];
				totalcost[1] = costUnitssStable[1] + costUnits[1];
                totalcost[2] = costUnitssStable[2] + costUnits[2];
                totalcost[3] = costUnitssStable[3] + costUnits[3];
                totalcost[4] = costUnitssStable[4] + costUnits[4];
				//util_1.log(`Totalcost Wood:${totalcost[1]} Clay:${totalcost[2]} Iron:${totalcost[3]} Crop:${totalcost[4]}`);

                var resources = [0, 0, 0, 0, 0];
				resources[1] = Math.min(totalcost[1], vill.storage['1']);
                resources[2] = Math.min(totalcost[2], vill.storage['2']);
                resources[3] = Math.min(totalcost[3], vill.storage['3']);
                resources[4] = Math.min(totalcost[4], vill.storage['4']);

		//	if (resources[1] + resources[2] + resources[3] + resources[4] > 0) {
				if (vill.storage['1'] > resources[1] ) {
                        resources[1] = 1;
                    }
				if (vill.storage['2'] > resources[2]) {
                        resources[2] = 1;
                    }
				if (vill.storage['3'] > resources[3]) {
                        resources[3] = 1;
                    }
				if (vill.storage['4'] > resources[4]) {
                        resources[4] = 1;
                    }

				if (resources[1] + resources[2] + resources[3] + resources[4] == 4) {
						if (UnitssOnOff > 0) {
                        log(`Recruit Barracks ID:${this.options.village_name} LOCAT:${Locationidss} UNIT:${Unitss} Amount:${Amount}`);
						await api.start_recruitUnitsBarracks(sourceVillage_id,Locationidss,Unitss,Amount);
						}
						if (UnitssStableOnOff > 0) {
						log(`Recruit Stable ID:${this.options.village_name} LOCAT:${LocationidssStable} UNIT:${UnitssStable} Amount:${AmountStable}`);
						await api.start_recruitUnitsStable(sourceVillage_id,LocationidssStable,UnitssStable,AmountStable);
						}
				}
                else {
                    await sleep(get_random_int(300, 600));
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
