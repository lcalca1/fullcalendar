
export default class EventInstance {

	def: any // EventDef
	dateProfile: any // EventDateProfile


	constructor(def, dateProfile) {
		this.def = def;
		this.dateProfile = dateProfile;
	}


	toLegacy() {
		var dateProfile = this.dateProfile;
		var obj = this.def.toLegacy();

		obj.start = dateProfile.start.clone();
		obj.end = dateProfile.end ? dateProfile.end.clone() : null;

		return obj;
	}

}
