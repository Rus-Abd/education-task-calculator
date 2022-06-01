import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import { History } from '../../components/History/History';
import { KeyPad } from '../../components/Keypad/Keypad';
import { getFromLS } from '../../utils/storage';
import './calculator.css';

export const Calculator = () => {
  const [displayVal, setDisplayVal] = useState('');
  const [history, setHistory] = useState(getFromLS('history') || []);
  return (
    <main className="container">
      <div className="container-calculations">
        <Display displayVal={displayVal} />
        <KeyPad
          setDisplayVal={setDisplayVal}
          setHistory={setHistory}
          history={history}
        />
      </div>
      <History history={history} />
    </main>
  );
};
// import React, { useState, useEffect, useCallback } from 'react';
// import sendMetric from 'metrics';
// import sendData from 'data';
// import bigComputations from 'utils';

// const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

// const PleaseReviewMe = ({ argument }) => {
//   const [data] = useState(() => bigComputations(argument));

//   const handleSendMetric = () => {
//     sendMetric('click');
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleSendMetric);

//     return () => {
//       document.removeEventListener('click', handleSendMetric);
//     };
//   });

//   const click = useCallback(
//     (id) => {
//       sendData(data, id);
//     },
//     [data],
//   );

//   return (
//     <>
//       {items.map(({ id }) => (
//         <div key={id} onClick={() => click(id)}>
//           {id}
//         </div>
//       ))}
//     </>
//   );
// };

// export default PleaseReviewMe;
