import React from 'react';
import RecommendationPage from './recommendations';

export default {
  path: '/recommendations',

  async action() {
    return <RecommendationPage />;
  },
};
