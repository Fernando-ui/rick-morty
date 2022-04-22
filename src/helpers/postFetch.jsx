const fetchGet = async (endpoint = "") => {
  const info = await fetch(endpoint, {
    method: "GET",

    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const respInfo = await info.json();
  return respInfo;
};

export { fetchGet };
