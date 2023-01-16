/**
 * function to get json information about the performance of the user
 * @param {id: number} id
 * @returns {{}}
 */

export async function getPerformance(id) {
  return fetch(`http://localhost:3000/user/${id}/performance`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
