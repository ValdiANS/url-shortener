const baseUrl = 'https://api.shrtco.de/v2/';

const shortenLink = async (link) => {
  try {
    const resp = await fetch(`${baseUrl}shorten?url=${link}`);
    const respJson = await resp.json();

    return respJson;
  } catch (error) {
    // console.log('Error: ');
    // console.log(error);

    throw new Error(error);
  }
};

export default shortenLink;
