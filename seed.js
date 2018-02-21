const { User, db } = require('./server/db/models');


db.sync({ force: true })
  .then(User.sync())
  .then(() => {
    console.log('BUILDING NAME ARRAYS')
    const firstNames = ['Chris', 'Tara', 'Mike', 'Tammy', 'Chuck', 'Mira', 'Casey', 'Maximus'];
    const lastNames = ['Mironni', 'Binkle', 'Smith', 'Dangle', 'Parrot', 'McCool', 'Jones', 'Magnussen'];

    const promiseArray = [];
    let FN1, FN2, LN1, LN2;
    console.log('BEGGINING USER FOR LOOP')
    for (let i = 0; i < firstNames.length; i++) { // changed to 1 for troubleshooting should be firstnames.length
      FN1 = firstNames[i]
      LN1 = lastNames[i]
      FN2 = firstNames[i]
      LN2 = lastNames[lastNames.length - 1 - i]

      let user1 = {
        firstName: FN1,
        lastName: LN1,
        email: `${FN1}.${LN1}@gmail.com`,
      }
      let user2 = {
        firstName: FN2,
        lastName: LN2,
        email: `${LN2}.${FN2}@gmail.com`,
      }
      console.log('before build or push')
      // user.create(user1)

      promiseArray.push(user1)
      // console.log(user2.firstName, user2.lastName)

      promiseArray.push(user2)

    }
    // console.log('PROMISE.ALL ARRAY RETURN')
    // console.log('promiseArray.length', promiseArray.length)


    return User.bulkCreate(promiseArray)
  })
  .then(() => console.log('Seed complete'))
  .catch(err => console.error(err))
  .finally(() => {
    db.close()
    return null
  })

