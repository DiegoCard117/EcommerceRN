function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dmksdjspdhhwofanfodj',
        user: 'Diego',
        email: 'diegocardoso117@gmail.com',
        senha : 'teste123'
      })
    }, 2000)
  })
}

export default signIn