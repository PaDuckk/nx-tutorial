import React from 'react';
import { Todo } from '@nx-tutorial/data';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TodosProps {}

const StyledTodos = styled.div`
  color: pink;
`;

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map(t => (
        <li className={'todo'}>{t.title} !!</li>
      ))}
    </ul>
  );
};

export default Todos;
