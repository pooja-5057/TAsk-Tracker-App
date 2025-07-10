import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from './_app'; 
import RegisterForm from '../components/auth/RegisterForm'; 

const HomePage = () => {
  const router = useRouter();
  const { currentUser } = useContext(AppContext);

  useEffect(() => {
   
    if (currentUser) {
      router.push('/dashboard');
    }
   
  }, [currentUser, router]);
  if (currentUser === null) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <RegisterForm />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white">Loading...</p>
    </div>
  );
};

export default HomePage;
