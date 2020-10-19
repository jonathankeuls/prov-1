function isSameUser(user1, user2) {
    user1 = {name: 'Karl', lastName: 'Andersson', email: 'karl.andersson@gmail.com'}
    user2 = {name: 'Anders', lastName: 'Karlsson', email: 'anders.karlsson@gmail.com'}

    return user1.email === user2.email
}
