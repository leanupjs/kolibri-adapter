/*!
 * KoliBri - the accessible web component library
 */
import{i as t,a as i}from"./icon-84467ebb.js";import{b as s,d as e}from"./a11y.tipps-aa545fdc.js";import{b as n,w as a,o,p as h,a as r,s as d,d as l}from"./prop.validators-65dada2e.js";const c=t=>{const n="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,e=[];return!0===n&&e.push(`${t._id}-error`),!0===o&&e.push(`${t._id}-hint`),{hasError:n,hasHint:o,ariaDiscribedBy:e}},v=(n,o)=>{const e=n;"object"==typeof e&&null!==e&&(t(e.right,1)&&(e.right={icon:e.right}),t(e.left,1)&&(e.left={icon:e.left}),o.set("_icon",e))};class u extends class{constructor(t,n){this.component=t,this.name=n}validateAlert(t){n(this.component,"_alert",t)}validateTouched(t){n(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}{constructor(t,n){super(t,n),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){a(this.component,"_accessKey",t)}validateDisabled(t){n(this.component,"_disabled",t),!0===t&&s()}validateError(t){a(this.component,"_error",t,{minLength:0})}validateHideLabel(t){n(this.component,"_hideLabel",t)}validateHint(t){a(this.component,"_hint",t)}validateIcon(n){o(n,(()=>{try{n=h(n)}catch(t){}r(this.component,"_icon",(n=>"object"==typeof n&&null!==n&&(t(n.left,1)||i(n.left)||t(n.right,1)||i(n.right))),new Set(["KoliBriInputIcon"]),n,{hooks:{beforePatch:v},required:!0})}))}validateId(t){a(this.component,"_id",t),void 0===t&&e("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){a(this.component,"_name",t),void 0===t&&e("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&d(this.component,"_on",t)}validateSmartButton(t){o(t,(()=>{try{t=h(t)}catch(t){}d(this.component,"_smartButton",t)}))}validateTabIndex(t){l(this.component,"_tabIndex",t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var n;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onBlur)&&this.component._on.onBlur(t)}onChange(t){var n;"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var n;"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onClick)&&this.component._on.onClick(t)}onFocus(t){var n;this.component._alert=!0,"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onFocus)&&this.component._on.onFocus(t)}setValue(t,n){var o;"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,n)}}export{u as I,c as g};