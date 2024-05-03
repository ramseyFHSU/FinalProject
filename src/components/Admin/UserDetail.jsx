import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          <h1 className=" text-xl text-gray-700 font-bold">All Users</h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-yellow-800 text-gray-700">
            <tbody>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-yellow-800 text-slate-700 bg-slate-100 font-bold fontPara">
                  S.No.
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-800 text-slate-700 bg-slate-100">
                  Location Name
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-800 text-slate-700 bg-slate-100">
                  Action
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-yellow-800 text-slate-700 bg-slate-100">
                  Action
                </th>
              </tr>
              {users.map((user, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-800 stroke-slate-500 text-slate-500 ">
                    {index + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-800 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {user.username}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-800 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                    Edit
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-yellow-800 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
