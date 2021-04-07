import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id } = action.payload;
      state.topics[id] = {
        ...action.payload,
        quizIds: []
      }
    },
    addQuizToTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;