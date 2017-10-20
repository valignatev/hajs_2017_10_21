import { talks } from './bad.js';

test('can add talk', () => {
  talks.push({name: 'JS is awesome!', speaker: 'John Smith', time: '12:00'});
  expect(talks.count()).toEqual(1);
});

test('can get talk by name', () => {
  talks.push({name: 'JS is awesome!', speaker: 'John Smith', time: '12:00'});
  expect(talks.byName('JS is awesome!')).toEqual({name: 'JS is awesome!', speaker: 'John Smith', time: '12:00'});
});

test('can create 6 talks max', () => {
  talks.clear();
  for (const name of Array(10).keys()) {
    const str = name.toString();
    talks.push({name: str, speakeer: `Speaker ${str}`, time: `12:0${str}`});
  }
  expect(talks.count()).toEqual(6);
});

