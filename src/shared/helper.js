export const manageSuccess = (data, app) => {
  const { given_name, short_name } = data;
  const welcomeString = `Hi ${given_name ?? short_name}, You logged in successfully with ${app} !`;
  alert(welcomeString);
};

export const manageError = () => {
  const errorString = "Opps... Something went wrong !";
  alert(errorString);
};
