const ApiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response) throw Error("Please reload the  app");
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};

export default ApiRequest;
