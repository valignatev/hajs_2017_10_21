const _talks = [];
const talks = {
  all: () => {
    const sorted = _talks.slice();
    sorted.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      } else {
        return 1;
      }
    });
    return sorted;
  },
  submit: (talk) => {
    if (!_talks.filter(submitted => submitted.name === talk.name).length) {
      _talks.push(talk)
    } else {
      throw new Error('duplicate talk submitted, go find other theme');
    }
  },
  length: () => _talks.length,
  clear: () => _talks.length = 0,
};
export { talks };
