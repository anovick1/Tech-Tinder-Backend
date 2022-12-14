'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('image_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING
      },
      caption: {
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.STRING(15000)
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('image_posts')
  }
}
