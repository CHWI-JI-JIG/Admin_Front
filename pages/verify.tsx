import { Label } from "@/components/ui/SU_label"
import { Input } from "@/components/ui/SU_input"
import { Button } from "@/components/ui/SU_button"
import { Separator } from "@/components/ui/SUseparator"
import { useState } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { API_BASE_URL } from '@/config/apiConfig';
import "@/app/globals.css"

export default function SignUp() {
  const router = useRouter();
  const [otp, setOtp] = useState("");


  // 아이디 중복 검사
  const checkId = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/verify-otp`, {
          "otp": setOtp,
          "email": ""
        });
  
        if (response.data.success) {
          alert("회원가입이 완료되었습니다.");
          router.push('/login');
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      } catch (error) {
      }
  };

  // 회원가입 로직
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // 회원가입 요청
    try {
      const response = await axios.post(`${API_BASE_URL}/api/signup`, {
        "buyerId": otp,
      });

      if (response.data.success) {
        alert("회원가입이 완료되었습니다.");
        router.push('/login');
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    } catch (error) {
    }
  };


  return (
    <div className="mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">회원가입</h1>
        <p className="text-gray-500 dark:text-gray-400">취지직은 여러분을 환영합니다.</p>
      </div>
      <div>
        <div className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="id">이메일 인증</Label>
            <div className="flex items-center">
              <Input id="id" required className="w-64" value={otp} onChange={(e) => setOtp(e.target.value)} />
              <button className="ml-2 bg-gray-500 text-white py-2 px-6 rounded" onClick={checkId}>검증</button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}