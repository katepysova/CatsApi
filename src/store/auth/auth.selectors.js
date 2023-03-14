export const authTokenSelector = (state) => state?.auth?.token || null;
export const authRestoreSelector = (state) => state?.auth?.isRestored || false;
