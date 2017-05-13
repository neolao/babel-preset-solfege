import presetStage0 from "babel-preset-stage-0"
import syntaxFlow from "babel-plugin-syntax-flow"
import syntaxAsyncFunctions from "babel-plugin-syntax-async-functions"
import syntaxAsyncGenerators from "babel-plugin-syntax-async-generators"
import closureElimination from "babel-plugin-closure-elimination"
import addModuleExports from "babel-plugin-add-module-exports"
import transformFlowStripTypes from "babel-plugin-transform-flow-strip-types"
import transformAsyncToGenerator from "babel-plugin-transform-async-to-generator"
import transformAsyncToModuleMethod from "babel-plugin-transform-async-to-module-method"
import transformRegenerator from "babel-plugin-transform-regenerator"
import checkES2015Constants from "babel-plugin-check-es2015-constants"
import transformES2015ArrowFunctions from "babel-plugin-transform-es2015-arrow-functions"
import transformES2015BlockScopedFunctions from "babel-plugin-transform-es2015-block-scoped-functions"
import transformES2015BlockScoping from "babel-plugin-transform-es2015-block-scoping"
import transformES2015ComputedProperties from "babel-plugin-transform-es2015-computed-properties"
import transformES2015Destructuring from "babel-plugin-transform-es2015-destructuring"
import transformES2015ForOf from "babel-plugin-transform-es2015-for-of"
import transformES2015FunctionName from "babel-plugin-transform-es2015-function-name"
import transformES2015Literals from "babel-plugin-transform-es2015-literals"
import transformES2015ModulesCommonJS from "babel-plugin-transform-es2015-modules-commonjs"
import transformES2015ObjectSuper from "babel-plugin-transform-es2015-object-super"
import transformES2015Parameters from "babel-plugin-transform-es2015-parameters"
import transformES2015ShorthandProperties from "babel-plugin-transform-es2015-shorthand-properties"
import transformES2015Spread from "babel-plugin-transform-es2015-spread"
import transformES2015StickyRegex from "babel-plugin-transform-es2015-sticky-regex"
import transformES2015UnicodeRegex from "babel-plugin-transform-es2015-unicode-regex"
import transformES2015TemplateLiterals from "babel-plugin-transform-es2015-template-literals"
import transformES2015TypeofSymbol from "babel-plugin-transform-es2015-typeof-symbol"
import transformDecoratorsLegacy from "babel-plugin-transform-decorators-legacy"

export default {
    presets: [
        presetStage0
    ],
    plugins: [
        syntaxFlow,
        syntaxAsyncFunctions,
        syntaxAsyncGenerators,
        closureElimination,
        addModuleExports,
        transformFlowStripTypes,
        transformAsyncToGenerator,
        transformAsyncToModuleMethod,
        checkES2015Constants,
        transformES2015ArrowFunctions,
        transformES2015BlockScopedFunctions,
        transformES2015BlockScoping,
        transformES2015ComputedProperties,
        transformES2015Destructuring,
        transformES2015ForOf,
        transformES2015FunctionName,
        transformES2015Literals,
        transformES2015ModulesCommonJS,
        transformES2015ObjectSuper,
        transformES2015Parameters,
        transformES2015ShorthandProperties,
        transformES2015Spread,
        transformES2015StickyRegex,
        transformES2015UnicodeRegex,
        transformES2015TemplateLiterals,
        transformES2015TypeofSymbol,
        transformDecoratorsLegacy,
        [
            transformRegenerator,
            {
                "asyncGenerators": false,
                "generators": false,
                "async": false
            }
        ]
    ]
};
