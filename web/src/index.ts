import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

// user.set({ name: 'HelloThisIsNEW', age: 999 });

user.save();
