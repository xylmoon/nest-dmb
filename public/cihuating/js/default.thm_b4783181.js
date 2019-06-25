window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","detail":"resource/game/detail.exml","indexLoading":"resource/game/indexLoading.exml","index":"resource/game/index.exml","chapter":"resource/game/chapter.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game/chapter.exml'] = window.chapterSkin = (function (_super) {
	__extends(chapterSkin, _super);
	function chapterSkin() {
		_super.call(this);
		this.skinParts = ["bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","bg_8","bg_9","bgbox"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bgbox_i()];
	}
	var _proto = chapterSkin.prototype;

	_proto.bgbox_i = function () {
		var t = new eui.Group();
		this.bgbox = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_7_i(),this.bg_8_i(),this.bg_9_i()];
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.fillMode = "repeat";
		t.height = 750;
		t.source = "1_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "2_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "3_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "4_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "5_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "6_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "7_png";
		t.visible = false;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.horizontalCenter = 0;
		t.source = "8_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.horizontalCenter = 0;
		t.source = "9_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return chapterSkin;
})(eui.Skin);generateEUI.paths['resource/game/detail.exml'] = window.detailSkin = (function (_super) {
	__extends(detailSkin, _super);
	function detailSkin() {
		_super.call(this);
		this.skinParts = ["background","btn_left","btn_right","btn_mid","loading","mofazhen","shuai","dbtx","dbtx_text","dbtx_group","fenshu"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.background_i(),this.btn_left_i(),this.btn_right_i(),this.btn_mid_i(),this.loading_i(),this.mofazhen_i(),this.shuai_i(),this.dbtx_group_i(),this.fenshu_i()];
	}
	var _proto = detailSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_left_i = function () {
		var t = new eui.Button();
		this.btn_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.label = "jump";
		t.width = 1174;
		t.x = 68;
		t.y = 590;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Button();
		this.btn_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.label = "右";
		t.visible = false;
		t.width = 302;
		t.x = 954;
		t.y = 590;
		return t;
	};
	_proto.btn_mid_i = function () {
		var t = new eui.Button();
		this.btn_mid = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "中间";
		t.visible = false;
		t.width = 484;
		t.x = 420;
		t.y = 590;
		return t;
	};
	_proto.loading_i = function () {
		var t = new eui.Label();
		this.loading = t;
		t.horizontalCenter = 0.5;
		t.size = 300;
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = -102;
		return t;
	};
	_proto.mofazhen_i = function () {
		var t = new eui.Rect();
		this.mofazhen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 300;
		t.ellipseWidth = 300;
		t.fillColor = 0xff0000;
		t.height = 68;
		t.rotation = 1.13;
		t.width = 158;
		t.x = 260;
		t.y = 453;
		return t;
	};
	_proto.shuai_i = function () {
		var t = new eui.Label();
		this.shuai = t;
		t.size = 80;
		t.text = "帅";
		t.textColor = 0x00ff65;
		t.visible = false;
		t.x = 54;
		t.y = 99;
		return t;
	};
	_proto.dbtx_group_i = function () {
		var t = new eui.Group();
		this.dbtx_group = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.dbtx_i(),this.dbtx_text_i()];
		return t;
	};
	_proto.dbtx_i = function () {
		var t = new eui.Rect();
		this.dbtx = t;
		t.fillColor = 0xff0000;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dbtx_text_i = function () {
		var t = new eui.Label();
		this.dbtx_text = t;
		t.size = 100;
		t.text = "地爆天星,神罗降世";
		t.x = 270.66;
		t.y = 73;
		return t;
	};
	_proto.fenshu_i = function () {
		var t = new eui.Label();
		this.fenshu = t;
		t.size = 100;
		t.text = "0";
		t.x = 634;
		t.y = 80;
		return t;
	};
	return detailSkin;
})(eui.Skin);generateEUI.paths['resource/game/index.exml'] = window.indexSkin = (function (_super) {
	__extends(indexSkin, _super);
	function indexSkin() {
		_super.call(this);
		this.skinParts = ["dh1","background","mask2","start","mask_box"];
		
		this.height = 750;
		this.width = 1334;
		this.dh1_i();
		this.elementsContent = [this.background_i(),this.mask_box_i(),this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["start"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
	}
	var _proto = indexSkin.prototype;

	_proto.dh1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dh1 = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "sineIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "sineOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Image();
		this.background = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "index_png";
		t.top = 0;
		return t;
	};
	_proto.mask_box_i = function () {
		var t = new eui.Group();
		this.mask_box = t;
		t.x = 0;
		t.y = 644;
		t.elementsContent = [this.mask2_i(),this.start_i()];
		return t;
	};
	_proto.mask2_i = function () {
		var t = new eui.Rect();
		this.mask2 = t;
		t.fillAlpha = 0.6;
		t.height = 80;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Label();
		this.start = t;
		t.text = "点击任意处，进入游戏";
		t.textColor = 0xffd777;
		t.visible = false;
		t.width = 300;
		t.x = 517;
		t.y = 25;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo_png";
		t.top = 28;
		return t;
	};
	return indexSkin;
})(eui.Skin);generateEUI.paths['resource/game/indexLoading.exml'] = window.indexLoadingSkin = (function (_super) {
	__extends(indexLoadingSkin, _super);
	function indexLoadingSkin() {
		_super.call(this);
		this.skinParts = ["dh1","background","logo","slogan","tel"];
		
		this.height = 750;
		this.width = 1334;
		this.dh1_i();
		this.elementsContent = [this.background_i(),this.logo_i(),this.slogan_i(),this.tel_i()];
		
		eui.Binding.$bindProperties(this, ["logo"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, ["slogan"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["tel"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
	}
	var _proto = indexLoadingSkin.prototype;

	_proto.dh1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dh1 = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Wait1_i(),this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.ease = "sineOut";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait2_i(),this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.ease = "sineOut";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait3_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 2000;
		t.ease = "sineOut";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Label();
		this.logo = t;
		t.horizontalCenter = 0;
		t.size = 80;
		t.text = "xyl";
		t.y = 160.67;
		return t;
	};
	_proto.slogan_i = function () {
		var t = new eui.Label();
		this.slogan = t;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "技术宅拯救世界";
		t.y = 279.67;
		return t;
	};
	_proto.tel_i = function () {
		var t = new eui.Label();
		this.tel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "游戏无任何商业价值，资源素材均网上同人，如有侵权请联系QQ：382083785";
		t.textColor = 0x6c6c6c;
		t.y = 628;
		return t;
	};
	return indexLoadingSkin;
})(eui.Skin);