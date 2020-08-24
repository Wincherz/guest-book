export const getMessagesFromData = () => {
  return fetch('http://localhost:5000/api/messages')
    .then(data => data.json());
}