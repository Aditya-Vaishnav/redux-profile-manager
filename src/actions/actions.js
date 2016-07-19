export const nameChanged = (newValue) => {
  return {
    type: "NAME_CHANGE",
    newValue
  }
};

export const mobileChanged = (newValue) => {

  return {
    type: "MOB_CHANGE",
    newValue
  }
};

export const clearForm = () => {
  return {
    type: "CLEAR_FORM",
  }
};

export const submit = (data) => {
  return {
    type: "SUBMIT",
    data
  }
};

export const removeProfile = (itemId) => {
  return {
    type: "REMOVE_PROFILE",
    itemId
  }
};

export const editProfile = (data) => {
  return {
    type: "EDIT_PROFILE",
    data
  }
};
