export const apiBaseUrl = "http://localhost:3001/api/v1";

export const getApiEndpoint = {
  // Auth
  login: () => `${apiBaseUrl}/login`,
  changePassword: () => `${apiBaseUrl}/changepassword`,
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
  getTrips: (isFirsttime?: boolean, category?: string) => {

    if (isFirsttime) {
      return `${apiBaseUrl}/trips?isFirsttime=${encodeURIComponent(isFirsttime)}`; // ✅ Get trips by category
    }
     if (category) {
      return `${apiBaseUrl}/trips?category=${encodeURIComponent(category)}`; // ✅ Get trips by category
    }
    return `${apiBaseUrl}/trips`;
  },
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
  updateContact: (id: number | undefined) => `${apiBaseUrl}/contact/${id}`,
  deleteContact: (id: number) => `${apiBaseUrl}/contact/${id}`,

  //product 
  getproduct: (search?: string) =>
    `${apiBaseUrl}/products${search ? `?search=${encodeURIComponent(search)}` : ""}`,
  createproduct: () => `${apiBaseUrl}/products`,
  updateproduct: (id: number | undefined) => `${apiBaseUrl}/products/${id}`,
  deleteproduct: (id: number) => `${apiBaseUrl}/products/${id}`,

  // blogs 
  getBlogs: (category?: string, id?: number) => {
    if (id) {
      return `${apiBaseUrl}/blogs/${id}`; // ✅ Get single blog by ID
    }
    if (category) {
      return `${apiBaseUrl}/blogs?category=${encodeURIComponent(category)}`; // ✅ Get blogs by category
    }
    return `${apiBaseUrl}/blogs`; // ✅ Get all blogs
  },

  createOrder: () => `${apiBaseUrl}/orders`,
  getOrders: () => `${apiBaseUrl}/orders`,
  updateOrder: (id?: number ) => `${apiBaseUrl}/orders/${id}`,
  getBlogById: (id: number) => `${apiBaseUrl}/blogs/${id}`,

  // Create a new blog
  createBlog: () => `${apiBaseUrl}/blogs`,

  // Update a blog by ID
  updateBlog: (id: string | number) => `${apiBaseUrl}/blogs/${id}`,

  // Delete a blog by ID
  deleteBlog: (id: string | number) => `${apiBaseUrl}/blogs/${id}`,
  //GetCountries Data
  getCountries: () => `${apiBaseUrl}/countries`,
};
