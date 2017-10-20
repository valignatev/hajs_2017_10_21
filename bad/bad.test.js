import { talks } from './bad';

beforeEach(() => {
  talks.clear();
});

test('has 0 talks if no talks was added', () => {
  expect(talks.all()).toEqual([]);
});

test('has 1 talk if only one was added', () => {
  talks.submit({name: 'Tests Suck'});
  expect(talks.length()).toBe(1);
  expect(talks.all()[0]).toEqual({name: 'Tests Suck'});
});

test('has 4 talks if 4 was added', () => {
  talks.submit({name: 'Tests Suck even more'});
  talks.submit({name: 'Tests Suck even more2'});
  talks.submit({name: 'Tests Suck even more3'});
  talks.submit({name: 'Tests Suck even more4'});
  expect(talks.length()).toBe(4);
});

test('sorted by talk time automatically', () => {
  talks.submit({name: 'Tests Suck', time: '14:00'});
  talks.submit({name: 'React Sucks', time: '11:00'});
  talks.submit({name: 'Vue Sucks', time: '16:00'});
  talks.submit({name: 'JS Sucks', time: '22:00'});
  expect(talks.all()).toEqual([
    {name: 'React Sucks', time: '11:00'},
    {name: 'Tests Suck', time: '14:00'},
    {name: 'Vue Sucks', time: '16:00'},
    {name: 'JS Sucks', time: '22:00'},
  ]);
});

test('talks should have unique names', () => {
  talks.submit({name: 'Tests Suck', time: '14:00'});
  talks.submit({name: 'React Sucks', time: '11:00'});
  talks.submit({name: 'JS Sucks', time: '22:00'});
  const addDup = () => talks.submit({name: 'Tests Suck', time: '14:00'});
  expect(talks.all()).toEqual([
    {name: 'React Sucks', time: '11:00'},
    {name: 'Tests Suck', time: '14:00'},
    {name: 'JS Sucks', time: '22:00'},
  ]);
  expect(addDup).toThrowError(/dup/);
});
