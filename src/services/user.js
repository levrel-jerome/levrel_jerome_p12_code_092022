export async function getUser(id) {
  return fetch(`http://localhost:3000/user/${id}`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
