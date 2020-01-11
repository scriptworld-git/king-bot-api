import axios from 'axios';

const languages = {
	en: {
		lang_navbar_king_bot_api: 'king-bot-api',
		lang_navbar_home: 'home',
		lang_navbar_add_feature: 'add feature',
		lang_navbar_extras: 'extras',
		lang_navbar_easy_scout: 'easy scout',
		lang_navbar_inactive_finder: 'inactive finder',
		lang_navbar_logger: 'logger',
		lang_navbar_change_login: 'change login',
		lang_navbar_language: 'language',
		lang_navbar_links: 'links',
		lang_navbar_landing_page: 'landing page',
		lang_navbar_github: 'github',
		lang_navbar_report_bug: 'report a bug',
		lang_navbar_releases: 'releases',
		lang_navbar_felixbreuer: 'felixbreuer',
		lang_navbar_donate: 'donate',

		lang_feature_finish_earlier: 'instant finish',
		lang_feature_hero: 'auto adventure',
		lang_feature_farming: 'send farmlists',
		lang_feature_queue: 'building queue',
		lang_feature_raise_fields: 'raise fields',
		lang_feature_trade_route: 'trade route',
		lang_feature_timed_attack: 'timed attack',

		lang_home_features: 'your features',
		lang_home_name: 'feature name',
		lang_home_description: 'description',
		lang_home_status: 'status',
		lang_home_off_on: 'off / on',
		lang_home_options: 'options',

		lang_easy_scout_title: 'easy scout',
		lang_easy_scout_description: 'send 1 scout to every farm in the given farmlist',
		lang_easy_scout_amount: 'amount',

		lang_combo_box_select_farmlist: 'select farmlist',
		lang_combo_box_select_village: 'select village',

		lang_label_spy_for: 'spy for',
		lang_label_ressources: 'ressources',
		lang_label_defence: 'defence',

		lang_table_farmlist: 'farmlist',
		lang_table_village: 'village',
		lang_table_remove: 'remove',

		lang_table_distance: 'distance',
		lang_table_population: 'population',
		lang_table_coordinates: 'coordinates',
		lang_table_player: 'player',
		lang_table_kingdom: 'kingdom',
		lang_table_tribe: 'tribe',
		lang_table_id: 'id',
		lang_table_name: 'name',
		lang_table_lvl: 'lvl',
		lang_table_pos: 'pos',

		lang_button_submit: 'submit',
		lang_button_cancel: 'cancel',
		lang_button_delete: 'delete',
		lang_button_search: 'search',

		lang_adventure_adventure_type: 'adventure type',
		lang_adventure_short: 'short',
		lang_adventure_long: 'long',
		lang_adventure_min_health: 'minimum health',
		lang_adventure_min: 'min',
		lang_adventure_max: 'max',
		lang_adventure_health: 'health',
		lang_adventure_prov_number: 'provide a number',

		lang_queue_res_fields: 'ressource fields',
		lang_queue_buildings: 'buildings',
		lang_queue_queue: 'queue',
		lang_queue_level: 'level',
		lang_queue_wood: 'wood',
		lang_queue_clay: 'clay',
		lang_queue_iron: 'iron',
		lang_queue_crop: 'crop',

		lang_farmlist_add: 'add farmlist',
		lang_farmlist_interval: 'interval in seconds (min / max)',
		lang_farmlist_losses: 'send farms with losses to',

		lang_finder_default: 'default',
		lang_finder_name: 'inactive finder',
		lang_finder_distance_to: 'distance relative to',
		lang_finder_player_pop: 'player pop (min / max)',
		lang_finder_village_pop: 'village pop (min / max)',
		lang_finder_distance: 'distance (min / max)',
		lang_finder_add_list: 'add to farmlist',
		lang_finder_inactive_for: 'inactive for',
		lang_finder_days: 'days',

		lang_log_level: 'level',
		lang_log_group: 'group',
		lang_log_message: 'message',
	},
	ar: {
		lang_navbar_king_bot_api: 'مساعد المالك السحابي',
		lang_navbar_home: 'الأوامر الحالية',
		lang_navbar_add_feature: 'إضافة أوامر',
		lang_navbar_extras: 'إضافات',
		lang_navbar_easy_scout: 'التجسس على قوائم المزارع',
		lang_navbar_inactive_finder: 'بحث عن القرى الخاملة',
		lang_navbar_logger: 'سجل العملياة',
		lang_navbar_change_login: 'تغير معلومات الدخول',
		lang_navbar_language: 'اللغة',
		lang_navbar_links: 'روابط',
		lang_navbar_landing_page: 'كيفية إستعمال المساعد',
		lang_navbar_github: 'نسخة المطورين',
		lang_navbar_report_bug: 'التبليغ عن مشكلة',
		lang_navbar_releases: 'تحرير',
		lang_navbar_felixbreuer: 'felixbreuer',
		lang_navbar_donate: 'التبرع',

		lang_easy_scout_amount: 'العدد',

		lang_feature_finish_earlier: 'الإنهاء الفوري',
		lang_feature_hero: 'المغامرات',
		lang_feature_farming: 'قوائم النهب',
		lang_feature_queue: 'أوامر البناء',
		lang_feature_raise_fields: 'رفع الحقول',
		lang_feature_trade_route: 'الطريق التجاري',
		lang_feature_timed_attack: 'إرسال الهجمات',

		lang_home_features: 'الأوامر الخاصه بك',
		lang_home_name: 'الأمر',
		lang_home_description: 'وصف',
		lang_home_status: 'الحالة',
		lang_home_off_on: 'نشط / غير نشط',
		lang_home_options: 'خيارات',

		lang_easy_scout_title: 'التجسس',
		lang_easy_scout_description: 'إرسال 1 جاسوس الى قوائم المزارع المختارة',

		lang_combo_box_select_farmlist: 'إختيار قائمة',
		lang_combo_box_select_village: 'إختيار القرية',

		lang_label_spy_for: 'نوع التجسس',
		lang_label_ressources: 'الموارد',
		lang_label_defence: 'التحصينات',

		lang_table_farmlist: 'قوائم المزارع',
		lang_table_village: 'القرية',
		lang_table_remove: 'حذف',

		lang_table_distance: 'المسافة',
		lang_table_population: 'عدد السكان',
		lang_table_coordinates: 'الإحداثيات',
		lang_table_player: 'إسم الاعب',
		lang_table_kingdom: 'إسم المملكة',
		lang_table_tribe: 'القبيلة',
		lang_table_id: 'المعرف',
		lang_table_name: 'الإسم',
		lang_table_lvl: 'المستوى',
		lang_table_pos: 'الترتيب',

		lang_button_submit: 'تأكيد',
		lang_button_cancel: 'إلغاء',
		lang_button_delete: 'حذف',
		lang_button_search: 'بحث',

		lang_adventure_adventure_type: 'نوع المغامرة',
		lang_adventure_short: 'قصيرة',
		lang_adventure_long: 'طويلة',
		lang_adventure_min_health: 'أدنى نسبة صحة',
		lang_adventure_min: 'أدنى',
		lang_adventure_max: 'أقصى',
		lang_adventure_health: 'الصحة',
		lang_adventure_prov_number: 'إدخل رقم صحيح',

		lang_queue_res_fields: 'حقول الموارد',
		lang_queue_buildings: 'المباني',
		lang_queue_queue: 'الدور',
		lang_queue_level: 'المستوى',
		lang_queue_wood: 'الخشب',
		lang_queue_clay: 'الطين',
		lang_queue_iron: 'الحديد',
		lang_queue_crop: 'القمح',

		lang_farmlist_add: 'إضافة قائمة مزارع',
		lang_farmlist_interval: 'الفترة بالثواني (أدنى / أقصى )',
		lang_farmlist_losses: 'إرسال المزارع التي يظهر فيها خسائر الى',

		lang_finder_default: 'افتراضي',
		lang_finder_name: 'مسكتشف الخاملين',
		lang_finder_distance_to: 'المسافة بالنسبة الى',
		lang_finder_player_pop: 'سكان الاعب ( أدنى /أقصى )',
		lang_finder_village_pop: 'سكان القرية ( أدنى / أقصى )',
		lang_finder_distance: 'السافة ( أدنى / أقصى )',
		lang_finder_add_list: 'إضف للقائمة',
		lang_finder_inactive_for: 'غير نشط منذ',
		lang_finder_days: 'أيام',

		lang_log_level: 'المستوى',
		lang_log_group: 'المجموعة',
		lang_log_message: 'رسالة',
	},
};

class Language {
	availableLanguages = [];
	currentLanguage = 'en';
	store = null;

	constructor() {
		this.availableLanguages = Object.keys(languages);
	}

	translate(token) {
		if (!(token in languages[this.currentLanguage])) return token;
		return languages[this.currentLanguage][token];
	}

	changeLanguage(lang, post = true) {
		// default language
		if (!(lang in languages)) lang = 'en';
		this.currentLanguage = lang;

		if (post) axios.post('/api/language', { language: lang });

		if (!this.store) return;
		this.store.setState({ ...languages[lang] });
	}
}

const storeKeys = Object.keys(languages.en).join(',');

export {
	languages,
	storeKeys,
};

export default new Language();
