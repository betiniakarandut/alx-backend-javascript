import { uploadPhoto, createUser } from './utils';


export default function handleProfileSignup() {
  const uploadPhotoVar = uploadPhoto();
  const createUserVar = createUser();

  return Promise.all([uploadPhotoVar, createUserVar])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
