export const baseURL = "https://api.wisey.app/api/v1";

export const apiUrls = {
  getToken: "/auth/anonymous?platform=subscriptions",
  previewCourses: "/core/preview-courses",
  previewCourse: (courseId) => `/core/preview-courses/${courseId}`
};
