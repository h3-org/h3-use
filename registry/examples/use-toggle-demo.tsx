import React from 'react';

import { useToggle } from '../hooks/use-toggle';

export function UseToggleDemo() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>
        The state is: <strong>{isOn ? 'On' : 'Off'}</strong>
      </p>
      <button onClick={toggle}>{isOn ? 'Off' : 'On'}</button>
    </div>
  );
}
