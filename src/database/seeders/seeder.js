module.exports = {
    up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('users', [{
          name: 'admin',
          password_hash: '1234567',
          email: 'admin@admin.com.br',
          provider: true
        }], {});
      
    },
  
    down: async (queryInterface, Sequelize) => {
       await queryInterface.bulkDelete('users', null, {});
       
    }
  };
  