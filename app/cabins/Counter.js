"use client"
import React, { useState } from 'react'

const Counter = ({ users }) => {
    const [counter, setCounter] = useState(0)
    console.log(users);

    return (
        <div>
            <p>THERE ARE {users.length} users</p>
            <div>
                <table className='min-w-full bg-black border border-gray-900'>
                    <thead className='bg-gray-900 border-b'>
                        <tr>
                            <th>
                                S.No
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                    {users.map((users) => (
                        <tr key={users.id} className="hover:bg-gray-50 border-b">
                            <td>{users.id}</td>
                            <td >{users.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <button onClick={
                () => setCounter((c) => (c + 1))
            }> {counter}</button>

        </div>
    )
}

export default Counter