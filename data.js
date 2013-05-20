var data = {

/* * * * * * * * * * * *

 Ext globals

 * * * * * * * * * * * */

"Ext": [

	{
		"name": "Ext._startTime",
		"ext": true
	},
	{
		"name": "$previous",
		"ext": true
	},
	{
		"name": "Function.prototype.$extIsFunction",
		"ext": true,
		"notes": "Used in Ext.isFunction."
	},
	{
		"name": "Ext.enumerables",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-enumerables",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-property-enumerables"
	},
	{
		"name": "Ext.apply",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-apply",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-apply"
	},
	{
		"name": "Ext.buildSettings",
		"ext": true,
		"touch": true,
		"different": true
	},
	{
		"name": "Ext.name",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-name"
	},
	{
		"name": "Ext.emptyFn",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-emptyFn",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-property-emptyFn"
	},
	{
		"name": "Ext.identityFn",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-identityFn"
	},
	{
		"name": "Ext.emptyString",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-emptyString"
	},
	{
		"name": "Ext.baseCSSPrefix",
		"ext": true,
		"touch": true
	},
	{
		"name": "Ext.applyIf",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-applyIf",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-applyIf"
	},
	{
		"name": "Ext.iterate",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-iterate",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-iterate"
	},
	{
		"name": "Ext.extend",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-extend",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-extend"
	},
	{
		"name": "Ext.override",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-override",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-override",
		"different": true,
		"notes": "ExtJS's overrides methods (messing with prototypes/Ext.define'd things). Touch's is deprecated (\"please use Ext.define instead\") and is a \"proxy to Ext.Base.override\"."
	},
	{
		"name": "Ext.valueFrom",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-valueFrom",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-valueFrom"
	},
	{
		"name": "Ext.typeOf",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-typeOf",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-typeOf"
	},
	{
		"name": "Ext.coerce",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-coerce"
	},
	{
		"name": "Ext.isEmpty",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isEmpty",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isEmpty"
	},
	{
		"name": "Ext.isArray",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isArray",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isArray"
	},
	{
		"name": "Ext.isDate",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isDate",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isDate"
	},
	{
		"name": "Ext.isMSDate",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isMSDate"
	},
	{
		"name": "Ext.isObject",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isObject",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isObject"
	},
	{
		"name": "Ext.isSimpleObject",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isSimpleObject",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isSimpleObject"
	},
	{
		"name": "Ext.isPrimitive",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isPrimitive",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isPrimitive"
	},
	{
		"name": "Ext.isFunction",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isFunction",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isFunction",
		"different": true,
		"notes": "Implementations vary. Ext checks for a custom internal property called $extIsFunction. Touch works out some Safari inconsistencies."
	},
	{
		"name": "Ext.isNumber",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isNumber",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isNumber"
	},
	{
		"name": "Ext.isNumeric",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isNumeric",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isNumeric"
	},
	{
		"name": "Ext.isString",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isString",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isString"
	},
	{
		"name": "Ext.isBoolean",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isBoolean",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isBoolean"
	},
	{
		"name": "Ext.isElement",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isElement",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isElement"
	},
	{
		"name": "Ext.isTextNode",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isTextNode",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isTextNode"
	},
	{
		"name": "Ext.isDefined",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isDefined",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isDefined"
	},
	{
		"name": "Ext.isIterable",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-isIterable",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-isIterable",
		"different": true,
		"notes": "Implementations vary. Ext's seems more reliable."
	},
	{
		"name": "Ext.clone",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-clone",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-clone"
	},
	{
		"name": "Ext.getUniqueGlobalNamespace",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-getUniqueGlobalNamespace",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-getUniqueGlobalNamespace"
	},
	{
		"name": "Ext.functionFactoryCache",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-functionFactoryCache"
	},
	{
		"name": "Ext.cacheableFunctionFactory",
		"ext": true
	},
	{
		"name": "Ext.functionFactory",
		"ext": true,
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-functionFactory",
		"different": true,
		"notes": "Implementations vary. Private."
	},
	{
		"name": "Ext.globalEval",
		"ext": true,
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-property-globalEval",
		"different": true,
		"notes": "Ext has \"var Ext = this.ext\" before calling the eval. Touch does not."
	},
	{
		"name": "Ext.Logger",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-Logger",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-property-Logger",
		"different": true
	},
	{
		"name": "Ext.type",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-type",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-type"
	},
	{
		"name": "Ext.collectNamespaces",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-collectNamespaces"
	},
	{
		"name": "Ext.addNamespaces",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-addNamespaces"
	},
	{
		"name": "Ext.clearNamespaces",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-clearNamespaces"
	},
	{
		"name": "Ext.getNamespace",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-getNamespace"
	},

	{
		"name": "Ext.versions",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-versions",
		"touch": true
	},
	{
		"name": "Ext.lastRegisteredVersion",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-property-lastRegisteredVersion",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-property-lastRegisteredVersion"
	},
	{
		"name": "Ext.setVersion",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-setVersion",
		"touch": true
	},
	{
		"name": "Ext.getVersion",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-getVersion",
		"touch": true
	},
	{
		"name": "Ext.deprecate",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-deprecate",
		"touch": true
	},
	{
		"name": "Ext.htmlEncode",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-htmlEncode",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-htmlEncode",
		"different": true,
		"notes": "Deprecated."
	},
	{
		"name": "Ext.htmlDecode",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-htmlDecode",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-htmlDecode",
		"different": true,
		"notes": "Deprecated."
	},
	{
		"name": "Ext.urlAppend",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-urlAppend",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-urlAppend",
		"notes": "Deprecated."
	},
	{
		"name": "Ext.num",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext-method-num",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext-method-num",
		"notes": "Deprecated."
	}

],

/* * * * * * * * * * * *

 Ext.Number

 * * * * * * * * * * * */

"Ext.Number": [

	{
		"name": "Ext.Number.constrain",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-constrain",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Number-method-constrain",
		"different": true,
		"notes": "Most notably, implementations deal with NaN differently."
	},
	{
		"name": "Ext.Number.snap",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-snap",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Number-method-snap",
		"notes": "Implementations vary slightly."
	},
	{
		"name": "Ext.Number.snapInRange",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-snapInRange"
	},
	{
		"name": "Ext.Number.toFixed",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-toFixed",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Number-method-toFixed",
		"notes": "Implementations vary slightly."
	},
	{
		"name": "Ext.Number.from",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-from",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Number-method-from"
	},
	{
		"name": "Ext.Number.randomInt",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-randomInt"
	},
	{
		"name": "Ext.Number.correctFloat",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Number-method-correctFloat"
	}

],

/* * * * * * * * * * * *

 Ext.String

 * * * * * * * * * * * */

"Ext.String": [

	{
		"name": "Ext.String.trimRegex",
		"touch": true,
		"notes": "Private in Ext and public in Touch."
	},
	{
		"name": "Ext.String.escapeRe",
		"touch": true,
		"notes": "Private in Ext and public in Touch."
	},
	{
		"name": "Ext.String.formatRe",
		"touch": true,
		"notes": "Private in Ext and public in Touch."
	},
	{
		"name": "Ext.String.escapeRegexRe",
		"touch": true,
		"notes": "Private in Ext and public in Touch."
	},
	{
		"name": "Ext.String.htmlEncode",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-htmlEncode",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-htmlEncode",
		"different": true
	},
	{
		"name": "Ext.String.htmlDecode",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-htmlDecode",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-htmlDecode",
		"different": true
	},
	{
		"name": "Ext.String.insert",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-insert"
	},
	{
		"name": "Ext.String.startsWith",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-startsWith"
	},
	{
		"name": "Ext.String.endsWith",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-endsWith"
	},
	{
		"name": "Ext.String.addCharacterEntities",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-addCharacterEntities"
	},
	{
		"name": "Ext.String.resetCharacterEntities",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-resetCharacterEntities"
	},
	{
		"name": "Ext.String.urlAppend",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-urlAppend",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-urlAppend"
	},
	{
		"name": "Ext.String.trim",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-trim",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-trim"
	},
	{
		"name": "Ext.String.capitalize",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-capitalize",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-capitalize"
	},
	{
		"name": "Ext.String.uncapitalize",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-uncapitalize"
	},
	{
		"name": "Ext.String.ellipsis",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-ellipsis",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-ellipsis"
	},
	{
		"name": "Ext.String.escapeRegex",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-escapeRegex",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-escapeRegex"
	},
	{
		"name": "Ext.String.escape",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-escape",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-escape"
	},
	{
		"name": "Ext.String.toggle",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-toggle",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-toggle"
	},
	{
		"name": "Ext.String.leftPad",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-leftPad",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-leftPad"
	},
	{
		"name": "Ext.String.format",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-format",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-format"
	},
	{
		"name": "Ext.String.repeat",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-repeat",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.String-method-repeat",
		"different": true,
		"notes": "Ext checks for a negative count."
	},
	{
		"name": "Ext.String.createVarName",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-createVarName"
	},
	{
		"name": "Ext.String.splitWords",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.String-method-splitWords"
	}

],

/* * * * * * * * * * * *

 Ext.Version

 * * * * * * * * * * * */

"Ext.Version": [

	{
		"name": "Ext.Version",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version"
	},
	{
		"name": "Ext.Version#toString",
		"ext": true,
		"touch": true
	},
	{
		"name": "Ext.Version#valueOf",
		"ext": true,
		"touch": true
	},
	{
		"name": "Ext.Version#deprecate",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-deprecate"
	},
	{
		"name": "Ext.Version#equals",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-equals",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-equals"
	},
	{
		"name": "Ext.Version#getBuild",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getBuild",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getBuild"
	},
	{
		"name": "Ext.Version#getMajor",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getMajor",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getMajor"
	},
	{
		"name": "Ext.Version#getMinor",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getMinor",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getMinor"
	},
	{
		"name": "Ext.Version#getPatch",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getPatch",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getPatch"
	},
	{
		"name": "Ext.Version#getRelease",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getRelease",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getRelease"
	},
	{
		"name": "Ext.Version#getShortVersion",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-getShortVersion",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getShortVersion"
	},
	{
		"name": "Ext.Version#getVersion",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-getVersion"
	},
	{
		"name": "Ext.Version#gt",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-gt",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-gt"
	},
	{
		"name": "Ext.Version#gtEq",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-gtEq",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-gtEq"
	},
	{
		"name": "Ext.Version#isGreaterThan",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-isGreaterThan",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-isGreaterThan"
	},
	{
		"name": "Ext.Version#isGreaterThanOrEqual",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-isGreaterThanOrEqual",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-isGreaterThanOrEqual"
	},
	{
		"name": "Ext.Version#isLessThan",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-isLessThan",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-isLessThan"
	},
	{
		"name": "Ext.Version#isLessThanOrEqual",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-isLessThanOrEqual",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-isLessThanOrEqual"
	},
	{
		"name": "Ext.Version#lt",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-lt",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-lt"
	},
	{
		"name": "Ext.Version#ltEq",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-ltEq",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-ltEq"
	},
	{
		"name": "Ext.Version#match",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-match",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-match"
	},
	{
		"name": "Ext.Version#setVersion",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-setVersion"
	},
	{
		"name": "Ext.Version#toArray",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-method-toArray",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-toArray"
	},
	{
		"name": "Ext.Version#toNumber",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-method-toNumber"
	},
	{
		"name": "Ext.Version.releaseValueMap",
		"ext": true,
		"touch": true
	},
	{
		"name": "Ext.Version.compare",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-static-method-compare",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-static-method-compare"
	},
	{
		"name": "Ext.Version.getComponentValue",
		"ext": "http://docs.sencha.com/extjs/4.2.0/#!/api/Ext.Version-static-method-getComponentValue",
		"touch": "http://docs.sencha.com/touch/2.2.0/#!/api/Ext.Version-static-method-getComponentValue"
	}

]

};