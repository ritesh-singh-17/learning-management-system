import axiosInstance from "@/api/axiosInstance";
import { toast } from "react-toastify";

export async function registerService(formData) {
  try {
    const { data } = await axiosInstance.post("/auth/register", {
      ...formData,
      role: "user",
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function loginService(formData) {
  try {
    const { data } = await axiosInstance.post("/auth/login", formData);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function checkAuthService() {
  try {
    const { data } = await axiosInstance.get("/auth/check-auth");
    // toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function mediaUploadService(formData, onProgressCallback) {
  try {
    const { data } = await axiosInstance.post("/media/upload", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgressCallback(percentCompleted);
      },
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function mediaDeleteService(id) {
  try {
    const { data } = await axiosInstance.delete(`/media/delete/${id}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function fetchInstructorCourseListService() {
  try {
    const { data } = await axiosInstance.get(`/instructor/course/get`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function addNewCourseService(formData) {
  try {
    const { data } = await axiosInstance.post(`/instructor/course/add`, formData);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function fetchInstructorCourseDetailsService(id) {
  try {
    const { data } = await axiosInstance.get(`/instructor/course/get/details/${id}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function updateCourseByIdService(id, formData) {
  try {
    const { data } = await axiosInstance.patch(`/instructor/course/update/${id}`, formData);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function mediaBulkUploadService(formData, onProgressCallback) {
  try {
    const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgressCallback(percentCompleted);
      },
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function fetchStudentViewCourseListService(query) {
  try {
    const { data } = await axiosInstance.get(`/student/course/get?${query}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function fetchStudentViewCourseDetailsService(courseId) {
  try {
    const { data } = await axiosInstance.get(`/student/course/get/details/${courseId}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function checkCoursePurchaseInfoService(courseId, studentId) {
  try {
    const { data } = await axiosInstance.get(`/student/course/purchase-info/${courseId}/${studentId}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    console.log(error)
    // toast.error(error?.response?.data?.message);
  }
}

export async function createPaymentService(formData) {
  try {
    const { data } = await axiosInstance.post(`/student/order/create`, formData);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function captureAndFinalizePaymentService(paymentId, payerId, orderId) {
  try {
    const { data } = await axiosInstance.post(`/student/order/capture`, {
      paymentId,
      payerId,
      orderId,
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function fetchStudentBoughtCoursesService(studentId) {
  try {
    const { data } = await axiosInstance.get(`/student/courses-bought/get/${studentId}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getCurrentCourseProgressService(userId, courseId) {
  try {
    const { data } = await axiosInstance.get(`/student/course-progress/get/${userId}/${courseId}`);
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function markLectureAsViewedService(userId, courseId, lectureId) {
  try {
    const { data } = await axiosInstance.post(`/student/course-progress/mark-lecture-viewed`, {
      userId,
      courseId,
      lectureId,
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function resetCourseProgressService(userId, courseId) {
  try {
    const { data } = await axiosInstance.post(`/student/course-progress/reset-progress`, {
      userId,
      courseId,
    });
    toast.success(data.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
