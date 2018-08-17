module.exports.genTheme = colors => {
  let { syntax, bg, fg, pos, neg, ui } = colors;

  // sets the workbench colors to a gradient between bg and fg
  let m1, m2, m3, m4, m5, m6, m7, m8;
  let g = gradient(bg, fg);
  m1 = bg;
  m2 = g[0];
  m3 = g[1];
  m4 = g[2];
  m5 = g[3];
  m6 = g[5];
  m7 = g[7];
  m8 = fg;
  let m15 = gradient(m1, m2)[5];

  let t1, t2, t3, t4, t5;
  t1 = syntax[0 % syntax.length];
  t2 = syntax[1 % syntax.length];
  t3 = syntax[2 % syntax.length];
  t4 = syntax[3 % syntax.length];
  t5 = syntax[4 % syntax.length];
  
  if (!neg) neg = t1;
  if (!pos) pos = t2;

  let pos_faint = `${pos}44`;
  let neg_faint = `${neg}44`;
  let theme = {
    "colors": {
      "foreground": m8,
      "errorForeground": neg,
      "focusBorder": ui,
      "contrastBorder": m1,
      "input.foreground": m8,
      "input.background": m2,
      "input.placeholderForeground": m6,
      "input.border": `${ui}44`,
      "inputOption.activeBorder": m8,
      "inputValidation.infoBackground": t3,
      "inputValidation.infoBorder": t3,
      "inputValidation.warningBackground": neg,
      "inputValidation.warningBorder": neg,
      "inputValidation.errorBackground": neg,
      "inputValidation.errorBorder": neg,
      "dropdown.background": m1,
      "dropdown.foreground": m8,
      "dropdown.border": "#00000000",
      "list.errorForeground": neg,
      "list.warningForeground": neg,
      "list.invalidItemForeground": neg,
      "list.focusBackground": m4,
      "list.focusForeground": m8,
      "list.activeSelectionBackground": m3,
      "list.activeSelectionForeground": m8,
      "list.inactiveSelectionBackground": m3,
      "list.inactiveSelectionForeground": m8,
      "list.hoverBackground": m2,
      "list.hoverForeground": m8,
      "list.highlightForeground": m8,
      "pickerGroup.foreground": t3,
      "button.foreground": m1,
      "button.background": ui,
      "button.hoverBackground": t3,
      "badge.background": ui,
      "badge.foreground": m1,
      "scrollbarSlider.background": m4,
      "scrollbarSlider.hoverBackground": m3,
      "scrollbarSlider.activeBackground": m3,
      "progressBar.background": t3,
      "editor.background": m1,
      "editor.foreground": m8,
      "editorWidget.background": m1,
      "editor.selectionBackground": m3,
      "editor.inactiveSelectionBackground": m3,
      "editor.selectionHighlightBackground": m2,
      "editor.findMatchHighlightBackground": pos_faint,
      "editor.findRangeHighlightBackground": m2,
      "editor.hoverHighlightBackground": m1,
      "editorSuggestWidget.background": m2,
      "editorSuggestWidget.border": m5,
      "editorSuggestWidget.foreground": m8,
      "editorHoverWidget.background": m2,
      "editorHoverWidget.border": ui,
      "diffEditor.insertedTextBackground": pos_faint,
      "diffEditor.removedTextBackground": neg_faint,
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.removedTextBorder": "#00000000",
      "merge.currentHeaderBackground": t3,
      "merge.incomingHeaderBackground": t3,
      "editorOverviewRuler.currentContentForeground": t3,
      "editorOverviewRuler.incomingContentForeground": t3,
      "editorOverviewRuler.commonContentForeground": t3,
      "editor.lineHighlightBackground": m2,
      "editor.lineHighlightBorder": m2,
      "editor.rangeHighlightBackground": m2,
      "editorCursor.foreground": m6,
      "editorIndentGuide.background": m3,
      "editorIndentGuide.activeBackground": m5,
      "editorLineNumber.foreground": m6,
      "editorRuler.foreground": m6,
      "editorError.foreground": neg,
      "editorWarning.foreground": neg,
      "editorMarkerNavigationError.background": neg,
      "editorMarkerNavigationWarning.background": neg,
      "editorMarkerNavigation.background": m1,
      "editor.wordHighlightBackground": m3,
      "editor.wordHighlightStrongBackground": m2,
      "peekViewTitle.background": m1,
      "peekViewTitleLabel.foreground": m8,
      "peekView.border": t3,
      "peekViewResult.lineForeground": m8,
      "peekViewResult.fileForeground": m8,
      "peekViewResult.selectionForeground": m8,
      "peekViewResult.matchHighlightBackground": pos_faint,
      "peekViewEditor.matchHighlightBackground": pos_faint,
      "tab.activeBackground": m3,
      "tab.inactiveBackground": m2,
      "tab.border": m1,
      "tab.activeBorder": ui,
      "tab.unfocusedActiveBorder": m1,
      "tab.activeForeground": m8,
      "tab.inactiveForeground": m6,
      "editorGroupHeader.tabsBackground": m1,
      "editorGroupHeader.tabsBorder": m1,
      "panel.background": m1,
      "panel.border": m1,
      "panelTitle.activeForeground": m8,
      "panelTitle.inactiveForeground": m6,
      "panelTitle.activeBorder": ui,
      "statusBar.foreground": m1,
      "statusBar.background": m6,
      "statusBar.noFolderBackground": m1,
      "statusBar.border": m1,
      "activityBar.background": m1,
      "activityBar.foreground": m5,
      "activityBar.border": m1,
      "activityBar.dropBackground": t3,
      "activityBarBadge.background": ui,
      "activityBarBadge.foreground": m1,
      "sideBar.background": m15,
      "sideBar.foreground": m8,
      "sideBar.border": m1,
      "sideBarTitle.foreground": m8,
      "sideBarSectionHeader.background": `${ui}33`,
      "sideBarSectionHeader.foreground": `${m8}aa`,
      "titleBar.activeForeground": m1,
      "titleBar.inactiveForeground": m1,
      "titleBar.activeBackground": m6,
      "debugExceptionWidget.border": t3,
      "debugExceptionWidget.background": m1,
      "editorGutter.modifiedBackground": `${t3}44`,
      "editorGutter.addedBackground": pos_faint,
      "editorGutter.deletedBackground": neg_faint,
      "debugToolBar.background": m1,
      "extensionButton.prominentBackground": t3,
      "extensionButton.prominentForeground": m1,
      "extensionButton.prominentHoverBackground": t3,
      "settings.textInputBackground": m3,
      "settings.checkboxBackground": m3,
      "settings.numberInputBackground": m3,
      "settings.dropdownBackground": m3,
      "settings.checkboxForeground": m8,
      "settings.inactiveSelectedItemBorder": ui,
      "settings.modifiedItemForeground": ui,
      "settings.textInputBorder": "#0000",
      "settings.checkboxBorder": "#0000",
      "settings.numberInputBorder": "#0000",
      "settings.dropdownBorder": "#0000",
      "terminal.ansiBlack": m7,
      "terminal.ansiRed": neg,
      "terminal.ansiGreen": pos,
      "terminal.ansiYellow": t4,
      "terminal.ansiBlue": t5,
      "terminal.ansiMagenta": t1,
      "terminal.ansiCyan": t3,
      "terminal.ansiWhite": m8,
      "terminal.ansiBrightBlack": m7,
      "terminal.ansiBrightRed": neg,
      "terminal.ansiBrightGreen": pos,
      "terminal.ansiBrightYellow": t4,
      "terminal.ansiBrightBlue": t3,
      "terminal.ansiBrightMagenta": t2,
      "terminal.ansiBrightCyan": t3,
      "terminal.ansiBrightWhite": m8,
      "gitDecoration.modifiedResourceForeground": t5,
      "gitDecoration.untrackedResourceForeground": pos,
      "gitDecoration.ignoredResourceForeground": m6,
      "gitDecoration.conflictingResourceForeground": neg
    },
    "tokenColors": [
      {
        "settings": {
          "foreground": m8,
          "background": m1
        }
      },
      // comments
      {
        "name": "Comment",
        "scope": [
          "comment",
          "comment.line.double-slash"
        ],
        "settings": {
          "foreground": m5
        }
      },
      // strings
      {
        "name": "String",
        "scope": [
          "string",
          "string.quoted"
        ],
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "RegExp String",
        "scope": [
          "string.regexp",
          "string.regexp keyword.other",
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Template Strings",
        "scope": [
          "string.template meta.template.expression",
          "string.template.js"
        ],
        "settings": {
          "foreground": t1
        }
      },
      // booleans
      {
        "name": "Boolean",
        "scope": "constant.language.boolean",
        "settings": {
          "foreground": t5
        }
      },
      // constants
      {
        "name": "Support Constant Math",
        "scope": "support.constant.math",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Built-in constant",
        "scope": [
          "constant.language",
          "punctuation.definition.constant",
          "variable.other.constant",
          "source.elixir constant.other.symbol.elixir",
          "source.elixir constant.other.keywords.elixir"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "User-defined constant",
        "scope": [
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Support Constant, `new` keyword, Special Method Keyword",
        "scope": [
          "support.constant",
          "keyword.other.special-method",
          "keyword.other.new"
        ],
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "JSON Support Constants",
        "scope": "support.constant.json",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Constant Character Escape",
        "scope": "constant.character.escape",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric",
          "constant.character.numeric"
        ],
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Comma in functions",
        "scope": "meta.function punctuation.separator.comma",
        "settings": {
          "foreground": m7
        }
      },
      {
        "name": "Variable",
        "scope": "variable",
        "settings": {
          "foreground": t4
        }
      },
      // keywords
      {
        "name": "Keyword",
        "scope": [
          "punctuation.accessor",
          "keyword"
        ],
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Keyword Other Unit",
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Keyword Operator",
        "scope": "keyword.operator",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Null",
        "scope": "constant.language.null",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Storage type",
        "scope": [
          "storage.type",
          "meta.var.expr storage.type",
          "meta.class meta.method.declaration meta.var.expr storage.type.js"
        ],
        "settings": {
          "foreground": t1
        }
      },
      // class names
      {
        "name": "Class name",
        "scope": [
          "entity.name.class",
          "meta.class entity.name.type.class"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Inherited class",
        "scope": "entity.other.inherited-class",
        "settings": {
          "foreground": t3
        }
      },
      // function names
      {
        "name": "Function name",
        "scope": "entity.name.function",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Function Parameters",
        "scope": "variable.parameter",
        "settings": {
          "foreground": t3
        }
      },
      // meta
      {
        "name": "Meta Tag",
        "scope": [
          "punctuation.definition.tag",
          "meta.tag"
        ],
        "settings": {
          "foreground": m8
        }
      },
      // documentation
      {
        "name": "Entity Names in Code Documentations",
        "scope": [
          "entity.name.type.instance.jsdoc",
          "entity.name.type.instance.phpdoc"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Other Variables in Code Documentations",
        "scope": [
          "variable.other.jsdoc",
          "variable.other.phpdoc"
        ],
        "settings": {
          "foreground": t3
        }
      },
      // Language: HTML
      {
        "name": "HTML Tag names",
        "scope": [
          "support.class.component",
          "meta.tag.other.html",
          "meta.tag.other.js",
          "meta.tag.other.tsx",
          "meta.tag.js",
          "meta.tag.tsx",
          "meta.tag.html"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "HTML Tag names",
        "scope": [
          "entity.name.tag.tsx",
          "entity.name.tag.js",
          "entity.name.tag"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "ID Attribute Name in HTML",
        "scope": "entity.other.attribute-name.id.html",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "HTML Punctuation Definition Tag",
        "scope": "punctuation.definition.tag.html",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "HTML Doctype",
        "scope": "meta.tag.sgml.doctype.html",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Tag attribute",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Entity Name Tag Custom",
        "scope": "entity.name.tag.custom",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Library (function & constant)",
        "scope": [
          "support.function",
          "support.constant"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Support Constant Property Value meta",
        "scope": "support.constant.meta.property-value",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Support Variable DOM",
        "scope": "support.variable.dom",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Keyword Operator Relational",
        "scope": "keyword.operator.relational",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Keyword Operator Assignment",
        "scope": "keyword.operator.assignment",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Meta Brace",
        "scope": "meta.brace",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Meta Delimiter Period",
        "scope": "meta.delimiter.period",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Object Comma",
        "scope": "object.comma",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Variable Parameter Function",
        "scope": "variable.parameter.function",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Support Type Property Name & entity name tags",
        "scope": [
          "support.type.vendored.property-name",
          "support.constant.vendored.property-value",
          "support.type.property-name",
          "meta.property-list entity.name.tag"
        ],
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Entity Name tag reference in stylesheets",
        "scope": "meta.property-list entity.name.tag.reference",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Constant Other Color RGB Value Punctuation Definition Constant",
        "scope": "constant.other.color.rgb-value punctuation.definition.constant",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Constant Other Color",
        "scope": "constant.other.color",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Meta Selector",
        "scope": "meta.selector",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Entity Other Attribute Name Id",
        "scope": "entity.other.attribute-name.id",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Meta Property Name",
        "scope": "meta.property-name",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Doctypes",
        "scope": [
          "entity.name.tag.doctype",
          "meta.tag.sgml.doctype"
        ],
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Punctuation Definition Parameters",
        "scope": "punctuation.definition.parameters",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Keyword Control Operator",
        "scope": "keyword.control.operator",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Keyword Operator Logical",
        "scope": "keyword.operator.logical",
        "settings": {
          "foreground": t2
        }
      },
      // variables
      {
        "name": "Variable Instances",
        "scope": [
          "variable.instance",
          "variable.other.instance",
          "variable.reaedwrite.instance",
          "variable.other.readwrite.instance"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Language Variable",
        "scope": "variable.language",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Variable Property Other",
        "scope": [
          "variable.other.property",
          "variable.other.object.property"
        ],
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Entity Name Function",
        "scope": "entity.name.function",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Keyword Operator Comparison",
        "scope": "keyword.operator.comparison",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Support Function",
        "scope": "support.function",
        "settings": {
          "foreground": t5
        }
      },
      // errors
      {
        "name": "Invalid",
        "scope": [
          "invalid",
          "invalid.deprecated"
        ],
        "settings": {
          "background": neg_faint,
          "foreground": m8
        }
      },
      {
        "name": "Invalid Broken",
        "scope": "invalid.broken",
        "settings": {
          "background": neg_faint,
          "foreground": m8
        }
      },
      {
        "name": "Invalid Unimplemented",
        "scope": "invalid.unimplemented",
        "settings": {
          "background": neg_faint,
          "foreground": m8
        }
      },
      {
        "name": "Invalid Illegal",
        "scope": "invalid.illegal",
        "settings": {
          "foreground": m8,
          "background": neg_faint
        }
      },
      {
        "name": "Support Variable Property",
        "scope": "support.variable.property",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Variable Function",
        "scope": "variable.function",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Variable Interpolation",
        "scope": "variable.interpolation",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Meta Function Call",
        "scope": "meta.function-call",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Punctuation Section Embedded",
        "scope": "punctuation.section.embedded",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Italics",
        "scope": "italic",
        "settings": {
          "foreground": t2,
          "fontStyle": "italic"
        }
      },
      {
        "name": "Bold",
        "scope": "bold",
        "settings": {
          "foreground": t4,
          "fontStyle": "bold"
        }
      },
      {
        "name": "Quote",
        "scope": "quote",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Raw Code",
        "scope": "raw",
        "settings": {
          "foreground": t3
        }
      },
      // language: CoffeeScript
      {
        "name": "CoffeeScript Variable Assignment",
        "scope": "variable.assignment.coffee",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "CoffeeScript Parameter Function",
        "scope": "variable.parameter.function.coffee",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "CoffeeScript Assignments",
        "scope": "variable.assignment.coffee",
        "settings": {
          "foreground": t5
        }
      },
      // Language: C#
      {
        "name": "C# Readwrite Variables",
        "scope": "variable.other.readwrite.cs",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "C# Classes & Storage types",
        "scope": [
          "entity.name.type.class.cs",
          "storage.type.cs"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "C# Namespaces",
        "scope": "entity.name.type.namespace.cs",
        "settings": {
          "foreground": t2
        }
      },
      // Language: CSS
      {
        "name": "Tag names in Stylesheets",
        "scope": [
          "entity.name.tag.css",
          "entity.name.tag.less",
          "entity.name.tag.custom.css"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Wildcard(*) selector in Stylesheets",
        "scope": [
          "entity.name.tag.wildcard.css",
          "entity.name.tag.wildcard.less",
          "entity.name.tag.wildcard.scss",
          "entity.name.tag.wildcard.sass"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "CSS Keyword Other Unit",
        "scope": "keyword.other.unit.css",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Attribute Name for CSS",
        "scope": "meta.attribute-selector.css entity.other.attribute-name.attribute",
        "settings": {
          "foreground": t5
        }
      },
      // Language: Elixir
      {
        "name": "Elixir Classes",
        "scope": [
          "source.elixir support.type.elixir",
          "source.elixir meta.module.elixir entity.name.class.elixir"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Elixir Functions",
        "scope": "source.elixir entity.name.function",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Elixir String Punctuations",
        "scope": "source.elixir punctuation.definition.string",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Elixir",
        "scope": [
          "source.elixir variable.other.readwrite.module.elixir",
          "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Elixir Binary Punctuations",
        "scope": "source.elixir .punctuation.binary.elixir",
        "settings": {
          "foreground": t2
        }
      },
      // Language: Go 
      {
        "name": "Go Function Calls",
        "scope": "source.go meta.function-call.go",
        "settings": {
          "foreground": t4
        }
      },
      // Language: Javascript
      {
        "name": "JavaScript Classes",
        "scope": "meta.class entity.name.type.class.js",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "JavaScript Method Declaration e.g. `constructor`",
        "scope": "meta.method.declaration storage.type.js",
        "settings": {
          "foreground": t4,
          "fontStyle": "normal"
        }
      },
      {
        "name": "JavaScript Terminator",
        "scope": "terminator.js",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript Meta Punctuation Definition",
        "scope": "meta.js punctuation.definition.js",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript module import",
        "scope": [
          "variable.other.meta.import.js",
          "meta.import.js variable.other"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript Variable Parameter Function",
        "scope": "variable.parameter.function.js",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "JavaScript Variable Other ReadWrite",
        "scope": "variable.other.readwrite.js",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript[React] Variable Other Object",
        "scope": [
          "variable.other.object.js",
          "variable.other.object.jsx",
          "variable.object.property.js",
          "variable.object.property.jsx"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript Variables",
        "scope": [
          "variable.js",
          "variable.other.js"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "JavaScript Entity Name Type",
        "scope": [
          "entity.name.type.js",
          "entity.name.type.module.js"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "JavaScript Support Classes",
        "scope": "support.class.js",
        "settings": {
          "foreground": m8
        }
      },
      // Language: JSON
      {
        "name": "JSON Property Names",
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "JSON Property values (string)",
        "scope": "meta.structure.dictionary.value.json string.quoted.double",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Strings in JSON values",
        "scope": "string.quoted.double.json punctuation.definition.string.json",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Specific JSON Property values like null",
        "scope": "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
        "settings": {
          "foreground": t5
        }
      },
      // language: Ruby
      {
        "name": "Ruby Variables",
        "scope": "variable.other.ruby",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Ruby Hashkeys",
        "scope": "constant.language.symbol.hashkey.ruby",
        "settings": {
          "foreground": t5
        }
      },
      // Language: LESS
      {
        "name": "LESS Tag names",
        "scope": "entity.name.tag.less",
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "LESS Keyword Other Unit",
        "scope": "keyword.other.unit.css",
        "settings": {
          "foreground": t2
        }
      },
      {
        "name": "Attribute Name for LESS",
        "scope": "meta.attribute-selector.less entity.other.attribute-name.attribute",
        "settings": {
          "foreground": t5
        }
      },
      // Language: Markdown
      {
        "name": "Markdown Headings",
        "scope": "markup.heading.markdown",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Markdown Italics",
        "scope": "markup.italic.markdown",
        "settings": {
          "foreground": t1,
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markdown Bold",
        "scope": "markup.bold.markdown",
        "settings": {
          "foreground": m8,
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown Quote + others",
        "scope": "markup.quote.markdown",
        "settings": {
          "foreground": t3,
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markdown Raw Code + others",
        "scope": "markup.inline.raw.markdown",
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Markdown Links",
        "scope": [
          "markup.underline.link.markdown",
          "markup.underline.link.image.markdown"
        ],
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Markdown Link Title and Description",
        "scope": [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Markdown Punctuation",
        "scope": [
          "punctuation.definition.string.markdown",
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "meta.link.inline.markdown punctuation.definition.string"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Markdown MetaData Punctuation",
        "scope": [
          "punctuation.definition.metadata.markdown"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "Markdown List Punctuation",
        "scope": [
          "beginning.punctuation.definition.list.markdown"
        ],
        "settings": {
          "foreground": t2
        }
      },
      // Language: PHP
      {
        "name": "Support Classes in PHP",
        "scope": "support.class.php",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Punctuations in PHP function calls",
        "scope": "meta.function-call.php punctuation",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "PHP Global Variables",
        "scope": "variable.other.global.php",
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Declaration Punctuation in PHP Global Variables",
        "scope": "variable.other.global.php punctuation.definition.variable",
        "settings": {
          "foreground": t4
        }
      },
      // Language: Python
      {
        "name": "Language Constants in Python",
        "scope": "constant.language.python",
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Python Function Parameter and Arguments",
        "scope": [
          "variable.parameter.function.python",
          "meta.function-call.arguments.python"
        ],
        "settings": {
          "foreground": t3
        }
      },
      {
        "name": "Punctuations in Python",
        "scope": "punctuation.python",
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "Decorator Functions in Python",
        "scope": "entity.name.function.decorator.python",
        "settings": {
          "foreground": t4
        }
      },
      // Language: SASS
      {
        "name": "Variables in SASS At-Rules",
        "scope": [
          "source.css.scss meta.at-rule variable",
          "source.css.sass meta.at-rule variable"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "Attribute Name for SASS",
        "scope": [
          "meta.attribute-selector.scss entity.other.attribute-name.attribute",
          "meta.attribute-selector.sass entity.other.attribute-name.attribute"
        ],
        "settings": {
          "foreground": t5
        }
      },
      {
        "name": "Tag names in SASS",
        "scope": [
          "entity.name.tag.scss",
          "entity.name.tag.sass"
        ],
        "settings": {
          "foreground": t1
        }
      },
      {
        "name": "SASS Keyword Other Unit",
        "scope": [
          "keyword.other.unit.scss",
          "keyword.other.unit.sass"
        ],
        "settings": {
          "foreground": t2
        }
      },
      // Language: TypeScript[React]
      {
        "name": "TypeScript[React] Variables and Object Properties",
        "scope": [
          "variable.other.readwrite.alias.ts",
          "variable.other.readwrite.alias.tsx",
          "variable.other.readwrite.ts",
          "variable.other.readwrite.tsx",
          "variable.other.object.ts",
          "variable.other.object.tsx",
          "variable.object.property.ts",
          "variable.object.property.tsx",
          "variable.other.ts",
          "variable.other.tsx",
          "variable.tsx",
          "variable.ts"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "TypeScript[React] Entity Name Types",
        "scope": [
          "entity.name.type.ts",
          "entity.name.type.tsx"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "TypeScript[React] Node Classes",
        "scope": [
          "support.class.node.ts",
          "support.class.node.tsx"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "TypeScript[React] Entity Name Types as Parameters",
        "scope": [
          "meta.type.parameters.ts entity.name.type",
          "meta.type.parameters.tsx entity.name.type"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "TypeScript[React] Import Punctuations",
        "scope": [
          "meta.import.ts punctuation.definition.block",
          "meta.import.tsx punctuation.definition.block"
        ],
        "settings": {
          "foreground": m8
        }
      },
      {
        "name": "TypeScript[React] Punctuation Decorators",
        "scope": [
          "meta.decorator punctuation.decorator.ts",
          "meta.decorator punctuation.decorator.tsx"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "TypeScript[React] Punctuation Decorators",
        "scope": [
          "meta.jsx.children.tsx",
          "meta.tag.js meta.jsx.children.tsx"
        ],
        "settings": {
          "foreground": t4
        }
      },
      {
        "name": "YAML Entity Name Tags",
        "scope": "entity.name.tag.yaml",
        "settings": {
          "foreground": t5
        }
      },
      // global font styles
      {
        "name": "Normalize font style of certain Components",
        "scope": [
          "meta.property-list.css meta.property-value.css variable.other.less",
          "meta.property-list.scss variable.scss",
          "meta.property-list.sass variable.sass",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.bitwise",
          "keyword.operator.increment",
          "keyword.operator.ternary",
          "keyword.operator.comparison",
          "keyword.operator.assignment",
          "keyword.operator.operator",
          "keyword.operator.or.regexp",
          "punctuation.definintion.string",
          "punctuation"
        ],
        "settings": {
          "fontStyle": "normal"
        }
      },
      {
        "name": "Italicsify certain tokens",
        "scope": [
          "meta.import.ts meta.block.ts variable.other.readwrite.alias.ts",
          "meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
          "meta.import.js variable.other",
          "entity.name.function.ts",
          "entity.name.function.tsx",
          "support.type.primitive",
          "entity.name.tag.yaml",
          "meta.tag.sgml.doctype.html",
          "entity.name.tag.doctype",
          "meta.tag.sgml.doctype",
          "entity.other.attribute-name",
          "entity.name.tag.custom",
          "source.js.jsx keyword.control.flow.js",
          "support.type.property.css",
          "support.function.basic_functions",
          "variable.assignment.coffee",
          "support.function.basic_functions",
          "keyword.operator.expression.typeof",
          "keyword.operator.type.annotation",
          "assignment.coffee",
          "entity.name.type.ts",
          "support.constant.math",
          "meta.object-literal.key",
          "meta.var.expr storage.type",
          "parameter",
          "italic",
          "quote",
          "keyword",
          "storage",
          "language",
          "type .function",
          "type.function",
          "storage.type.class",
          "type.var",
          "meta.parameter",
          "variable.parameter",
          "meta.parameters",
          "keyword.control",
          "modifier",
          "this",
          "comment"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": t1
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": neg
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": neg
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": t3
        }
      }
    ]
  };
  return theme;
};

module.exports.genSettings = colors => {
  let theme = module.exports.genTheme(colors);
  return {
    "workbench.colorCustomizations": theme.colors,
    "editor.tokenColorCustomizations": {
      "textMateRules": theme.tokenColors
    }
  };
};

// copied from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
const blend = (c1, c2, p) => {
  let f = parseInt(c1.slice(1), 16)
  let t = parseInt(c2.slice(1), 16)
  let R1 = f >> 16,
    G1 = f >> 8 & 0x00FF,
    B1 = f & 0x0000FF,
    R2 = t >> 16,
    G2 = t >> 8 & 0x00FF,
    B2 = t & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
};

const gradient = (c1, c2) => {
  return [
    blend(c1, c2, 0.075),
    blend(c1, c2, 0.125),
    blend(c1, c2, 0.2),
    blend(c1, c2, 0.3),
    blend(c1, c2, 0.4),
    blend(c1, c2, 0.5),
    blend(c1, c2, 0.6),
    blend(c1, c2, 0.7),
    blend(c1, c2, 0.9),
  ];
};