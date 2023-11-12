//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllOptions = (state) => state.mails;

// actions
const createActionName = actionName => `app/products/${actionName}`;
const SEND_MAIL = createActionName('SEND_MAIL');


// action creators
export const sendMail = payload => ({type: SEND_MAIL, payload});

export const sendEmailRequest = (emailData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    } 
    fetch(API_URL + '/mails/', options)
            .then(() => {
              dispatch(sendMail(emailData));
            })
            .catch((error) => {
              console.error(error);
            });
  }
};

const mailsReducer = (statePart = [], action) => {
  switch (action.type) {
    case SEND_MAIL:
      return [...action.payload]; 
    default:
      return statePart;
  };
};

export default mailsReducer;