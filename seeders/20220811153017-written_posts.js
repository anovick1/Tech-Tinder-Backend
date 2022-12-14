'use strict'

//// TEMPLATE:

// {
//   title: '',
//   text: '',
//   userId: ,
//   createdAt: new Date(),
//   updatedAt: new Date()
// }

const written_posts = [
  {
    type: 'written',
    title: 'Living my best life!',
    text: 'Just started an apprenticeship at a startup called Tesla. Grateful and excited for this opportunity. Counting my blessings everyday. #Blessed #ElonIsTheGoat',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'written',
    title: 'Want a flamethrower?',
    text: "I made too many flame throwers so I'm giving them away as party favors now...",
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'written',
    title: '"If I did it."',
    text: "Can't wait to publish my new book, its a bit like OJs, I just need to beat to rap first.",
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'written',
    title: 'Not just a CEO',
    text: "I'm not saying I'm Batman, I'm just saying no one has seen me and Batman in the same room before.",
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('written_posts', written_posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('written_posts', written_posts)
  }
}
