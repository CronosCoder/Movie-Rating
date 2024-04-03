import { registerUrl } from '@/Utilities/Url';
import LoginImg from '../../assets/create.jpg';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () =>{
        const registerData = {name,phone,email,password};
        if (password.length < 5) {
            Swal.fire("Password must be greater or equal to 5 characters.", "", "warning");
        } else {
            fetch(registerUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            })
                .then(res => {
                    if (res.status === 400) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Email Already Exists..! Please Login.',
                            icon: 'error',
                        })
                    } else {
                        res.status == 201 && Swal.fire("Successfully Created !", "", "success");
                        return res.json();
                    }
                })
                .then(data => navigate('/login'))
                .catch(error => Swal.fire("Account does not created!", "", "error"))
        }
    }
    return (
        <div className='h-screen bg-cover backdrop-blur-lg relative' style={{backgroundImage:`url(${LoginImg})`}}>
            <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-opacity-85 w-[40%] mx-auto my-auto'>
                <div className='bg-white backdrop-blur-3xl backdrop-opacity-10 bg-opacity-60 rounded-lg p-10 '>
                    <h1 className='font-bold text-4xl'>Register</h1>
                    <p className='mt-3 text-xl text-gray-900'>Enter details to create to your account</p>
                    <div className='mt-10 flex gap-4 w-full'>
                        <div className='w-full'>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                className="bg-transparent"
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className='w-full'>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                className="bg-transparent"
                                type="number"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="bg-transparent"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className='mt-3'>
                        <Label className="" htmlFor="password">Password</Label>
                        <Input
                            className="bg-transparent"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button className="mt-5 w-full" onClick={handleRegister}> Register</Button>
                    <h1 className='text-center text-xs mt-10'>Don’t have an account ? <Link className='text-blue-800' to="/login">Log In</Link> </h1>
                </div>
                
            </div>
        </div>
    );
};

export default Register;