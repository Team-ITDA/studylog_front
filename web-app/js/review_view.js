const content =
    '호이스팅\n' +
    '==========\n' +
    '\n' +
    '- 자바스크립트 Parser가 스크립트를 실행하기 전에 전체를 한 번 훑고\n' +
    '스크립트 내의 변수와 함수를 <u>**최상단에 올려 선언**</u>하는 것을 말한다\n' +
    '\n' +
    '- 실제 메모리에는 변화가 없다\n' +
    '\n' +
    '- 호이스팅의 대상은 var 변수와 함수 선언문이다. let,const 변수와 함수 표현문은 호이스팅되지 않는다.\n' +
    '\n' +
    '```\n' +
    'var value = "Hello World!";\n' +
    '```\n' +
    '위의 코드가 실제 실행되었을 때 이처럼 실행된다\n' +
    '\n' +
    '```\n' +
    'var value;\n' +
    'value = "Hello World!";\n' +
    '```\n' +
    '전자가 실제 실행되었을 때 후자처럼 value 변수가 호이스팅되서 **최상단에 선언** 된다\n' +
    '\n' +
    '- 따라서 후에 선언된 var 변수를 사용했을 경우 **값이 할당이 안되어** undefined 가 반환되지만 let, const 변수는 **선언조차 안되었기 때문에 에러**가 발생한다\n' +
    '\n' +
    '```\n' +
    'console.log(value); // undefined\n' +
    'console.log(letValue); //error!\n' +
    '\n' +
    'var value = "Hello World!";\n' +
    'let letVlaue = "Hello Let";\n' +
    '```\n' +
    '위의 코드가 실제 실행되었을 때 이처럼 실행된다\n' +
    '\n' +
    '```\n' +
    'var value;\n' +
    'console.log(value); //undefined\n' +
    'console.log(letValue);  //error!\n' +
    '\n' +
    'value = "Hello World!";\n' +
    'let letValue = "Hello Let";\n' +
    '```\n' +
    '\n' +
    '---------------------\n' +
    '\n' +
    '- 함수 선언문의 호이스팅\n' +
    '\n' +
    '```\n' +
    'printHello(); // "Hello"\n' +
    '\n' +
    'function printHello(){\n' +
    '  console.log("Hello");\n' +
    '}\n' +
    '```\n' +
    '위의 코드에서 함수는 호이스팅되어 최상단에 선언되기 때문에 실제로는 아래 코드와 같다\n' +
    '```\n' +
    'function printHello(){\n' +
    '  console.log("Hello");\n' +
    '}\n' +
    '\n' +
    'printHello(); // "Hello"\n' +
    '```\n' +
    '\n' +
    '- 하지만 함수 표현문의 경우 호이스팅되지 않는다\n' +
    '\n' +
    '```\n' +
    'printHello(); // error\n' +
    '\n' +
    'var printHello = function(){\n' +
    '  console.log("Hello");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '위의 코드에서 printHello 함수가 실제로 실행되었을 때는 변수로 선언되기 때문에 함수가 아니라는 에러가 뜬다. 아래 코드는 위 코드가 실제 실행되었을 때이다.\n' +
    '\n' +
    '```\n' +
    'var printHello;\n' +
    '\n' +
    'printHello(); // this is not function!!\n' +
    '\n' +
    'printHello = function(){\n' +
    '  console.log("Hello");\n' +
    '}\n' +
    '```\n' +
    '\n' +
    '\n' +
    '- 함수 선언문과 함수 표현문은 실제 동작하는 것은 다르고, 함수 표현문은 **디버깅 하기가 힘들기 때문에** 충분히 생각하고 사용하자\n' +
    '\n' +
    '-----------\n' +
    '\n' +
    '> 원문\n' +
    '[[JavaScript] 호이스팅(Hoisting)\n' +
    '](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)\n';


const viewer = toastui.Editor.factory({
    el: document.querySelector('.editor-container'),
    viewer: true,
    height: 'auto',
    initialValue: content
});

const editorContainer = document.querySelector('.editor-container');
const tuiEditorContents = editorContainer.querySelector('.tui-editor-contents');
const tuiEditorContentsChildren = tuiEditorContents.children;
const tuiEditorContentsChildrenArray = [...tuiEditorContentsChildren];
tuiEditorContentsChildrenArray.forEach((element) => {

    function createPlusButton() {
        const newDiv = document.createElement('div');
        newDiv.classList.add('plus-buttons')
        const newTag = document.createElement('i');
        newTag.classList.add('fas');
        newTag.classList.add('fa-plus-square');
        newTag.classList.add('plus-buttons-icon');
        newDiv.appendChild(newTag);

        return newDiv;
    }

    element.classList.add('plus-buttons-container');

    if (element.children.length === 0 || element.nodeName === 'PRE' || element.nodeName === 'P') {
        element.addEventListener('mouseover', function (event) {
            element.classList.add('mouseover');
        });
        element.addEventListener('mouseout', function (event) {
            element.classList.remove('mouseover');
        });

        element.appendChild(createPlusButton());
    } else {
        const tuiEditorContentsChildrenArrayChildren = element.children;
        const tuiEditorContentsChildrenArrayChildrenArray = [...tuiEditorContentsChildrenArrayChildren];
        tuiEditorContentsChildrenArrayChildrenArray.forEach((e) => {
            e.addEventListener('mouseover', function (event) {
                e.classList.add('mouseover');
            });
            e.addEventListener('mouseout', function (event) {
                e.classList.remove('mouseover');
            });
            e.append(createPlusButton());
        });
    }
});

const plusButtonsIcons = document.querySelectorAll('.plus-buttons-icon');
plusButtonsIcons.forEach((element) => {
    element.addEventListener('click', function (e) {
        function createReviewComment() {
            const newReviewCommentContainer = document.createElement('div');
            newReviewCommentContainer.classList.add('review-comment-container');

            const newReviewCommentContent = document.createElement('div');
            newReviewCommentContent.classList.add('review-comment-content');
            newReviewCommentContainer.appendChild(newReviewCommentContent);

            const newReviewCommentHeader = document.createElement('div');
            newReviewCommentHeader.classList.add('review-comment-header');
            newReviewCommentContent.appendChild(newReviewCommentHeader);

            const newReviewCommentWriter = document.createElement('span');
            newReviewCommentWriter.classList.add('review-comment-writer');
            newReviewCommentWriter.innerText = "Jinmin";

            const newReviewCommentDate = document.createElement('span');
            newReviewCommentDate.classList.add('review-comment-date');
            newReviewCommentDate.innerText = '2021-03-01';

            newReviewCommentHeader.appendChild(newReviewCommentWriter);
            newReviewCommentHeader.appendChild(newReviewCommentDate);

            const newReviewCommentButtons = document.createElement('div');
            newReviewCommentButtons.classList.add('review-comment-buttons');

            const newReviewCommentSave = document.createElement('button');
            newReviewCommentSave.classList.add('review-comment-save');
            newReviewCommentSave.innerText = '저장';

            const newReviewCommentReset = document.createElement('button');
            newReviewCommentReset.classList.add('review-comment-reset');
            newReviewCommentReset.setAttribute('onclick', 'commentResetButton(this)');
            newReviewCommentReset.innerText = '취소';

            newReviewCommentHeader.appendChild(newReviewCommentButtons);
            newReviewCommentButtons.appendChild(newReviewCommentSave);
            newReviewCommentButtons.appendChild(newReviewCommentReset);

            const newReviewCommentInput = document.createElement('div');
            newReviewCommentInput.classList.add('review-comment-input');
            newReviewCommentInput.setAttribute('contenteditable', true);
            newReviewCommentInput.setAttribute('data-placeholder', 'input your think :)');
            newReviewCommentContent.appendChild(newReviewCommentInput);

            return newReviewCommentContainer;
        }

        const parent = element.parentNode.parentNode;
        let hasReviewContainer = false;

        [...parent.children].forEach((item) => {
            if (item.classList.contains('review-comment-container')) {
                hasReviewContainer = true;
            } else {
                hasReviewContainer = false;
            }
        });

        if (!hasReviewContainer) {
            parent.appendChild(createReviewComment());
        }
    });
});

function commentResetButton(item) {
    const itemContainer = item.closest('.review-comment-container');
    itemContainer.remove();
}

const reviewersEditButton = document.querySelector('.reviewers-edit');
const reviewersSelect = document.querySelector('.reviewers-select');
const reviewersList = document.querySelector('.reviewers-list');

reviewersEditButton.addEventListener('click', function () {
    if (!reviewersSelect.classList.contains('active')) {
        reviewersSelect.classList.add('active');
        reviewersList.style.display = 'none';
    } else {
        reviewersSelect.classList.remove('active');
        reviewersList.style.display = 'block';
    }
});










