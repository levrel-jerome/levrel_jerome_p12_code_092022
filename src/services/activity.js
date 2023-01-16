/**
 * function to get json information about the activity of the user
 * @param {number} id id user
 * @returns {{key: type}}
 */

export async function getActivityDay(id) {
  return fetch(`http://localhost:3000/user/${id}/activity`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
