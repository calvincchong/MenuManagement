const cleanEditFormData = (formData, id) => {
  // console.log('where is the cleaned data id', formData.id);

  let cleanedData = {
    _id: id,
    name: formData.name,
    chineseName: formData.chineseName,
    category: formData.category,
    description: formData.description,
    price: parseInt(formData.price).toFixed(2),
    options: [...formData.options, ...formData.additionalOptions],
  };

  // console.log('cleaning Data', cleanedData);

  return cleanedData;
};

// TODO: SOME MORE FORM VALIDATION HERE FOR ANYTHING THAT RHF DOESN'T COVER.
const validateData = formData => {
  if (
    formData.name === '' ||
    formData.chineseName === '' ||
    formData.category === '' ||
    formData.description === '' ||
    formData.price === ''
  ) {
    return false;
  }

  return true;
};

module.exports = {
  cleanEditFormData,
};
