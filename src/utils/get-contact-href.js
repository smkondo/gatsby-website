// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://twitter.com/kondo_shinya`;
      break;
    case 'github':
      href = `https://github.com/smkondo`;
      break;
    case 'email':
      href = `mailto:smkondo@seas.upenn.edu`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/shinya-kondo-426044152/`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/${contact}`;
      break;
    case 'youtube':
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
