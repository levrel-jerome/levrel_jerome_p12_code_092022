export async function getActivityDay(id) {
  return fetch(`http://localhost:3000/user/${id}/activity`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
