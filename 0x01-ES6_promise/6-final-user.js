import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signup = await signUpUser(firstName, lastName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((error) => ({ status: 'rejected', value: error.toString() }));
  const photo = await uploadPhoto(fileName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((error) => ({ status: 'rejected', value: error.toString() }));
  return [signup, photo];
}
