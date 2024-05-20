import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Fakedata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        const firstFifteenUsers = response.data.users.slice(0, 15);
        setUsers(firstFifteenUsers);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map(user => (
          <Card key={user.id} className={cn("shadow-lg")}>
            <CardHeader>
              <CardTitle className="text-primary">{user.firstName} ({user.username})</CardTitle>
              <CardDescription>Age: {user.age}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Gender: {user.gender}</p>
              <p className="text-gray-700">Phone: {user.phone}</p>
              <p className="text-gray-700">State: {user.address.state}</p>
              <p className="text-gray-700">Birthdate: {new Date(user.birthDate).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Fakedata;
