import { User } from './models/User';

const user = new User({ name: 'MyName', age: 20 });

user.on('change', () => {
  console.log('Change 01');
});

user.on('change', () => {
  console.log('Change 02');
});

user.on('save', () => {
  console.log('Save was triggered');
});

// console.log(user);

user.trigger('save');
