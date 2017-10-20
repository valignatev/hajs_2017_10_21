import { talks } from './good';

beforeEach(() => {
  talks.length = 0;
});

function createTalk(talk) {
  talks.push(talk);
};

it('shows empty talks list if there are no talks', () => {
  expect(talks.length()).toBe(0);
});

it('shows 1 talk after addition of one talk', () => {
  createTalk({});
  expect(talks.length()).toBe(1);
});

it('shows 4 talks after addition of four talks', () => {
  for (const i of Array(4).keys()) { createTalk({}); }
  expect(talks.length).toBe(4);
});

it('shows talks with attributes', () => {
  createTalk({name:'Awesome JS', speaker:'James', time:'12:00'});
  createTalk({name:'Vue sucks', speaker:'Lexa', time:'13:00'});
  expect(talks).toEqual([
    {name:'Awesome JS', speaker:'James', time:'12:00'},
    {name:'Vue sucks', speaker:'Lexa', time:'13:00'},
  ]);
});

it('shows talks with attributes', () => {
  createTalk({name:'Awesome JS', speaker:'James', time:'12:00'});
  createTalk({name:'Vue sucks', speaker:'Lexa', time:'13:00'});
  expect(talks.all()).toEqual([
    {name:'Awesome JS', speaker:'James', time:'12:00'},
    {name:'Vue sucks', speaker:'Lexa', time:'13:00'},
  ]);
});

it('sorts talks by time by default', () => {
  createTalk({name:'Vue sucks', speaker:'Lexa', time:'13:00'});
  createTalk({name:'Awesome JS', speaker:'James', time:'12:00'});
  expect(talks.all()).toEqual([
    {name:'Awesome JS', speaker:'James', time:'12:00'},
    {name:'Vue sucks', speaker:'Lexa', time:'13:00'},
  ]);
});
