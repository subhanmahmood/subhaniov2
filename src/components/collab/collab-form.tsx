'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface CollabFormProps {
  checkCollabPassword: (password: string) => Promise<boolean>;
}

interface FormData {
  password: string;
}

export default function CollabForm({ checkCollabPassword }: CollabFormProps) {
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setError('');
    
    try {
      const isValid = await checkCollabPassword(data.password);
      if (isValid) {
        router.push('/collab/quote');
      } else {
        setError('Invalid password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        type="password"
        placeholder="Enter password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  );
}