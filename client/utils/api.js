import axios from 'axios';

const API_URL = 'https://galacticvault.io/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllWorkouts = async () => {
  try {
    const response = await api.get('/workouts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = async (workoutId) => {
  try {
    const response = await api.get(`/workouts/${workoutId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = async (newWorkout) => {
  try {
    const response = await api.post('/workouts', newWorkout);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = async (workoutId, changes) => {
  try {
    const response = await api.patch(`/workouts/${workoutId}`, changes);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = async (workoutId) => {
  try {
    await api.delete(`/workouts/${workoutId}`);
  } catch (error) {
    throw error;
  }
};

export {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
