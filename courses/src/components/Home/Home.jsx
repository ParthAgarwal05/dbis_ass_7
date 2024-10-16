import React from 'react';
import logo from '/logo.png';
import bgImg from '/lrc.jpg';
import { Navigate, useActionData, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const navigate = useNavigate();
  const courses = [
    { code: 'CS 103', name: 'Computer Programming', lpt: '2-0-0', credit: 2 },
    { code: 'CS 153', name: 'Computer Programming Lab', lpt: '0-0-3', credit: 1.5 },
    { code: 'CS 201', name: 'Discrete Mathematical Structures', lpt: '2-1-0', credit: 3 },
    { code: 'CS 202', name: 'Automata Theory and Logic', lpt: '2-1-0', credit: 3 },
    { code: 'CS 203', name: 'Data Structure and Algorithms', lpt: '2-1-0', credit: 3 },
    { code: 'CS 253', name: 'Data Structure and Algorithms Lab', lpt: '0-0-3', credit: 1.5 },
    { code: 'CS 204', name: 'Design and Analysis of Algorithms', lpt: '2-1-0', credit: 3 },
    { code: 'CS 254', name: 'Design and Analysis of Algorithms Lab', lpt: '0-0-3', credit: 1.5 },
  ];
  const handleLogout = () => {
    navigate('/');
  }
  return (
    <div className="font-sans w-screen h-screen overflow-hidden">
        <div
            className='absolute inset-0 bg-cover bg-fixed blur-sm'
            style={{ backgroundImage: `url(${bgImg})` }}
        >
        </div>     
      <div className="relative flex z-10 mt-12 justify-center items-center">
        <img src={logo} className="w-36 h-[160px]" />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
      <div className="relative flex z-10 mt-6 justify-center font-bold items-center text-2xl lg:text-4xl text-black">
        <TypeAnimation
          sequence={[
            'WELCOME TO IIT INDORE',
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          speed={20}
          cursor={true}
        />
      </div>

      <div className="relative flex z-10 justify-center mt-10">
        <div className="max-h-[400px] overflow-y-auto shadow-md sm:rounded-lg"> 
            <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                <th scope="col" className="px-6 py-3">Course Code</th>
                <th scope="col" className="px-6 py-3">Course Name</th>
                <th scope="col" className="px-6 py-3">L-P-T</th>
                <th scope="col" className="px-6 py-3">Credit</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{course.code}</td>
                    <td className="px-6 py-4">{course.name}</td>
                    <td className="px-6 py-4">{course.lpt}</td>
                    <td className="px-6 py-4">{course.credit}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
}

export default Home;
