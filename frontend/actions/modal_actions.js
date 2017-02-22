export const OPEN_SIGNUP = "OPEN_SIGNUP";
export const CLOSE_SIGNUP = "CLOSE_SIGNUP";
export const OPEN_CREATE_GROUP = "OPEN_CREATE_GROUP";
export const CLOSE_CREATE_GROUP = "CLOSE_CREATE_GROUP";
export const OPEN_AUTHFORM = "OPEN_AUTHFORM";
export const CLOSE_AUTHFORM = "CLOSE_AUTHFORM";

export const openAuthForm = () => ({
  type: OPEN_AUTHFORM,
  open: true
});

export const closeAuthForm = () => ({
  type: CLOSE_AUTHFORM,
  open: false
});

export const openSignUp = () => ({
  type: OPEN_SIGNUP,
  open: true
});

export const closeSignUp = () => ({
  type: CLOSE_SIGNUP,
  close: false
});

export const openCreateGroup = () => ({
  type: OPEN_CREATE_GROUP,
  open: true
});

export const closeCreateGroup = () => ({
  type: CLOSE_CREATE_GROUP,
  open: false
});
