import React from 'react';
import { FlexiComponent } from './components/flexi-component'

function App() {
  const flexiConfig1 = {
    items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": "TextField",
      },
      {
        "name": "person_other",
        "label": "Person other",
        "type": "TextField",
      }
    ]
  };
  
  const flexiConfig2 = {
    items: [
      {
        "name": "name1",
        "label": "Person's Name",
        "type": "TextField",
        "children": flexiConfig1
      },
      {
        "name": "name2",
        "label": "Person other",
        "type": "TextField",
      }
    ]
  };

  return (
    <div className="App">
      <FlexiComponent config={flexiConfig2} onSubmit={onSubmit} />
    </div>
  );
}

const onSubmit = (data) => {
  console.log(data);
}

export default App;
