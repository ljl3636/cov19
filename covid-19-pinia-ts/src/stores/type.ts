export interface ChinaTotal {
	mediumRiskAreaNum: number;
	nowConfirm: number;
	dead: number;
	noInfect: number;
	deadAdd: number;
	local_acc_confirm: number;
	highRiskAreaNum: number;
	localConfirm: number;
	mRiskTime: string;
	confirm: number;
	importedCase: number;
	localConfirmH5: number;
	localWzzAdd: number;
	localConfirmAdd: number;
	heal: number;
	nowSevere: number;
	noInfectH5: number;
	confirmAdd: number;
	nowLocalWzz: number;
	mtime: string;
	suspect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
}

export interface ChinaAdd {
	nowConfirm: number;
	nowSevere: number;
	localConfirm: number;
	noInfectH5: number;
	localConfirmH5: number;
	confirm: number;
	heal: number;
	dead: number;
	suspect: number;
	importedCase: number;
	noInfect: number;
}

export interface ShowAddSwitch {
	localConfirm: boolean;
	confirm: boolean;
	heal: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
	all: boolean;
	suspect: boolean;
	dead: boolean;
	nowConfirm: boolean;
}

export interface Total {
	nowConfirm: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	wzz: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	mtime: string;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	confirm: number;
	showRate: boolean;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
}

export interface Total {
	confirm: number;
	heal: number;
	highRiskAreaNum: number;
	continueDayZeroConfirm: number;
	adcode: string;
	wzz: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	provinceLocalConfirm: number;
	dead: number;
	showRate: boolean;
	showHeal: boolean;
	mediumRiskAreaNum: number;
	mtime: string;
}

export interface Today {
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Total {
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	dead: number;
	wzz: number;
	heal: number;
	mtime: string;
	nowConfirm: number;
	confirm: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	mediumRiskAreaNum: number;
	showRate: boolean;
	showHeal: boolean;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface AreaTree {
	total: Total;
	children: Children[];
	name: string;
	today: Today;
}

export interface Diseaseh5Shelf {
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
}

export interface StatisGradeCityDetail {
	syear: number;
	wzz_add: string;
	province: string;
	nowConfirm: number;
	dead: number;
	grade: string;
	mtime: string;
	sdate: string;
	city: string;
	confirmAdd: number;
	confirm: number;
	heal: number;
	date: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}