import React from 'react';
import Select from 'react-select';
function Header() {
  const options = [
    { value: 'dijkstra', label: `Dijkstra's Algorithm` },
    { value: 'astar', label: 'A* Search' },

  ];
  return (
    <div className="bg-gray-600 px-8 py-4 text-white">
      <div className="text-center text-3xl mb-2">Fishy Routes</div>
      <div className="flex flex-row justify-between">
        <Select placeholder="Select Algorithm" className="w-50 text-black" options={options} />
        <button className="px-4 py-2 hover:bg-amber-500 duration-200 bg-amber-600 rounded-sm">Catch the fish!</button>
      </div>
    </div>
  );
}

export default Header;
