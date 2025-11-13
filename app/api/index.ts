export const apiBaseUrl = "http://localhost:3001/api/v1";

export const getApiEndpoint = {
  // Auth
  login: () => `${apiBaseUrl}/login`,

  // Users
  getUsers: () => `${apiBaseUrl}/user`,
  getUserById: (id: string) => `${apiBaseUrl}/user/${id}`,
  createUser: () => `${apiBaseUrl}/user`,
  updateUser: (id: string) => `${apiBaseUrl}/user/${id}`,
  deleteUser: (id: number) => `${apiBaseUrl}/user/${id}`,

  // Bookings
  getBookings: () => `${apiBaseUrl}/booking`,
  getBookingById: (id: string) => `${apiBaseUrl}/booking/${id}`,
  createBooking: () => `${apiBaseUrl}/booking`,
  updateBooking: (id: string) => `${apiBaseUrl}/booking/${id}`,
  deleteBooking: (id: number) => `${apiBaseUrl}/booking/${id}`,

  // Trips
  getTrips: () => `${apiBaseUrl}/trips`,
  getTripById: (id: string) => `${apiBaseUrl}/trips/${id}`,
  createTrip: () => `${apiBaseUrl}/trips`,
  updateTrip: (id: string) => `${apiBaseUrl}/trips/${id}`,

  // Reviews
  getReview: () => `${apiBaseUrl}/review`,
    getUserReview: () => `${apiBaseUrl}/fetchActiveReview`,

  createReview: () => `${apiBaseUrl}/review`,
  updateReview: (id: string) => `${apiBaseUrl}/review/${id}`,
  deleteReview: (id: number) => `${apiBaseUrl}/review/${id}`,

  // Contact
  getContact: () => `${apiBaseUrl}/contact`,
  createContact: () => `${apiBaseUrl}/contact`,
  updateContact: (id: number) => `${apiBaseUrl}/contact/${id}`,
  deleteContact: (id: number) => `${apiBaseUrl}/contact/${id}`,

  //product 
  getproduct: () => `${apiBaseUrl}/products`,
  createproduct: () => `${apiBaseUrl}/products`,
  updateproduct: (id: number) => `${apiBaseUrl}/products/${id}`,
  deleteproduct: (id: number) => `${apiBaseUrl}/contacts/${id}`,

  // blogs 
getBlogs: (category?: string, id?: string | number) => {
  if (id) {
    return `${apiBaseUrl}/blogs?id=${id}`; // ✅ Get single blog by ID
  }
  if (category) {
    return `${apiBaseUrl}/blogs?category=${encodeURIComponent(category)}`; // ✅ Get blogs by category
  }
  return `${apiBaseUrl}/blogs`; // ✅ Get all blogs
},


  // Create a new blog
  createBlog: () => `${apiBaseUrl}/blogs`,
  
  // Update a blog by ID
  updateBlog: (id: string | number) => `${apiBaseUrl}/blogs/${id}`,

  // Delete a blog by ID
  deleteBlog: (id: string | number) => `${apiBaseUrl}/blogs/${id}`,
};
