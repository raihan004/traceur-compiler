// Copyright 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

traceur.define('syntax.trees', function() {
  'use strict';

  var ParseTree = traceur.syntax.trees.ParseTree;
  var ParseTreeType = traceur.syntax.trees.ParseTreeType;

  /**
   * @param {traceur.util.SourceRange} location
   * @param {ParseTree} condition
   * @param {ParseTree} body
   * @constructor
   * @extends {ParseTree}
   */
  function WhileStatementTree(location, condition, body) {
    ParseTree.call(this, ParseTreeType.WHILE_STATEMENT, location);
    this.condition = condition;
    this.body = body;
  }

  WhileStatementTree.prototype = {
    __proto__: ParseTree.prototype
  };

  return {
    WhileStatementTree: WhileStatementTree
  };
});
