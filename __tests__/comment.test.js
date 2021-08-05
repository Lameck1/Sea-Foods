import fetchMealSingleComment from '../__mocks__/comment.mock';
import createElement from '../src/assets/js/helpers/createElement';
import commentCounter from '../__mocks__/comment_counter.mock';

describe('Comment', () => {
  test('it should return 3 comments for meal 52819', () => {
    const id = '52819';
    const comments = fetchMealSingleComment(id);
    const counter = commentCounter(comments);
    expect(counter).toEqual(3);
  });

  test('it should 0 comments for meal 52815', () => {
    const id = '52815';
    const comments = fetchMealSingleComment(id);
    const counter = commentCounter(comments);
    expect(counter).toEqual(0);
  });
});

describe('Comment', () => {
  test('dom should have 3 comments for meal 52819', () => {
    document.body.innerHTML = '<h4>Comments</h4>';
    const id = '52819';
    const comments = fetchMealSingleComment(id);
    const counterSpan = createElement('span', { class: 'counter' });
    counterSpan.textContent = ` (${commentCounter(comments)})`;
    const h4 = document.querySelector('h4');
    h4.appendChild(counterSpan);
    expect(h4.textContent).toEqual('Comments (3)');
  });

  test('dom should have 0 comments for meal 52815', () => {
    document.body.innerHTML = '<h4>Comments</h4>';
    const id = '52815';
    const comments = fetchMealSingleComment(id);
    const counterSpan = createElement('span', { class: 'counter' });
    counterSpan.textContent = ` (${commentCounter(comments)})`;
    const h4 = document.querySelector('h4');
    h4.appendChild(counterSpan);
    expect(h4.textContent).toEqual('Comments (0)');
  });
});
