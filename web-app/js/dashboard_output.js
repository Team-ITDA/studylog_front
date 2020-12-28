/* eslint-disable no-unused-vars */
const content = [
    '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
    '',
    '# Heading 1',
    '## Heading 2',
    '### Heading 3',
    '#### Heading 4',
    '##### Heading 5',
    '###### Heading 6',
    '',
    '**bold** *italic* ~~strikethrough~~',
    '<span style="color:#e11d21;">Color Syntax</span>',
    '[link](https://nhn.github.io/tui.editor/)',
    '',
    '---',
    'horizontal line',
    '***',
    '',
    '> block quote',
    '>> block quote (2 depth)',
    '>>> block quote (3 depth)',
    '',
    '* list',
    '    * list indented',
    '1. ordered',
    '2. list',
    '    1. ordered list',
    '    2. indented',
    '',
    '- [ ] task',
    '- [x] list completed',
    '',
    '`inline code`',
    '',
    '    code block',
    '```js',
    'console.log("fenced code block");',
    '```',
    '<pre>**HTML block**</pre>',
    '',
    '| table | head |',
    '| ----  | ---- |',
    '| table | body |'
].join('\n');

const editor = new toastui.Editor({
    el: document.querySelector('#editorInput'),
    previewStyle: 'vertical',
    initialEditType: "markdown",
    height: 'auto',
    minHeight:'540px',
    initialValue: content,
    scrollHeight: '100%'
});

const viewer = toastui.Editor.factory({
    el: document.querySelector('#editorOutput'),
    viewer: true,
    height: 'auto',
    initialValue: content
});

function ToView()
{
    viewer.setMarkdown(editor.getMarkdown());
};

ToView();

// console.log(editor.getMarkdown());
