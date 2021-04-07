import { createSlice } from '@reduxjs/toolkit';
import { addQuizToTopic } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const thunkActionCreator = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizToTopic({
      quizId: id,
      topicId
    }));
  }
}

export const selectQuiz = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;