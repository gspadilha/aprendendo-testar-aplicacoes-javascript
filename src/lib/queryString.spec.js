const { queryString } = require('./queryString');

describe('Object to Query String', () => {
  it('deve criar um query valid a partir de um objeto dado', () => {
    const obj = {
      name: 'Guilherme Padilha',
      role: 'Developer',
    };

    expect(queryString(obj)).toEqual('name=Guilherme%20Padilha&role=Developer');
  });

  it('deve criar uma query válida a partir de um objeto dado', () => {
    const obj = {
      name: 'Guilherme dos Santos Padilha',
      role: 'Web Developer',
    };

    expect(queryString(obj)).toEqual(
      'name=Guilherme%20dos%20Santos%20Padilha&role=Web%20Developer',
    );
  });

  it('deve criar uma query válida a partir de um objeto dado com um array', () => {
    const obj = {
      name: 'Guilherme dos Santos Padilha',
      languages: ['inglês', 'português'],
    };

    expect(queryString(obj)).toEqual(
      'name=Guilherme%20dos%20Santos%20Padilha&languages=inglês,português',
    );
  });

  it('deve ocorrer um erro caso seja passado um objeto', () => {
    const obj = {
      name: 'Guilherme dos Santos Padilha',
      languages: {
        ingles: 'inglês',
        portugues: 'português',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});
