export const createGroup = (group) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/groups',
      data: { group }
    })
  );
};

export const fetchAllGroups = () => (
  $.ajax({
    method: 'GET',
    url: '/api/groups'
  })
);

export const fetchSingleGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${id}`
  });
};

export const deleteGroup = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${id}`
  });
};
