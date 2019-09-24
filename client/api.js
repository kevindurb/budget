export const execute = async (request) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };

  if (request.data) {
    options.body = JSON.encode(request.data);
  }

  const response = await fetch(request.url, options);

  const data = await response.json();

  return {
    ...response,
    data,
  };
};

export const get = url => execute({ url, method: 'GET' });
export const post = (url, data) => execute({ url, method: 'POST', data });
export const put = (url, data) => execute({ url, method: 'PUT', data });
export const patch = (url, data) => execute({ url, method: 'PATCH', data });
export const delete = (url, data) => execute({ url, method: 'DELETE', data });
