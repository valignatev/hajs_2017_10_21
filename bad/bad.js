const _talks = [];
const talks = {
  clear: () => _talks.length = 0,
  push: talk => {
    if (_talks.length < 6) {
      _talks.push(talk)
    };
  },
  byName: name => _talks.filter(talk => talk.name === name)[0],
  count: () => _talks.length,
  _talks: _talks
};

export { talks };
