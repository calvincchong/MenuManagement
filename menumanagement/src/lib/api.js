// Abstract some details regarding fetcher - APIs always return data.
export const fetcher = async ({ url, method, body, json = true }) => {
  console.log('fetch is running', {
    url,
    method,
    body,
    json,
  });
  const res = await fetch(url, {
    method: method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  // Error handling
  // TODO: Proper Error Handling for with fetch fails;
  if (!res.ok) {
    console.log('fail here', res);
    throw new Error('An error occurred while fetching the data.');
  }

  if (!json) {
    return res;
  }

  if (json) {
    console.log('fetch trying to respond!');
    console.log(res);
    // const data = res.text() ? await res.json(): null // Takes stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.
    // return data; // return the data from the response
    return res.json();
  }
};

// register user
export const register = async user => {
  return fetcher({ url: '/api/register', method: 'POST', body: user });
};

// TODO: User Sign In -> takes in user, but only fields needed are email and password.
export const login = async ({ email, password }) => {
  // console.log ('email', email, 'password', password)
  // return fetcher({url: '/api/login', method: 'POST', body: {email, password}});
  return fetcher({
    url: '/api/login',
    method: 'POST',
    body: { email, password },
    json: false,
  }); // temp flag that must be removed for handling wrong password notification
};

export const editMenuItem = async item => {
  return fetcher({
    url: '/api/menu',
    method: 'PUT',
    body: item,
    json: true,
  });
};

export const getMenuItems = async () => {
  return fetcher({
    url: '/api/menu',
    body: null,
    method: 'GET',
    json: true,
  });
};

export const sendWelcomeEmailSignUp = async ({ email }) => {
  return fetcher({
    url: '/api/sendgrid',
    method: 'POST',
    body: {
      email,
      emailSubject: `Welcome to the club!`,
      emailType: 'template',
    },
    json: true,
  });
};
