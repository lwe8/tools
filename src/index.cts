import _t = require("@babel/types");
import g = require("@babel/generator");
import p = require("@babel/parser");

namespace tools {
  export const t = _t;
  export const generate = g.generate;
  export const CodeGenerator = g.CodeGenerator;
  export type GeneratorOptions = g.GeneratorOptions;
  export type GeneratorResult = g.GeneratorResult;
  export const parse = p.parse;
  export const parseExpression = p.parseExpression;
  export const tokTypes = p.tokTypes;
  export type DecoratorsPluginOptions = p.DecoratorsPluginOptions;
  export type FlowPluginOptions = p.FlowPluginOptions;
  export type ParseError = p.ParseError;
  export type ParseResult = p.ParseResult;
  export type ParserOptions = p.ParserOptions;
  export type ParserPluginWithOptions = p.ParserPluginWithOptions;
  export type ParserPlugin = p.ParserPlugin;
  export type PipelineOperatorPluginOptions = p.PipelineOperatorPluginOptions;
  export type RecordAndTuplePluginOptions = p.RecordAndTuplePluginOptions;
  export type TypeScriptPluginOptions = p.TypeScriptPluginOptions;
}

export = tools;
