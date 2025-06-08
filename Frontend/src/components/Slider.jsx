import { useState } from 'react';
import { Range } from 'react-range';

const TwoWaySlider = () => {
  const [values, setValues] = useState([0, 70]);
  const min = 0;
  const max = 100;

  return (
    <div className="flex items-center justify-center w-full py-5">
      <Range
        values={values}
        step={1}
        min={min}
        max={max}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-0.5 w-full bg-gray-300 rounded-full relative"
          >
            <div
              className="absolute h-0.5 bg-black rounded-full"
              style={{
                left: `${(values[0] / max) * 100}%`,
                width: `${((values[1] - values[0]) / max) * 100}%`
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-4 h-4 bg-white rounded-full border-6 border-black shadow cursor-pointer"
          />
        )}
      />
    </div>
  );
};

export default TwoWaySlider;
