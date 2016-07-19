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
export const submit = (data) => {
  return {
    type: "SUBMIT",
    data
  }
};

export const clearForm = () => {
  return {
    type: "CLEAR_FORM",
  }
};

export const saveOrEdit = (data) => {
  return {
    type: "SAVE_OR_EDIT",
    data
  }
};
export const removeItem = (itemId) => {
  return {
    type: "REMOVE_ITEM",
    itemId
  }
};
