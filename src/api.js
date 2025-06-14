const API_URL = "https://dummyjson.com";

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const json = await res.json();

  localStorage.setItem("token", json.accessToken);
  localStorage.setItem("refreshToken", json.refreshToken);

  return json.accessToken;
}

export async function getProducts() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  return json.products;
}

export async function getProduct(id) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  return json;
}
