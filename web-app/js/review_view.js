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
const tuiEditorContentsChildrenArray = [...tuiEditorContents.children];

function editorMouseEvent(element) {
    element.addEventListener('mouseover', function (event) {
        element.classList.add('mouseover');
    });
    element.addEventListener('mouseout', function (event) {
        element.classList.remove('mouseover');
    });

    return element;
}

tuiEditorContentsChildrenArray.forEach((element) => {
    element.classList.add('plus-buttons-container');

    if (element.children.length === 0 || element.nodeName === 'PRE' || element.nodeName === 'P') {
        editorMouseEvent(element);

        const plusButton = createPlusButton();
        element.appendChild(plusButton);
    } else {
        const tuiEditorContentsChildrenArrayChildrenArray = [...element.children];
        tuiEditorContentsChildrenArrayChildrenArray.forEach((el) => {
            editorMouseEvent(el);

            const plusButton = createPlusButton();
            el.appendChild(plusButton);
        });
    }
});

function createPlusButton() {
    const plusButton = createElement('div', 'plus-buttons');
    const tag = createElement('i', ['fas', 'fa-plus-square', 'plus-buttons-icon']);
    plusButton.appendChild(tag);

    return plusButton;
}

function commentSave(item) {
    const isConfirm = confirm('리뷰를 남기시겠습니까?');

    if (isConfirm) {
        const itemContainer = item.closest('.review-comment-container');
        const itemContents = item.closest('.review-comment-contents');
        const button = itemContainer.previousSibling.childNodes.item(0);
        button.classList.replace('fa-plus-square', 'fa-comment-dots');
        button.classList.add('comment-saved');
        const resetButton = itemContents.querySelector('.review-comment-reset');
        const commentInput = itemContents.querySelector('.review-comment-input');
        itemContainer.style.display = 'none';
        item.remove();
        resetButton.remove();
        commentInput.setAttribute('contenteditable', false);
    }
}

function commentReset(item) {
    const itemContainer = item.closest('.review-comment-container');
    const itemContents = item.closest('.review-comment-contents');
    if (itemContainer.children.length > 1) {
        const commentInput = itemContents.querySelector('.review-comment-input');
        commentInput.innerText = '';
    }
}

function createElement(tagName, className, text, attributeNames, attributeValues) {
    const element = document.createElement(tagName);

    if (className !== undefined) {
        if (typeof className === 'object') {
            for (let index in className) {
                element.classList.add(className[index]);
            }
        } else {
            element.classList.add(className);
        }
    }

    if (text !== undefined) {
        element.innerText = text;
    }

    if (attributeNames !== undefined && attributeValues !== undefined) {
        if (typeof attributeNames === 'object') {
            for (let index in attributeNames) {
                element.setAttribute(attributeNames[index], attributeValues[index]);
            }
        } else {
            element.setAttribute(attributeNames, attributeValues);
        }

    }

    return element;
}


function createReviewComment() {
    const newReviewCommentContents = createElement('div', 'review-comment-contents');
    const newReviewCommentHeader = createElement('div', 'review-comment-header');
    newReviewCommentContents.appendChild(newReviewCommentHeader);

    const newReviewCommentWriter = createElement('span', 'review-comment-writer', 'Jinmin');
    const newReviewCommentDate = createElement('span', 'review-comment-date', '2021-03-01');
    const newReviewCommentSave = createElement('button', 'review-comment-save', '저장', 'onclick', 'commentSave(this)');
    const newReviewCommentReset = createElement('button', 'review-comment-reset', '취소', 'onclick', 'commentReset(this)');
    newReviewCommentHeader.appendChild(newReviewCommentWriter);
    newReviewCommentHeader.appendChild(newReviewCommentDate);
    newReviewCommentHeader.appendChild(newReviewCommentReset);
    newReviewCommentHeader.appendChild(newReviewCommentSave);

    const newReviewCommentInput = createElement('div', 'review-comment-input', undefined, ['contenteditable', 'data-placeholder'], ['true', 'input your think :)']);
    newReviewCommentContents.appendChild(newReviewCommentInput);

    return newReviewCommentContents;
}

editorContainer.addEventListener('click', function (event) {
    const target = event.target;
    console.log(target);

    if (target.classList.contains('plus-buttons-icon')) {
        const targetContainer = target.parentNode.parentNode;
        let hasReviewContainer = false;

        [...targetContainer.children].forEach((item) => {
            hasReviewContainer = item.classList.contains('review-comment-container');
        });

        if (!hasReviewContainer) {
            const newReviewCommentContainer = createElement('div', 'review-comment-container');
            newReviewCommentContainer.appendChild(createReviewComment());
            targetContainer.appendChild(newReviewCommentContainer);
        }
    }

    if (target.classList.contains('comment-saved')) {
        const targetContainer = target.parentNode.parentNode.children.item(length - 1);
        console.log(target.parentNode.parentNode.children.item(length - 1));
        // console.log(targetContainer);
        targetContainer.style.display = 'block';
        const addComment = createReviewComment();
        targetContainer.appendChild(addComment);

        // addComment.forEach((element) => {
        //     targetContainer.appendChild(element);
        // });
    }
});

/*
function addReviewComment() {
    const newReviewCommentHeader = createElement('div', 'review-comment-header');
    const newReviewCommentWriter = createElement('span', 'review-comment-writer', 'Jinmin');
    const newReviewCommentDate = createElement('span', 'review-comment-date', '2021-03-01');
    const newReviewCommentSave = createElement('button', 'review-comment-save', '저장', 'onclick', 'commentSave(this)');
    const newReviewCommentReset = createElement('button', 'review-comment-reset', '취소', 'onclick', 'commentReset(this)');
    newReviewCommentHeader.appendChild(newReviewCommentWriter);
    newReviewCommentHeader.appendChild(newReviewCommentDate);
    newReviewCommentHeader.appendChild(newReviewCommentReset);
    newReviewCommentHeader.appendChild(newReviewCommentSave);

    const newReviewCommentInput = createElement('div', 'review-comment-input', undefined, ['contenteditable', 'data-placeholder'], ['true', 'input your think :)']);

    return [newReviewCommentHeader, newReviewCommentInput];
}
*/


const commentInputContainer = document.querySelector('.comment-input-container');
commentInputContainer.addEventListener('click', function (event) {
    const target = event.target;
    let isConfirm = false;

    const newComment = createElement('li', 'comment');
    const newCommentWriterImg = createElement('img', 'writer-img', undefined, ['src', 'alt'], ['img/user-default/7.png', 'user-image']);
    const newSmallTriangle = createElement('span', 'small-triangle');
    const newCommentContent = createElement('div', 'comment-content');

    newComment.appendChild(newCommentWriterImg);
    newComment.appendChild(newSmallTriangle);
    newComment.appendChild(newCommentContent);

    const newCommentHeader = createElement('div', 'comment-header');
    newCommentContent.appendChild(newCommentHeader);
    const newCommentWriter = createElement('span', 'comment-writer', 'Jinmin');
    const newCommentDate = createElement('span', 'comment-date', '2021-03-02');

    newCommentHeader.appendChild(newCommentWriter);
    newCommentHeader.appendChild(newCommentDate);

    const newCommentText = createElement('div', 'comment-text');
    const commentList = document.querySelector('.comment-list');

    if (target.classList.contains('comment-approve-button')) {
        isConfirm = confirm('Would you like to approve this article?');
        if (isConfirm) {
            newCommentText.innerText = 'Jinmin has approved the post.';
            newCommentContent.appendChild(newCommentText);
            commentList.appendChild(newComment);
            target.style.display = 'none';
        }
    } else if (target.classList.contains('comment-save-button')) {
        const message = document.querySelector('.comment-input').innerHTML;
        if (message === '') {
            alert('Please enter your message.');
        } else {
            isConfirm = confirm('Would you like to leave a comment?');
            if (isConfirm) {
                newCommentText.innerText = message;
                newCommentContent.appendChild(newCommentText);
                commentList.appendChild(newComment);
            }
        }
    }
});

const reviewers = document.querySelector('.reviewers');
reviewers.addEventListener('click', function (event) {
    const target = targetControl(event.target);
    const reviewersEditButton = reviewers.querySelector('.reviewers-edit-button');

    if (target === reviewersEditButton) {
        const editButtonIsActive = target.classList.contains('active') && target.classList.contains('reviewers-edit-button');
        activateReviewerButtonControl(target, editButtonIsActive);
    }

    if (target.closest('.reviewers-unselected-list')) {
        const isTargetUnselectedItem = target.classList.contains('reviewers-unselected-item') && reviewersEditButton.classList.contains('active');
        appendReviewersItem(target, isTargetUnselectedItem);
    }
});

function targetControl(target) {
    if (target.closest('.reviewers-selected-item')) {
        target = target.closest('.reviewers-selected-item');
    } else if (target.closest('.reviewers-unselected-item')) {
        target = target.closest('.reviewers-unselected-item');
    } else {
        return target;
    }

    return target;
}

function appendReviewersItem(target, isUnselected) {
    const username = target.innerText;
    const isAppendConfirm = confirm(`${username} 님을 reviewer로 등록하시겠습니까? \n (한번 등록하면 삭제할 수 없습니다.)`);

    if (isAppendConfirm) {
        if (isUnselected) {
            const reviewersSelectedList = reviewers.querySelector('.reviewers-selected-list');
            target.classList.replace('reviewers-unselected-item', 'reviewers-selected-item');
            reviewersSelectedList.appendChild(target);
        }
    }

    return target;
}

/*

function appendReviewersItem(target, isSelected) {
    if (!isSelected) {
        const reviewersSelectedList = reviewers.querySelector('.reviewers-selected-list');
        target.classList.replace('reviewers-unselected-item', 'reviewers-selected-item');
        reviewersSelectedList.appendChild(target);
    } else {
        const reviewersUnselectedList = reviewers.querySelector('.reviewers-unselected-list');
        target.classList.replace('reviewers-selected-item', 'reviewers-unselected-item');
        reviewersUnselectedList.appendChild(target);
    }

    return target;
}
*/


function activateReviewerButtonControl(target, isActive) {
    const reviewersUnselectedList = reviewers.querySelector('.reviewers-unselected-list');
    const reviewersEditTitle = reviewers.querySelector('.reviewers-edit-title');

    if (!isActive) {
        target.classList.replace('fa-user-edit', 'fa-sign-out-alt');
        target.classList.add('active');
        reviewersUnselectedList.classList.add('view');
        reviewersEditTitle.classList.add('view');
    } else {
        target.classList.replace('fa-sign-out-alt', 'fa-user-edit');
        target.classList.remove('active');
        reviewersUnselectedList.classList.remove('view');
        reviewersEditTitle.classList.remove('view');
    }

    return target;
}

const scrollTopButton = document.querySelector('.scroll-top-button');
window.addEventListener('scroll', function (event) {
    if (window.pageYOffset > 100) {
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
});