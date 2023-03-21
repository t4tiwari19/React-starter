import axios from 'axios';
const makePostRequest = async (url, payload) => {
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Example usage:
export const MakeExtoleAPIRequest = async (callbackFn) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  // const url = 'https://4072c394-fd80-472c-bd85-d88484da6b71.mock.pstmn.io/api/discover/createZone';
  const payload = {
    event_name: 'advocate_mobile_experience',
    data: {
      cif_id: '10361000',
      first_name: 'Om',
      last_name: 'Prasad',
      email: 'oprasad@discover.com',
      partner_user_id: 'omprakash4193@gmail.com',
      labels: 'production',
      locale: '',
      alt_acct_nbr: '84738292818',
    },
  };

  try {
    const response = await makePostRequest(url, payload);
    console.log(response);
    if (callbackFn) callbackFn(response);
  } catch (error) {
    console.error(error);
  }
};

export const SendEmail = async (callbackFn) => {
  //const url = 'https://4072c394-fd80-472c-bd85-d88484da6b71.mock.pstmn.io/api/discover/createZone';
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const payload = {
    recipient_emails: ['om4193@gmail.com', 'omprakash4193@gmail.com'],
    message:
      'I wanted to share one of my favorite brands Your Company. Because I referred you, you can get rewarded with $20.',
    subject: "I thought you'd be interested in this",
    data: { consumer_event: 'fly' },
    campaign_id: '7156986749295819346',
    labels: 'refer-a-friend-staging',
  };

  try {
    const response = await makePostRequest(url, payload);
    console.log(response);
    if (callbackFn) callbackFn(response);
  } catch (error) {
    console.error(error);
  }
};
