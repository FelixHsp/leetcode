const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const list = paragraph.match(/\b\w+\b/g) as RegExpMatchArray;
  const map: Record<string, number> = {};
  const bannedMap: Record<string, number> = {};
  const currentMax = {
    word: '',
    num: 0
  };

  for (let i = 0; i < banned.length; i++) {
    bannedMap[banned[i].toLowerCase()] = 1;
  };

  for (let i = 0; i < list.length; i++) {
    const word = list[i].toLowerCase();
    map[word] = map[word] + 1 || 1;
    if (map[word] > currentMax.num && !bannedMap[word]) {
      currentMax.word = word;
      currentMax.num = map[word];
    }
  };

  return currentMax.word;
};

const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];
console.log(mostCommonWord(paragraph, banned));

export default void 0;