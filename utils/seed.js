const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('user');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

  const users = [
    { name: 'John Doe', email: 'johnD@example.com' },
    { name: 'Jane Smith', email: 'janeS@example.com' },
    { name: 'John Smith', email: 'johnS@example.com' },
    { name: 'Jane Doe', email: 'janeD@example.com' },
    { name: 'John Miller', email: 'johnM@example.com' },
    { name: 'Jane Miller', email: 'janeM@example.com' },
    // Add more data as needed
  ];
  
  const thoughts = [
    'This is fun',
    'I had a great day',
    'I had a bad day',
    'What a great movie'
  ]
  

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  // console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
