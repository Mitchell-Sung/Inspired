async function fetchData(url: string) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const message = `HTTP error! status: ${response.status}`;
    throw new Error(message);
  } else {
    const data = await response.json();
    return data;
  }
}

export default fetchData;
