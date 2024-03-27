import { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/Lo_label"
import { Input } from "@/components/ui/Lo_input"
import Link from "next/link"
import { Button } from "@/components/ui/Lo_button"
import { useRouter } from "next/router";
import "@/app/globals.css"
import { API_BASE_URL } from '@/config/apiConfig';
import { setSessionData } from '@/utils/auth';

export default function Login() {
  const router = useRouter();
  // 입력값 상태 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 로직
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    try {
      const response = await axios.post(`${API_BASE_URL}/api/Adminlogin`, {
        "userId": id,
        "userPassword": password,
      });

      const {success, message, key, email} = response.data
      if (response.data.success) {
        alert("로그인에 성공하였습니다.");

        sessionStorage.setItem('key',key)
        sessionStorage.setItem('email', email)

        window.location.href = "/verify";
      } else {
        alert(message);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("로그인 처리중 오류가 발생했습니다.")
      window.location.reload();
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="mx-auto space-y-6 max-w-[400px]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">취지직 관리자</h1>
          <p className="text-gray-500 dark:text-gray-400">취지직 관리자만 접근 가능합니다.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id">아이디</Label>
            <Input id="id" placeholder="" required value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">패스워드</Label>
            </div>
            <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  )
}