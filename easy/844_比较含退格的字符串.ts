const backspaceCompare = (s: string, t: string): boolean => {
  const sStack = [];
  const tStack = [];

  const length = s.length >= t.length ? s.length : t.length;
  for (let i = 0; i < length; i++) {
    if (s[i]) {
      if (s[i] !== '#') {
        sStack.push(s[i]);
      }
      else {
        sStack.pop();
      }
    }

    if (t[i]) {
      if (t[i] !== '#') {
        tStack.push(t[i]);
      }
      else {
        tStack.pop();
      }
    }
  }

  return sStack.join('') === tStack.join('');
};

const s = 'ab#c';
const t = 'ad#c';

console.log(backspaceCompare(s, t));

export default void 0;