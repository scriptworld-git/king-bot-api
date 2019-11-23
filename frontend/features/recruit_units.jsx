import { h, render, Component } from 'preact';
import { route } from 'preact-router';
import axios from 'axios';
import classNames from 'classnames';

export default class RecruitUnits extends Component {
  state = {
  	name: 'Recruit Units',
		own_tribe: 0,
		village_name: '',
		wait_time: '',
		all_villages: [],
		target_x: '',
		target_y: '',
		target_villageId: '',
		target_village_name: '',
		target_playerId: '',
		target_player_name: '',
		target_tribeId: '',
		target_distance: '',
		troops: '',
		date: '',
		time: '',
		t1: '',
		t2: '',
		t3: '',
		t4: '',
		t5: '',
		t6: '',
		t7: '',
		t8: '',
		t9: '',
		t10: '',
		t11: '',
		send_hero: false,
		error_wait_time: false,
		error_village: false,
		error_target: false
	}

	componentWillMount() {
		this.setState({
			...this.props.feature
		});

		axios.get('/api/data?ident=villages').then(res => this.setState({ all_villages: res.data }));
		axios.get('/api/data?ident=player_tribe').then(res => this.setState({ own_tribe: Number(res.data) }));
		axios.get('/api/data?ident=troops').then(res => this.setState({ troops: res.data }));
	}

	setTarget = async e => {
		this.setState({
			error_wait_time: (this.state.wait_time == ''),
			error_village: (this.state.village_name == '')
		});

		if (this.state.error_wait_time || this.state.error_village) {
			return;
		}

		const { village_name, target_x, target_y, target } = this.state;
		var x = Number(target_x);
		var y = Number(target_y);
		const villageID = 536887296 + x + (y * 32768);
		const string = `/api/data?ident=village&village_name=${village_name}`;
		console.log(string);
		var response = await axios.get(`/api/data?ident=village&village_name=${village_name}`);
		const sourceVillageID = response.data.villageId;
		var params = {
			sourceVillage: sourceVillageID,
			destinationVillage: villageID
		};

		response = await axios.post('/api/checkTarget', params);
		const check_target_data = response.data;

		params = [
			`Village: ${villageID}`
		];

		response = await axios.post('/api/findvillage', params);

		const village = response.data[0].data;
		if (!village) alert('unable to find village!');

		const target_villageId = village.villageId;
		const target_village_name = village.name;
		const target_distance = check_target_data.distance;
		const target_playerId = village.playerId;
		const target_tribeId = village.tribeId;
		const target_player_name = check_target_data.destPlayerName;
		if (target_player_name == null || target_village_name == null) alert('Something went wrong. Is your target banned?');
		this.setState({ target_villageId, target_village_name, target_x, target_y, target_playerId, target_player_name, target_tribeId, target_distance });
	}

	submit = async e => {
		this.setState({
			error_wait_time: (this.state.wait_time == ''),
			error_village: (this.state.village_name == '')
		});

		if (this.state.error_wait_time || this.state.error_village) return;

		this.props.submit({ ...this.state });
	}

	delete = async e => {
		this.props.delete({ ...this.state });
	}

	cancel = async e => {
		route('/');
	}

	render() {
		var { wait_time, all_villages, village_name, target_x, target_y, target_player_name, target_village_name, target_tribeId, target_distance, own_tribe, troops,
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
			time,
			date
		} = this.state;

		var new_rows = [];
			new_rows = [
				<th style={ row_style }>Lo-Barracks-ID</th>,
				<th style={ row_style }>Units</th>,
				<th style={ row_style }>Amount</th>,
				<th style={ row_style }>on/off</th>,
				<th style={ row_style }>Lo-Stable-ID</th>,
				<th style={ row_style }>Units</th>,
				<th style={ row_style }>Amount</th>,
				<th style={ row_style }>on/off</th>,
				<th style={ row_style }>SleepTime</th>,
				<th style={ row_style }>Empty</th>,
			];
		


		if (date == '') {
			var curDate = new Date();
			curDate = curDate.toJSON();
			date = curDate.split('T')[0];
			this.setState({ date });
		}
		if (this.state.time == '') {
			var curUTCTime = new Date();
			curUTCTime = curUTCTime.toJSON();
			time = curUTCTime.split('T')[1].substring(0, 5);
			this.setState({ time });
		}

		const input_wait_time = classNames({
			input: true,
			'is-radiusless': true,
			'is-danger': this.state.error_wait_time
		});

		const village_select_class = classNames({
			select: true,
			'is-danger': this.state.error_village
		});

		const row_style = {
			verticalAlign: 'middle',
			textAlign: 'center',
		};

		const villages = all_villages.map(village => <option value={ village.data.name }>{village.data.name}</option>);

		return (
			<div>
				<div className="columns">

					<div className="column">

						<div class="field">
							<label class="label">Select Village</label>
							<div class="control">
								<div class={ village_select_class }>
									<select
										class="is-radiusless"
										value={ village_name }
										onChange={ (e) => this.setState({ village_name: e.target.value }) }
									>
										{villages}
									</select>
								</div>
							</div>
						</div>


					</div>

				</div>

				<div>
					<table className="table is-hoverable is-fullwidth">
						<thead>
							<tr>
							<th>Barrack</th>
							</tr>
							<tr>
								<th style={ row_style }>Locat-ID</th>
								<th style={ row_style }>Units</th>
								<th style={ row_style }>Amount</th>
								<th style={ row_style }>on/off</th>
							</tr>
							<tr>
  							<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t1 }
										placeholder="t1"
										onChange={ async e => {
											this.setState({ t1: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t2 }
										placeholder="t2"
										onChange={ async e => {
											this.setState({ t2: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t3 }
										placeholder="t3"
										onChange={ async e => {
											this.setState({ t3: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t4 }
										placeholder="t4"
										onChange={ async e => {
											this.setState({ t4: e.target.value });
										} }
									/>
								</td>
							</tr>	
								<tr>
								<th>Stable</th>
								</tr>
								<tr>
								<th style={ row_style }>Locat-ID</th>
								<th style={ row_style }>Units</th>
								<th style={ row_style }>Amount</th>
								<th style={ row_style }>on/off</th>
								</tr>
							<tr>
								<td style={ row_style }>
  								<input
										style="width: 30px;"
										type="text"
										value={ t5 }
										placeholder="t5"
										onChange={ async e => {
											this.setState({ t5: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t6 }
										placeholder="t6"
										onChange={ async e => {
											this.setState({ t6: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t7 }
										placeholder="t7"
										onChange={ async e => {
											this.setState({ t7: e.target.value });
										} }
									/>
								</td>
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t8 }
										placeholder="t8"
										onChange={ async e => {
											this.setState({ t8: e.target.value });
										} }
									/>
								</td>
							</tr>
							
								<tr>
								<th style={ row_style }>SleepTime</th>
								</tr>
							<tr>	
								<td style={ row_style }>
									<input
										style="width: 30px;"
										type="text"
										value={ t9 }
										placeholder="t9"
										onChange={ async e => {
											this.setState({ t9: e.target.value });
										} }
									/>
								</td>
							</tr>	
						</thead>
					</table>
				</div>

				<div className="columns" style='margin-top: 1rem;'>
					<div className="column">
						<button className="button is-radiusless is-success" onClick={ this.submit } style='margin-right: 1rem'>
							submit
						</button>
						<button className="button is-radiusless" onClick={ this.cancel } style='margin-right: 1rem'>
							cancel
						</button>

						<button className="button is-danger is-radiusless" onClick={ this.delete }>
							delete
						</button>
					</div>
					<div className="column">
					</div>
				</div>

			</div>
		);
	}
}
