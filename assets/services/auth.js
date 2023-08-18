export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dmksdjspdhhwofanfodj',
        user: {
          name: 'Diego',
          email: 'diegocardoso117@gmail.com',
          senha: 'teste123',
        },
      });
    }, 1000);
  });
}
