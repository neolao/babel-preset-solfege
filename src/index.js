import syntaxFlow from "babel-plugin-syntax-flow"
import syntaxAsyncFunctions from "babel-plugin-syntax-async-functions"
import syntaxAsyncGenerators from "babel-plugin-syntax-async-generators"
import closureElimination from "babel-plugin-closure-elimination"
import addModuleExports from "babel-plugin-add-module-exports"
import transformFlowStripTypes from "babel-plugin-transform-flow-strip-types"

// Preset Env
import presetEnv from "babel-preset-env"

// Stage 0
import transformDoExpressions from "babel-plugin-transform-do-expressions"
import transformFunctionBind from "babel-plugin-transform-function-bind"

// Stage 1
import transformClassConstructorCall from "babel-plugin-transform-class-constructor-call"
import transformExportExtensions from "babel-plugin-transform-export-extensions"

// Stage 2
import transformClassProperties from "babel-plugin-transform-class-properties"
import transformDecorators from "babel-plugin-transform-decorators"
import syntaxDynamicImport from "babel-plugin-syntax-dynamic-import"

// Stage 3
import syntaxTrailingFunctionCommas from "babel-plugin-syntax-trailing-function-commas"
import transformExponentiationOperator from "babel-plugin-transform-exponentiation-operator"
import transformObjectRestSpread from "babel-plugin-transform-object-rest-spread"

export default {
    presets: [
        presetEnv
    ],
    plugins: [
        // Stage 0
        transformDoExpressions,
        transformFunctionBind,

        // Stage 1
        transformClassConstructorCall,
        transformExportExtensions,

        // Stage 2
        syntaxDynamicImport,
        transformClassProperties,
        //transformDecorators,

        // Stage 3
        syntaxTrailingFunctionCommas, // in ES2017 (remove as a breaking change)
        transformExponentiationOperator,  // in ES2016 (remove as a breaking change)
        transformObjectRestSpread,

        // Custom
        syntaxFlow,
        syntaxAsyncFunctions,
        syntaxAsyncGenerators,
        closureElimination,
        addModuleExports,
        transformFlowStripTypes
    ]
};
