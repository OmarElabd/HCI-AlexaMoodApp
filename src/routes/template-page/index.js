import React from 'react';
import Template from './Template';

export default {
  path: '/template-path',

  async action() {
    return <Template />;
  },
};
