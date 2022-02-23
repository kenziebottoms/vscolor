/**
 * Generates color theme settings from an object full of colors in the format `#ffffff`
 * @param {Object} colors 
 * @param {Object[]} colors.syntax - A list of colors to use for syntax highlighting
 * @param {string} bg - The color to use as the background color
 * @param {string} fg - The color to use as the text color
 * @param {string} pos - The color to use for success messages and diff additions
 * @param {string} neg - The color to use for error indicators and diff subtractions
 * @param {string} ui - The color to use as UI accent
 * Note: does not mutate the original color theme object
 */
export const genTheme = ({ syntax, bg, fg, pos, neg, ui }) => {
  const monoSpec = gradient(bg, fg)
  let trans = '#00000000';

  const palette = syntax.map(color => color || null)

  const posSpec = gradient(bg, pos)
  const negSpec = gradient(bg, neg)

  return {
    colors: {
      foreground: monoSpec['100'],
      errorForeground: neg,
      focusBorder: trans,
      contrastBorder: monoSpec['0'],
      'input.foreground': monoSpec['100'],
      'input.background': monoSpec['7.5'],
      'input.placeholderForeground': monoSpec['50'],
      'input.border': `${ui}44`,
      'inputOption.activeBorder': monoSpec['100'],
      'inputValidation.infoBackground': palette[2],
      'inputValidation.infoBorder': palette[2],
      'inputValidation.warningBackground': negSpec['20'],
      'inputValidation.warningBorder': negSpec['20'],
      'inputValidation.errorBackground': neg,
      'inputValidation.errorBorder': neg,
      'dropdown.background': monoSpec['0'],
      'dropdown.foreground': monoSpec['100'],
      'dropdown.border': trans,
      'list.errorForeground': neg,
      'list.warningForeground': neg,
      'list.invalidItemForeground': neg,
      'list.focusBackground': monoSpec['20'],
      'list.focusForeground': monoSpec['100'],
      'list.activeSelectionBackground': monoSpec['20'],
      'list.activeSelectionForeground': monoSpec['100'],
      'list.inactiveSelectionBackground': monoSpec['12.5'],
      'list.inactiveFocusBackground': monoSpec['12.5'],
      'list.inactiveSelectionForeground': monoSpec['100'],
      'list.hoverBackground': monoSpec['7.5'],
      'list.hoverForeground': monoSpec['100'],
      'list.highlightForeground': monoSpec['100'],
      'pickerGroup.foreground': palette[2],
      'button.foreground': monoSpec['0'],
      'button.background': ui,
      'button.hoverBackground': palette[2],
      'badge.background': ui,
      'badge.foreground': monoSpec['0'],
      'scrollbarSlider.background': monoSpec['20'],
      'scrollbarSlider.hoverBackground': monoSpec['12.5'],
      'scrollbarSlider.activeBackground': monoSpec['12.5'],
      'progressBar.background': palette[2],
      'editor.background': monoSpec['0'],
      'editor.foreground': monoSpec['100'],
      'editorWidget.background': monoSpec['0'],
      'editor.selectionBackground': monoSpec['12.5'],
      'editor.inactiveSelectionBackground': `${fg}11`,
      'editor.selectionHighlightBackground': monoSpec['12.5'],
      'editor.findMatchBackground': posSpec['20'],
      'editor.findMatchHighlightBackground': posSpec['20'],
      'editor.findRangeHighlightBackground': `${fg}22`,
      'editor.hoverHighlightBackground': `${fg}11`,
      'editorSuggestWidget.background': monoSpec['7.5'],
      'editorSuggestWidget.border': monoSpec['30'],
      'editorSuggestWidget.foreground': monoSpec['100'],
      'editorHoverWidget.background': monoSpec['7.5'],
      'editorHoverWidget.border': ui,
      'diffEditor.insertedTextBackground': posSpec['20'],
      'diffEditor.removedTextBackground': negSpec['20'],
      'diffEditor.insertedTextBorder': trans,
      'diffEditor.removedTextBorder': trans,
      'merge.currentHeaderBackground': palette[2],
      'merge.incomingHeaderBackground': palette[2],
      'editorOverviewRuler.currentContentForeground': palette[2],
      'editorOverviewRuler.incomingContentForeground': palette[2],
      'editorOverviewRuler.commonContentForeground': palette[2],
      'editor.lineHighlightBackground': `${fg}11`,
      'editor.lineHighlightBorder': trans,
      'editor.rangeHighlightBackground': `${fg}22`,
      'editorCursor.foreground': monoSpec['50'],
      'editorIndentGuide.background': monoSpec['12.5'],
      'editorIndentGuide.activeBackground': monoSpec['30'],
      'editorLineNumber.foreground': monoSpec['50'],
      'editorRuler.foreground': monoSpec['50'],
      'editorError.foreground': neg,
      'editorWarning.foreground': negSpec['60'],
      'editorInfo.foreground': palette[2],
      'editorMarkerNavigationError.background': neg,
      'editorMarkerNavigationWarning.background': neg,
      'editorMarkerNavigation.background': monoSpec['0'],
      'editor.wordHighlightBackground': monoSpec['12.5'],
      'editorWhitespace.foreground': monoSpec['30'],
      'editor.wordHighlightStrongBackground': monoSpec['7.5'],
      'peekViewTitle.background': monoSpec['0'],
      'peekViewTitleLabel.foreground': monoSpec['100'],
      'peekView.border': palette[2],
      'peekViewResult.lineForeground': monoSpec['100'],
      'peekViewResult.fileForeground': monoSpec['100'],
      'peekViewResult.selectionForeground': monoSpec['100'],
      'peekViewResult.matchHighlightBackground': posSpec['20'],
      'peekViewEditor.matchHighlightBackground': posSpec['20'],
      'tab.activeBackground': monoSpec['12.5'],
      'tab.inactiveBackground': monoSpec['7.5'],
      'tab.border': monoSpec['0'],
      'tab.activeBorder': ui,
      'tab.unfocusedActiveBorder': monoSpec['0'],
      'tab.activeForeground': monoSpec['100'],
      'tab.inactiveForeground': monoSpec['50'],
      'editorGroupHeader.tabsBackground': monoSpec['0'],
      'editorGroupHeader.tabsBorder': monoSpec['0'],
      'panel.background': monoSpec['0'],
      'panel.border': monoSpec['12.5'],
      'panelTitle.activeForeground': monoSpec['100'],
      'panelTitle.inactiveForeground': monoSpec['50'],
      'panelTitle.activeBorder': ui,
      'statusBar.foreground': `${monoSpec['100']}88`,
      'statusBar.background': monoSpec['0'],
      'statusBar.noFolderBackground': monoSpec['0'],
      'statusBar.border': monoSpec['0'],
      'statusBar.debuggingBackground': negSpec['20'],
      'activityBar.background': monoSpec['0'],
      'activityBar.foreground': `${ui}cc`,
      'activityBar.border': trans,
      'activityBar.dropBackground': `${ui}55`,
      'activityBarBadge.background': ui,
      'activityBarBadge.foreground': monoSpec['0'],
      'sideBar.background': monoSpec['4'],
      'sideBar.foreground': monoSpec['100'],
      'sideBar.border': trans,
      'sideBarTitle.foreground': monoSpec['100'],
      'sideBarSectionHeader.background': monoSpec['0'],
      'sideBarSectionHeader.foreground': monoSpec['50'],
      'titleBar.activeForeground': monoSpec['50'],
      'titleBar.inactiveForeground': monoSpec['50'],
      'titleBar.activeBackground': monoSpec['0'],
      'debugExceptionWidget.border': palette[2],
      'debugExceptionWidget.background': monoSpec['0'],
      'editorGutter.modifiedBackground': `${ui}44`,
      'editorGutter.addedBackground': posSpec['20'],
      'editorGutter.deletedBackground': negSpec['20'],
      'debugToolBar.background': monoSpec['0'],
      'extensionButton.prominentBackground': palette[2],
      'extensionButton.prominentForeground': monoSpec['0'],
      'extensionButton.prominentHoverBackground': palette[2],

      // Settings Editor Colors
      // https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
      'settings.headerForeground': ui,
      'settings.inactiveSelectedItemBorder': ui,
      'settings.modifiedItemIndicator': ui,
      
      'settings.textInputForeground': fg,
      'settings.textInputBackground': monoSpec['12.5'],
      'settings.textInputBorder': trans,
      
      'settings.numberInputForeground': fg,
      'settings.numberInputBackground': monoSpec['12.5'],
      'settings.numberInputBorder': trans,
      
      'settings.checkboxForeground': fg,
      'settings.checkboxBackground': monoSpec['12.5'],
      'settings.checkboxBorder': trans,

      'settings.dropdownForeground': monoSpec['100'],
      'settings.dropdownBackground': monoSpec['12.5'],
      'settings.dropdownBorder': trans,
      'settings.dropdownListBorder': ui,
      
      'settings.rowHoverBackground': monoSpec['0'],
      'settings.focusedRowBackground': monoSpec['7.5'],
      'settings.focusedRowBorder': monoSpec['7.5'],

      // Integrated Terminal Colors
      // https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
      'terminal.ansiBlack': monoSpec['70'],
      'terminal.ansiRed': neg,
      'terminal.ansiGreen': pos,
      'terminal.ansiYellow': palette[3],
      'terminal.ansiBlue': palette[4],
      'terminal.ansiMagenta': palette[0],
      'terminal.ansiCyan': palette[2],
      'terminal.ansiWhite': monoSpec['100'],
      'terminal.ansiBrightBlack': monoSpec['70'],
      'terminal.ansiBrightRed': neg,
      'terminal.ansiBrightGreen': pos,
      'terminal.ansiBrightYellow': palette[3],
      'terminal.ansiBrightBlue': palette[2],
      'terminal.ansiBrightMagenta': palette[1],
      'terminal.ansiBrightCyan': palette[2],
      'terminal.ansiBrightWhite': monoSpec['100'],

      // Git Colors
      // https://code.visualstudio.com/api/references/theme-color#git-colors
      'gitDecoration.addedResourceForeground': pos,
      'gitDecoration.modifiedResourceForeground': ui,
      'gitDecoration.stageModifiedResourceForeground': palette[4],
      'gitDecoration.untrackedResourceForeground': pos,
      'gitDecoration.ignoredResourceForeground': monoSpec['50'],
      'gitDecoration.conflictingResourceForeground': neg,
      'gitDecoration.submoduleResourceForeground': palette[2],

      // Text Colors — Colors inside a text document/markdown preview.
      // https://code.visualstudio.com/api/references/theme-color#text-colors
      'textPreformat.foreground': palette[2],
      'textBlockQuote.background': `${ui}2a`,
      'textBlockQuote.border': ui,
      'textCodeBlock.background': '#00000033',
      'textLink.activeForeground': `${ui}aa`,
      'textLink.foreground': ui,
      'textSeparator.foreground': '#00000022',
    },
    tokenColors: [
      // comments
      {
        name: 'Comment',
        scope: [
          'comment',
          'punctuation.definition.comment'
        ],
        settings: {
          foreground: monoSpec['40'],
        },
      },
      {
        name: 'Comment Block',
        scope: 'comment.block',
        settings: {
          foreground: monoSpec['60'],
        },
      },
      // strings
      {
        name: 'String',
        scope: [
          'string',
          'string.quoted',
          'punctuation.definition.string'
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'RegExp String',
        scope: [
          'string.regexp',
        ],
        settings: {
          foreground: palette[2],
          fontStyle: ''
        },
      },
      {
        name: 'RegExp Keywords',
        scope: 'keyword.control.anchor.regexp',
        settings: {
          fontStyle: '',
          foreground: palette[4] || palette[0]
        }
      },
      {
        name: 'RegExp Escapes',
        scope: 'constant.character.escape.backslash.regexp',
        settings: {
          foreground: palette[1]
        }
      },
      {
        name: 'RegExp Definition Groups',
        scope: 'punctuation.definition.group.regexp',
        settings: {
          foreground: palette[3]
        }
      },
      {
        name: 'RegExp Slashes',
        scope: [
          'punctuation.definition.template-expression',
        ],
        settings: {
          foreground: palette[3],
        },
      },
        {
          name: 'RegExp String Tags',
          scope: [
            'string.regexp keyword.other',
          ],
          settings: {
            foreground: palette[0],
          },
      },
      {
        name: 'Template Strings',
        scope: [
          'string.template meta.template.expression',
          'string.template.js',
        ],
        settings: {
          foreground: palette[0],
        },
      },
      // booleans
      {
        name: 'Booleans',
        scope: 'constant.language.boolean',
        settings: {
          fontStyle: 'bold'
        }
      },
      {
        name: 'True',
        scope: 'constant.language.boolean.true',
        settings: {
          foreground: `${pos}bb`,
        },
      },
      {
        name: 'False',
        scope: 'constant.language.boolean.false',
        settings: {
          foreground: `${neg}bb`,
        },
      },
      // constants
      {
        name: 'Support Constant Math',
        scope: 'support.constant.math',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Built-in constant',
        scope: [
          'constant.language',
          'punctuation.definition.constant',
          'variable.other.constant',
          'source.elixir constant.other.symbol.elixir',
          'source.elixir constant.other.keywords.elixir',
        ],
        settings: {
          foreground: palette[4] || monoSpec['70'],
        },
      },
      {
        name: 'User-defined constant',
        scope: ['constant.character', 'constant.other'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Support Constant, `new` keyword, Special Method Keyword',
        scope: [
          'support.constant',
          'keyword.other.special-method',
          'keyword.other.new',
        ],
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'JSON Support Constants',
        scope: 'support.constant.json',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Math ops',
        scope: [
          'keyword.operator.arithmetic.js',
          'keyword.operator.increment.js',
          'meta.var.expr keyword.operator.assignment'
        ],
        settings: {
          foreground: palette[1],
        }
      },
      {
        name: 'Variables in brackets',
        scope: 'meta.array.literal.js variable.other.readwrite.js',
        settings: {
          foreground: palette[2]
        }
      },
      {
        name: 'Constant Character Escape',
        scope: 'constant.character.escape',
        settings: {
          foreground: palette[4] || palette[2],
        },
      },
      {
        name: 'Numbers',
        scope: [
          'constant.numeric',
          'constant.character.numeric',
          'constant.numeric.hex'
        ],
        settings: {
          foreground: palette[5] || palette[3],
        },
      },
      {
        name: 'Variable',
        scope: 'variable',
        settings: {
          foreground: palette[3],
        },
      },
      // keywords
      {
        name: 'Keyword',
        scope: ['punctuation.accessor', 'keyword'],
        settings: {
          foreground: monoSpec['70'],
        },
      },
      {
        name: 'Keyword Other Unit',
        scope: 'keyword.other.unit',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Keyword Operator',
        scope: 'keyword.operator',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Storage',
        scope: 'storage',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'undefined',
        scope: 'constant.language.undefined',
        settings: {
          foreground: monoSpec['70'],
          fontStyle: 'italic',
        }
      },
      {
        name: 'Null',
        scope: 'constant.language.null',
        settings: {
          foreground: monoSpec['60'],
          fontStyle: 'bold italic',
        }
      },
      {
        name: 'Storage type',
        scope: [
          'storage.type',
          'meta.var.expr storage.type',
          'meta.class meta.method.declaration meta.var.expr storage.type.js',
        ],
        settings: {
          foreground: palette[0],
        },
      },
      // class names
      {
        name: 'Class name',
        scope: ['entity.name.class', 'meta.class entity.name.type.class'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Inherited class',
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: palette[2],
        },
      },
      // function names
      {
        name: 'Function name',
        scope: 'entity.name.function',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Function Parameters',
        scope: 'variable.parameter',
        settings: {
          foreground: fg
        },
      },
      // meta
      {
        name: 'Meta Tag',
        scope: ['punctuation.definition.tag', 'meta.tag'],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      // documentation, JSDoc
      {
        name: 'Entity Names in Code Documentations',
        scope: [
          'entity.name.type.instance.jsdoc',
          'entity.name.type.instance.phpdoc',
        ],
        settings: {
          foreground: monoSpec['100'],
          fontStyle: 'italic'
        },
      },
      {
        name: 'Other Variables in Code Documentations',
        scope: ['variable.other.jsdoc', 'variable.other.phpdoc'],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: '@param in JSDoc',
        scope: [
          'storage.type.class.jsdoc',
          'punctuation.definition.block.tag.jsdoc'
        ],
        settings: {
          foreground: palette[4] || palette[0],
          fontStyle: 'italic'
        },
      },
      {
        name: 'Variable Types in JSDoc',
        scope: 'entity.name.type.instance.jsdoc',
        settings: {
          foreground: monoSpec['100']
        }
      },
      {
        name: 'Curlies in JSDoc',
        scope: 'entity.name.type.instance.jsdoc punctuation.definition.bracket',
        settings: {
          foreground: monoSpec['60'],
          fontStyle: 'italic'
        }
      },
      {
        name: 'Variable names in JSDoc',
        scope: 'comment.block.documentation.js variable.other.jsdoc',
        settings: {
          fontStyle: 'bold'
        }
      },
      // Language: HTML
      {
        name: 'HTML Tag names',
        scope: [
          'support.class.component',
          'meta.tag.other.html',
          'meta.tag.other.js',
          'meta.tag.other.tsx',
          'meta.tag.js',
          'meta.tag.tsx',
          'meta.tag.html',
        ],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Important HTML Tag Names',
        scope: [
          'meta.tag.structure.body entity.name.tag',
          'meta.tag.structure.head entity.name.tag',
          'meta.tag.structure.html entity.name.tag',
          'meta.tag.metadata.style entity.name.tag',
          'meta.tag.structure.html punctuation.definition.tag',
          'meta.tag.structure.head punctuation.definition.tag',
          'meta.tag.structure.body punctuation.definition.tag',
          'meta.tag.metadata.style punctuation.definition.tag',
        ],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'HTML Tag names',
        scope: [
          'entity.name.tag.tsx',
          'entity.name.tag.js',
          'entity.name.tag',
          'punctuation.definition.tag',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'HTML Script Tag',
        scope: [
          'meta.tag.metadata.script entity.name.tag',
          'meta.tag.metadata.script punctuation.definition.tag',
        ],
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'HTML Punctuation Definition Tag',
        scope: 'punctuation.definition.tag.html',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Tag attribute',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'HTML attribute values',
        scope: 'meta.attribute string.quoted',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'ID Attribute Name in HTML',
        scope: [
          'entity.other.attribute-name.id.html',
          'meta.attribute.id.html entity.other.attribute-name',
          'meta.attribute.name.html entity.other.attribute-name',
          'meta.attribute.href.html entity.other.attribute-name',
          'meta.attribute.src.html entity.other.attribute-name',
        ],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Entity Name Tag Custom',
        scope: 'entity.name.tag.custom',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Unicode',
        scope: 'constant.character.entity.named',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'HTML Doctype',
        scope: [
          'meta.tag.sgml.doctype.html',
          'entity.name.tag.doctype',
          'meta.tag.sgml.doctype',
          'meta.tag.metadata.doctype.html entity.name.tag.html',
          'meta.tag.metadata.doctype.html entity.other.attribute-name.html',
          'meta.tag.metadata.doctype.html punctuation.definition.tag',
        ],
        settings: {
          foreground: `${palette[1]}99`,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Library (function & constant)',
        scope: ['support.constant'],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Support Constant Property Value meta',
        scope: 'support.constant.meta.property-value',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Library class/type',
        scope: ['support.type', 'support.class'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Support Variable DOM',
        scope: 'support.variable.dom',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Storage Modifier Default',
        scope: 'storage.modifier',
        settings: {
          foreground: palette[0]
        }
      },
      {
        name: 'Keyword Operator Relational',
        scope: 'keyword.operator.relational',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Keyword Operator Assignment',
        scope: 'keyword.operator.assignment',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Meta Brace',
        scope: 'meta.brace',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Meta Delimiter Period',
        scope: 'meta.delimiter.period',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Object Comma',
        scope: 'object.comma',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Variable Parameter Function',
        scope: 'variable.parameter.function',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Support Type Property Name & entity name tags',
        scope: [
          'support.type.vendored.property-name',
          'support.constant.vendored.property-value',
          'support.type.property-name',
          'meta.property-list entity.name.tag',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Entity Name tag reference in stylesheets',
        scope: 'meta.property-list entity.name.tag.reference',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Constant Other Color RGB Value Punctuation Definition Constant',
        scope: [
          'constant.other.color.rgb-value punctuation.definition.constant',
          'constant.other.color.rgb-value.hex.css',
        ],
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Constant Other Color',
        scope: 'constant.other.color',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Meta Selector',
        scope: 'meta.selector',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Entity Other Attribute Name Id',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Meta Property Name',
        scope: 'meta.property-name',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Punctuation Definition Parameters',
        scope: 'punctuation.definition.parameters',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Keyword Control Operator',
        scope: 'keyword.control.operator',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Keyword Control Flow',
        scope: 'keyword.control.flow',
        settings: {
          foreground: palette[4] || palette[1],
        }
      },
      {
        name: 'Keyword Operator Logical',
        scope: 'keyword.operator.logical',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Control Keywords',
        scope: 'keyword.control',
        settings: {
          foreground: palette[4] || palette[0]
        }
      },
      // variables
      {
        name: 'Variable Instances',
        scope: [
          'variable.instance',
          'variable.other.instance',
          'variable.reaedwrite.instance',
          'variable.other.readwrite.instance',
          'variable.other.readwrite.instance punctuation.definition.variable'
        ],
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Language Variable',
        scope: 'variable.language',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Variable Property Other',
        scope: ['variable.other.property'],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Variable Property Other',
        scope: 'variable.other.object.property',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Entity Name Function',
        scope: 'entity.name.function',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Keyword Operator Comparison',
        scope: 'keyword.operator.comparison',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Support Function',
        scope: 'support.function',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      // errors
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.deprecated'],
        settings: {
          foreground: neg,
        },
      },
      {
        name: 'Invalid Broken',
        scope: 'invalid.broken',
        settings: {
          foreground: neg,
        },
      },
      {
        name: 'Invalid Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
          foreground: neg,
        },
      },
      {
        name: 'Invalid Illegal',
        scope: 'invalid.illegal',
        settings: {
          foreground: neg,
        },
      },
      {
        name: 'Support Variable Property',
        scope: 'support.variable.property',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'DOM Support Variable Property',
        scope: 'support.variable.property.dom.js',
        settings: {
          foreground: palette[4] || palette[2],
        },
      },
      {
        name: 'Variable Function',
        scope: 'variable.function',
        settings: {
          foreground: palette[4] || monoSpec['100'],
        },
      },
      {
        name: 'Variable Interpolation',
        scope: 'variable.interpolation',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Meta Function Call',
        scope: 'meta.function-call',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Punctuation Section Embedded',
        scope: 'punctuation.section.embedded',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Italics',
        scope: 'italic',
        settings: {
          foreground: palette[1],
          fontStyle: 'italic',
        },
      },
      {
        name: 'Bold',
        scope: 'bold',
        settings: {
          foreground: palette[3],
          fontStyle: 'bold',
        },
      },
      {
        name: 'Quote',
        scope: 'quote',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Raw Code',
        scope: 'raw',
        settings: {
          foreground: palette[2],
        },
      },
      // language: CoffeeScript
      {
        name: 'CoffeeScript Variable Assignment',
        scope: 'variable.assignment.coffee',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'CoffeeScript Parameter Function',
        scope: 'variable.parameter.function.coffee',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'CoffeeScript Assignments',
        scope: 'variable.assignment.coffee',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      // Language: C#
      {
        name: 'C# Readwrite Variables',
        scope: 'variable.other.readwrite.cs',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'C# using',
        scope: 'keyword.other.using',
        settings: {
          foreground: palette[4] || palette[0]
        }
      },
      {
        name: 'C# Classes & Storage types',
        scope: ['entity.name.type.class.cs', 'storage.type.cs'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'C# Namespaces',
        scope: 'entity.name.type.namespace.cs',
        settings: {
          foreground: palette[1],
        },
      },
      // Language: CSS
      {
        name: 'Tag names in Stylesheets',
        scope: [
          'entity.name.tag.css',
          'entity.name.tag.less',
          'entity.name.tag.custom.css',
        ],
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'CSS Class Names',
        scope: [
          'entity.other.attribute-name.class.css',
          'entity.other.attribute-name.class.scss'
        ],
        settings: {
          foreground: palette[3]
        }
      },
      {
        name: 'CSS Pseudo Elements',
        scope: [
          'entity.other.attribute-name.pseudo-element.css',
          'entity.other.attribute-name.pseudo-element.scss'
        ],
        settings: {
          foreground: palette[3]
        }
      },
      {
        name: '@media Query Headers',
        scope: [
          'keyword.control.at-rule',
          'keyword.control.at-rule punctuation.definition',
        ],
        settings: {
          foreground: palette[4],
          fontStyle: 'bold',
        },
      },
      {
        name: 'CSS Special Symbols',
        scope: [
          'entity.name.tag.wildcard.css',
          'entity.name.tag.wildcard.less',
          'entity.name.tag.wildcard.scss',
          'entity.name.tag.wildcard.sass',
          'keyword.operator.combinator.css',
        ],
        settings: {
          foreground: palette[4],
          fontStyle: 'bold',
        },
      },
      {
        name: 'CSS Units and Numbers',
        scope: ['source.css keyword.other.unit', 'source.css constant.numeric'],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Attribute Name for CSS',
        scope:
          'meta.attribute-selector.css entity.other.attribute-name.attribute',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'CSS Property Names',
        scope: 'support.type.property-name.css',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'CSS Property Values',
        scope: [
          'meta.property-value.scss',
          'meta.property-value.scss support.type.property-name.css',
        ],
        settings: {
          foreground: palette[3],
        },
      },
      // Language: SASS/SCSS
      {
        name: 'Variables in SASS At-Rules',
        scope: [
          'source.css.scss meta.at-rule variable',
          'source.css.sass meta.at-rule variable',
        ],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Attribute Name for SASS',
        scope: [
          'meta.attribute-selector.scss entity.other.attribute-name.attribute',
          'meta.attribute-selector.sass entity.other.attribute-name.attribute',
        ],
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Tag names in SASS',
        scope: ['entity.name.tag.scss', 'entity.name.tag.sass'],
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'SASS Keyword Other Unit',
        scope: ['keyword.other.unit.scss', 'keyword.other.unit.sass'],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'SASS Support Functions',
        scope: ['support.function.misc.scss', 'support.function.misc.sass'],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: "SASS URL Parameters",
        scope: [
          'variable.parameter.url.scss',
          'variable.parameter.url.sass'
        ],
        settings: {
          foreground: monoSpec['60'],
          fontStyle: 'italic underline'
        },
      },
      // Language: Vue
      {
        name: 'Vue Directives',
        scope: [
          'meta.directive.vue entity.other.attribute-name',
          'meta.directive.vue punctuation.separator.key-value.html',
        ],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Vue Object Keys (Unquoted)',
        scope: 'source.directive.vue string.unquoted.label.js',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Vue Directive Objects',
        scope: 'source.directive.vue variable.other.object.js',
        settings: { foreground: palette[3] },
      },
      {
        name: 'Vue Embedded Expressions',
        scope: 'expression.embedded.vue punctuation.definition',
        settings: { foreground: palette[0] },
      },
      {
        name: 'Vue Embedded Expression Variables',
        scope: 'expression.embedded.vue variable.other.readwrite.js',
        settings: { foreground: monoSpec['100'] },
      },
      {
        name: 'Vue Embedded Expression Variables',
        scope: 'expression.embedded.vue meta.property.object.js',
        settings: { foreground: palette[1] },
      },
      {
        name: 'Vue Directive variables',
        scope: [
          'source.directive.vue variable.other.readwrite.js',
          'source.directive.vue punctuation.definition.string',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'String Params in Vue Directives',
        scope: 'meta.directive.vue string.quoted.single.js',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'String HTML Attribute Values',
        scope: 'source.vue meta.tag string.quoted',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'String HTML Attribute Values',
        scope: 'source.vue source.directive.vue string.quoted',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Vue Template Tag',
        scope: 'source.vue entity.name.tag.template.html',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Vue Script Tag',
        scope: ['source.vue entity.name.tag.script.html'],
        settings: {
          fontStyle: 'bold',
        },
      },
      // Language: Elixir
      {
        name: 'Elixir Classes',
        scope: [
          'source.elixir support.type.elixir',
          'source.elixir meta.module.elixir entity.name.class.elixir',
        ],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Elixir Functions',
        scope: 'source.elixir entity.name.function',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Elixir String Punctuations',
        scope: 'source.elixir punctuation.definition.string',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Elixir',
        scope: [
          'source.elixir variable.other.readwrite.module.elixir',
          'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir',
        ],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Elixir Binary Punctuations',
        scope: 'source.elixir .punctuation.binary.elixir',
        settings: {
          foreground: palette[1],
        },
      },
      // Language: Go
      {
        name: 'Go Function Calls',
        scope: 'source.go meta.function-call.go',
        settings: {
          foreground: palette[3],
        },
      },
      // Language: JavaScript
      {
        name: 'JavaScript Classes',
        scope: 'meta.class entity.name.type.class.js',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Arrow Function Parentheses',
        scope: [
          'meta.arrow.js punctuation.definition.parameters.begin.js',
          'meta.arrow.js punctuation.definition.parameters.end.js'
        ],
        settings: {
          foreground: monoSpec['60']
        }
      },
      {
        name: 'JavaScript Method Declaration e.g. `constructor`',
        scope: 'meta.method.declaration storage.type.js',
        settings: {
          foreground: palette[3],
          fontStyle: '',
        },
      },
      {
        name: 'JavaScript Terminator',
        scope: 'terminator.js',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Export Default',
        scope: [
          'meta.export.default.js',
          'meta.export.default.js keyword.control',
          'keyword.control.export.js',
        ],
        settings: {
          foreground: monoSpec['60']
        }
      },
      {
        name: 'Export Default Item',
        scope: [
          'meta.export.default.js variable.other.readwrite.js',
        ],
        settings: {
          foreground: palette[2],
          fontStyle: 'bold'
        }
      },
      {
        name: 'JavaScript Meta Punctuation Definition',
        scope: 'meta.js punctuation.definition.js',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'JavaScript Imported Modules',
        scope: [
          'variable.other.meta.import.js',
          'meta.import.js variable.other',
          'keyword.operator.module.js',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'JavaScript Import Statements',
        scope: 'source.js keyword.control',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'JavaScript Export Default',
        scope: ['support.type.object.module.js'],
        settings: {
          foreground: `${palette[3]}99`,
        },
      },
      {
        name: 'JavaScript Conditionals',
        scope: ['keyword.control.conditional.js'],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'JavaScript Variable Parameter Function',
        scope: 'source.js variable.parameter',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'JavaScript Variable Other ReadWrite',
        scope: 'variable.other.readwrite.js',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'JavaScript Variable Other ReadWrite',
        scope: 'string.quoted.double.js meta.object-literal.key',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'JavaScript[React] Variable Other Object',
        scope: [
          'variable.other.object.js',
          'variable.other.object.jsx',
          'variable.object.property.js',
          'variable.object.property.jsx',
        ],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'React/JSX HTML Tag names',
        scope: [
          'meta.jsx entity.name.tag.js',
          'meta.jsx punctuation.definition.tag',
        ],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'JavaScript Variables',
        scope: ['variable.js', 'variable.other.js'],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'JavaScript Entity Name Type',
        scope: ['entity.name.type.js', 'entity.name.type.module.js'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'JavaScript Support Classes',
        scope: 'support.class.js',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'JavaScript Object Keys (String)',
        scope: [
          'meta.object-literal.key.js string.quoted',
          'meta.object-literal.key.js',
        ],
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'JavaScript Object Keys (Unquoted)',
        scope: 'string.unquoted.label.js',
        settings: {
          foreground: palette[1],
        },
      },
      // Language: JSON
      {
        name: 'JSON Property Names',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'JSON Property values (string)',
        scope: [
          'string.quoted.double.json meta.structure.dictionary.value.json',
          'string.quoted.double.json punctuation.definition.string.json',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Specific JSON Property values like null',
        scope:
          'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      // language: Ruby
      {
        name: 'Ruby Variables',
        scope: 'variable.other.ruby',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Ruby Keywords',
        scope: 'source.ruby keyword.control',
        settings: {
          foreground: palette[1]
        }
      },
      {
        name: 'Ruby Hashkeys',
        scope: 'constant.language.symbol.hashkey.ruby',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Ruby String Embedded Variables',
        scope: [
          'meta.embedded.line.ruby variable.other.readwrite.instance',
          'meta.embedded.line.ruby variable.other.readwrite.instance punctuation.definition.variable.ruby',
          'meta.embedded.line.ruby punctuation.definition.variable'
        ],
        settings: {
          foreground: palette[4] || palette[3]
        }
      },
      {
        name: 'Ruby Class Names',
        scope: [
          'source.ruby support.class',
          'entity.name.type.class.ruby',
        ],
        settings: {
          foreground: palette[0]
        }
      },
      {
        name: 'Ruby Class Definition',
        scope: 'entity.name.type.class.ruby',
        settings: {
          fontStyle: 'bold'
        }
      },
      // Language: Swift
      {
        name: 'Swift Function Parameters',
        scope: 'variable.parameter.function.swift entity.name.function.swift',
        settings: {
          foreground: fg
        }
      },
      {
        name: 'Swift Function Parameter Type',
        scope: 'meta.parameter-clause.swift support.type.swift',
        settings: {
          foreground: palette[2]
        }
      },
      {
        name: 'Swift Class',
        scope: 'meta.definition.type.class.swift storage.type.class.swift',
        settings: {
          foreground: palette[4] || palette[3]
        }
      },
      {
        name: 'Swift Class Definition',
        scope: 'meta.definition.type.class.swift entity.name.type.class.swift',
        settings: {
          fontStyle: 'bold',
          foreground: palette[2]
        }
      },
      {
        name: 'Swift Class Definition Parent',
        scope: 'meta.definition.type.class.swift meta.inheritance-clause.swift',
        settings: {
          foreground: monoSpec['60'],
          fontStyle: 'italic'
        }
      },
      {
        name: 'Swift Keyword Controls',
        scope: 'source.swift keyword.control',
        settings: {
          foreground: palette[4] || palette[0]
        }
      },
      {
        name: 'Swift Init',
        scope: 'meta.definition.function.initializer.swift storage.type.function.swift',
        settings: {
          foreground: pos
        }
      },
      {
        name: 'Swift Embedded Variables',
        scope: 'meta.embedded.line.swift',
        settings: {
          foreground: fg
        }
      },
      // Language: LESS
      {
        name: 'LESS Tag names',
        scope: 'entity.name.tag.less',
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Attribute Name for LESS',
        scope:
          'meta.attribute-selector.less entity.other.attribute-name.attribute',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      // Language: Markdown
      {
        name: 'Markdown Headings',
        scope: [
          'markup.heading.markdown',
          'markup.heading.markdown entity.name.section.markdown'
        ],
        settings: {
          foreground: palette[0],
        },
      },
      {
        name: 'Markdown Heading #',
        scope: 'punctuation.definition.heading.markdown',
        settings: {
          foreground: `${palette[0]}88`
        }
      },
      {
        name: 'Markdown Italics',
        scope: 'markup.italic.markdown',
        settings: {
          foreground: fg,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Bold',
        scope: 'markup.bold.markdown',
        settings: {
          foreground: monoSpec['100'],
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Quote',
        scope: [
          'markup.quote.markdown',
          'markup.quote.markdown meta.paragraph.markdown'
        ],
        settings: {
          foreground: ui,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Quote >',
        scope: [
          'punctuation.definition.quote.begin.markdown',
          'punctuation.definition.quote.end.markdown',
        ],
        settings: {
          foreground: `${ui}88`
        }
      },
      {
        name: 'Markdown Raw Code + others',
        scope: [
          'markup.inline.raw.markdown',
          'markup.inline.raw.string.markdown'
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Markdown Raw Code Ticks',
        scope: 'punctuation.definition.raw.markdown',
        settings: {
          foreground: `${palette[2]}88`
        }
      },
      {
        name: 'Markdown Links',
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Markdown Link Title and Description',
        scope: [
          'string.other.link.title.markdown',
          'string.other.link.description.markdown',
          'meta.link.inline.markdown string.other.link.title.markdown'
        ],
        settings: {
          foreground: palette[1],
          fontStyle: ''
        },
      },
      {
        name: 'Markdown Punctuation',
        scope: [
          'text.html.markdown punctuation.definition',
          'punctuation.definition.bold.markdown',
          'punctuation.definition.italic.markdown',
          'meta.link.inline.markdown punctuation.definition.string.begin.markdown',
          'meta.link.inline.markdown punctuation.definition.string.end.markdown',
          'punctuation.definition.metadata.markdown',
          'punctuation.definition.markdown',
          'punctuation.definition.list.begin.markdown',
          'punctuation.definition.list.end.markdown',
          'fenced_code.block.language.markdown'
        ],
        settings: {
          foreground: monoSpec['50'],
        },
      },
      // Language: PHP
      {
        name: 'Support Classes in PHP',
        scope: 'support.class.php',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Punctuations in PHP function calls',
        scope: 'meta.function-call.php punctuation',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'PHP Global Variables',
        scope: 'variable.other.global.php',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Declaration Punctuation in PHP Global Variables',
        scope: 'variable.other.global.php punctuation.definition.variable',
        settings: {
          foreground: palette[3],
        },
      },
      // Language: Python
      {
        name: 'Language Constants in Python',
        scope: 'constant.language.python',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Python Logical Operators',
        scope: 'keyword.operator.logical.python',
        settings: {
          foreground: palette[1],
          fontStyle: 'italic'
        }
      },
      {
        name: 'Python Flow Control',
        scope: 'keyword.control.flow.python',
        settings: {
          foreground: palette[1],
        },
      },
      {
        name: 'Python Built-In Support',
        scope: 'support.function.builtin.python',
        settings: {
          foreground: palette[4] || palette[0]
        }
      },
      {
        name: 'Number Storage Type',
        scope: 'storage.type.number.python',
        settings: {
          foreground: monoSpec['50'],
        }
      },
      {
        name: 'Python Function Parameter and Arguments',
        scope: [
          'variable.parameter.function.python',
          'meta.function-call.arguments.python',
        ],
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Punctuations in Python',
        scope: 'punctuation.python',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Decorator Functions in Python',
        scope: 'entity.name.function.decorator.python',
        settings: {
          foreground: monoSpec['70'],
          fontStyle: 'italic'
        },
      },
      // Language: React
      {
        name: 'React Variables and Object Properties',
        scope: [
          'variable.other.readwrite.alias.ts',
          'variable.other.readwrite.alias.tsx',
          'variable.other.readwrite.ts',
          'variable.other.readwrite.tsx',
          'variable.other.object.ts',
          'variable.other.object.tsx',
          'variable.object.property.ts',
          'variable.object.property.tsx',
          'variable.other.ts',
          'variable.other.tsx',
          'variable.tsx',
          'variable.ts',
        ],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'React Entity Name Types',
        scope: ['entity.name.type.ts', 'entity.name.type.tsx'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'React Node Classes',
        scope: ['support.class.node.ts', 'support.class.node.tsx'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'React Entity Name Types as Parameters',
        scope: [
          'meta.type.parameters.ts entity.name.type',
          'meta.type.parameters.tsx entity.name.type',
        ],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'React Import Punctuations',
        scope: [
          'meta.import.ts punctuation.definition.block',
          'meta.import.tsx punctuation.definition.block',
        ],
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'React Punctuation Decorators',
        scope: [
          'meta.decorator punctuation.decorator.ts',
          'meta.decorator punctuation.decorator.tsx',
        ],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'React Punctuation Decorators',
        scope: ['meta.jsx.children.tsx', 'meta.tag.js meta.jsx.children.tsx'],
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'YAML Entity Name Tags',
        scope: 'entity.name.tag.yaml',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      // language: Java
      {
        name: 'comment docs',
        scope: 'comment.block.javadoc keyword.other.documentation',
        settings: {
          foreground: `${palette[1]}90`,
        },
      },
      {
        name: 'comment docs',
        scope: 'comment.block.javadoc entity.name.type.class',
        settings: {
          foreground: `${palette[3]}90`,
        },
      },
      {
        name: 'comment docs',
        scope: 'comment.block.javadoc variable.parameter',
        settings: {
          foreground: `${palette[2]}90`,
        },
      },
      {
        name: 'Separating Commas',
        scope: 'punctuation.separator',
        settings: {
          foreground: monoSpec['70'],
        },
      },
      {
        name: 'Java strings',
        scope: 'string.quoted.double.java',
        settings: {
          foreground: palette[3],
        },
      },
      {
        name: 'Generic storage type',
        scope: 'storage.type.generic.java',
        settings: {
          foreground: palette[4] || palette[0],
        },
      },
      {
        name: 'Other object variables',
        scope: 'variable.other.object.java',
        settings: {
          foreground: monoSpec['100'],
        },
      },
      {
        name: 'Instance function calls',
        scope: 'meta.method-call.java entity.name.function.java',
        settings: {
          foreground: palette[2],
        },
      },
      {
        name: 'Java Class Modifiers',
        scope: 'meta.class.java storage.modifier.java',
        settings: {
          foreground: palette[1]
        }
      },
      {
        name: 'Java Method Modifiers',
        scope: 'meta.class.body meta.method storage.modifier.java ',
        settings: {
          foreground: palette[1]
        }
      },
      {
        name: 'Other object variables',
        scope: [
          'storage.modifier.import.java',
          'meta.import.java storage.modifier.java',
        ],
        settings: {
          foreground: monoSpec['50'],
        },
      },
      {
        name: 'Import Wildcards',
        scope: 'storage.modifier.import.java variable.language.wildcard',
        settings: {
          foreground: `${palette[0]}99`
        }
      },
      {
        name: 'Other object variables',
        scope: 'keyword.other.import.java',
        settings: {
          foreground: `${palette[1]}99`,
        },
      },
      {
        name: 'Java Package',
        scope: 'keyword.other.package.java',
        settings: {
          foreground: palette[2],
          fontStyle: 'bold italic'
        }
      },
      {
        name: 'Java Class Name',
        scope: 'entity.name.type.class.java',
        settings: {
          foreground: palette[3],
          fontStyle: 'bold',
        }
      },
      {
        name: 'Java Package Name',
        scope: 'storage.modifier.package.java',
        settings: {
          foreground: monoSpec['100']
        }
      },
      {
        name: 'Other object variables',
        scope: 'meta.import.java punctuation',
        settings: {
          foreground: `${monoSpec['100']}99`,
        },
      },
      {
        name: 'Java Variable Types',
        scope: 'meta.definition.variable.java storage.type.java',
        settings: {
          foreground: palette[4] || palette[2]
        }
      },
      {
        name: 'Java Extends',
        scope: 'storage.modifier.extends.java',
        settings: {
          foreground: monoSpec['60']
        }
      },
      // global font styles
      {
        name: 'Normalize font style of certain Components',
        scope: [
          'meta.property-list.css meta.property-value.css variable.other.less',
          'meta.property-list.scss variable.scss',
          'meta.property-list.sass variable.sass',
          'keyword.other.unit',
          'keyword.operator.logical',
          'keyword.operator.arithmetic',
          'keyword.operator.bitwise',
          'keyword.operator.increment',
          'keyword.operator.ternary',
          'keyword.operator.comparison',
          'keyword.operator.assignment',
          'keyword.operator.operator',
          'keyword.control.ternary',
          'keyword.operator.or.regexp',
          'punctuation.definintion.string',
          'punctuation',
        ],
        settings: {
          fontStyle: '',
        },
      },
      {
        name: 'Italicsify certain tokens',
        scope: [
          'meta.import.ts meta.block.ts variable.other.readwrite.alias.ts',
          'meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx',
          'meta.import.js variable.other',
          'entity.name.function.ts',
          'entity.name.function.tsx',
          'support.type.primitive',
          'entity.name.tag.yaml',
          'meta.tag.sgml.doctype.html',
          'entity.name.tag.doctype',
          'meta.tag.sgml.doctype',
          'entity.other.attribute-name',
          'entity.name.tag.custom',
          'source.js.jsx keyword.control.flow.js',
          'support.type.property.css',
          'support.function.basic_functions',
          'variable.assignment.coffee',
          'support.function.basic_functions',
          'keyword.operator.expression.typeof',
          'keyword.operator.type.annotation',
          'assignment.coffee',
          'entity.name.type.ts',
          'support.constant.math',
          'meta.object-literal.key',
          'meta.var.expr storage.type',
          'parameter',
          'italic',
          'quote',
          'keyword',
          'storage',
          'language',
          'type .function',
          'type.function',
          'storage.type.class',
          'type.var',
          'meta.parameter',
          'meta.parameters',
          'keyword.control',
          'modifier',
          'this',
          'comment',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: palette[0],
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: neg,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: neg,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: palette[2],
        },
      },
    ],
  };
};

/**
 * Convert color theme settings into a format usable in Workspace Settings
 * @param {Object} colors - A color theme generated by #genTheme
 */
export const genSettings = colors => {
  let theme = genTheme(colors);
  return {
    'workbench.colorCustomizations': theme.colors,
    'editor.tokenColorCustomizations': {
      textMateRules: theme.tokenColors,
    },
  };
};

/**
 * Return a color at a specified point in the spectrum between colors 1 and 2
 * @param {string} c1 - The first color in the format `#ffffff`
 * @param {string} c2 - The second color in the format `#ffffff`
 * @param {string} p - A percentage representing where in the gradient you want the
 * color from (0 would return `c1`, and 1 would return `c2`).
 * @source https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 */
const blend = (c1, c2, p) => {
  let f = parseInt(c1.slice(1), 16);
  let t = parseInt(c2.slice(1), 16);
  let R1 = f >> 16,
    G1 = (f >> 8) & 0x00ff,
    B1 = f & 0x0000ff,
    R2 = t >> 16,
    G2 = (t >> 8) & 0x00ff,
    B2 = t & 0x0000ff;
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((R2 - R1) * p) + R1) * 0x10000 +
      (Math.round((G2 - G1) * p) + G1) * 0x100 +
      (Math.round((B2 - B1) * p) + B1)
    )
      .toString(16)
      .slice(1)
  );
};

/**
 * Return a mapped spectrum of colors from `c1` to `c2` (inclusive)
 * @param {string} c1 - The first color in the format `#ffffff`
 * @param {string} c2 - The second color in the format `#ffffff`
 */
export const gradient = (c1, c2) => {
  return {
    0: c1,
    4: blend(c1, c2, 0.04),
    7.5: blend(c1, c2, 0.075),
    12.5: blend(c1, c2, 0.125),
    20: blend(c1, c2, 0.2),
    30: blend(c1, c2, 0.3),
    40: blend(c1, c2, 0.4),
    50: blend(c1, c2, 0.5),
    55: blend(c1, c2, 0.55),
    60: blend(c1, c2, 0.6),
    70: blend(c1, c2, 0.7),
    90: blend(c1, c2, 0.9),
    100: c2,
  };
};
