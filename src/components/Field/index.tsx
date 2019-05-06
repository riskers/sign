import * as React from 'react';

interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = (props: IProps) => {
  return <input value={props.value} onChange={props.onChange} />;
};

export default Field;
