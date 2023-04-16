const { queryString } = require('./queryString');

describe('Object to Query String', () => {
  it('deve criar um query valid a partir de um objeto dado', () => {
    const obj = {
      name: 'Guilherme Padilha',
      role: 'Developer',
    };

    expect(queryString(obj)).toEqual('name=Guilherme%20Padilha&role=Developer');
  });

  it('deve criar um query valid a partir de um objeto dado', () => {
    const obj = {
      name: 'Guilherme dos Santos Padilha',
      role: 'Web Developer',
    };

    expect(queryString(obj)).toEqual(
      'name=Guilherme%20dos%20Santos%20Padilha&role=Web%20Developer',
    );
  });
});
