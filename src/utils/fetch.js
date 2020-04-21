const baseUrl = "http://localhost:5000";

export const getData = (url) => request(url);

export const postData = (url, data) => request(url, "POST", data);

export const putData = (url, data) => request(url, "PUT", data);

export const deleteData = (url) => request(url, "DELETE");

const request = (_url, method = "GET", body = "") => {
  const url = `${baseUrl}${_url}`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const params = {
    method,
    headers: headers,
  };
  if (["POST", "PUT"].includes(method)) {
    params.body = typeof body !== "string" ? JSON.stringify(body) : body;
  }
  const request = new Request(url, params);

  return fetch(request).then((response) => {
    if (
      response.status === 204 ||
      +response.headers.get("Content-Length") === 0
    ) {
      return {};
    }
    return response.json();
  });
};
