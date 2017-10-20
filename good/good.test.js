import { talks } from './good';

function addTalk(talk) {
  talks.submit(talk);
}

beforeEach(() => {
  talks.clear();
});

it('sorts talks by time', () => {
  addTalk({name: 'Testing Rocks', time: '11:00'});
  addTalk({name: 'React Rocks', time: '15:00'});
  addTalk({name: 'Vue Rocks', time: '13:00'});
  addTalk({name: 'JS is AWESOME', time: '16:00'});
  expect(talks.all()).toEqual([
    {name: 'Testing Rocks', time: '11:00'},
    {name: 'Vue Rocks', time: '13:00'},
    {name: 'React Rocks', time: '15:00'},
    {name: 'JS is AWESOME', time: '16:00'},
  ]);
});

it('allows only unique talks', () => {
  addTalk({name: 'Testing Rocks', time: '11:00'});
  addTalk({name: 'React Rocks', time: '15:00'});
  addTalk({name: 'Vue Rocks', time: '13:00'});
  addTalk({name: 'JS is AWESOME', time: '16:00'});
  const addDup = () => addTalk({name: 'Testing Rocks'});
  expect(addDup).toThrowError(/dup/);
  expect(talks.all()).toEqual([
    {name: 'Testing Rocks', time: '11:00'},
    {name: 'Vue Rocks', time: '13:00'},
    {name: 'React Rocks', time: '15:00'},
    {name: 'JS is AWESOME', time: '16:00'},
  ]);
});
