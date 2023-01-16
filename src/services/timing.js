/**
 *Function to get json information about the training session of the user
 * @param {id: number} id
 * @returns promesse
 */
export async function getTimingDay(id) {
  return fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
