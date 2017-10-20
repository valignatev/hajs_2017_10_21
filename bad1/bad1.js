const _talks = [];
const talks = {
  push: () => _talks.push(),
  length: () => _talks.length,
  all: () => {
    const sorted = _talks.slice();
    sorted.sort((a, b) => {
    if (a.time < b.time) {
      return 1;
    } else {
      return -1;
    }});
    return sorted;
  },
};

export { talks };
