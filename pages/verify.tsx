import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { API_BASE_URL } from '@/config/apiConfig';
import "@/app/globals.css"

// 커스텀 UI 컴포넌트 임포트
import { Label } from "@/components/ui/SU_label"
import { Input } from "@/components/ui/SU_input"
import { Button } from "@/components/ui/SU_button"
import { Separator } from "@/components/ui/SUseparator"
import { Key } from 'lucide-react';

export default function Verify() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const sessionKey = sessionStorage.getItem("key");
      const sessionEmail = sessionStorage.getItem("email");

      if (!sessionKey || !sessionEmail) {
        router.push('/404');
      } else {
        setEmail(sessionEmail);

        // /api/send-otp로 POST 요청을 보냅니다.
        try {
          const response = await axios.post(`${API_BASE_URL}/api/send-otp`, {
            key: sessionKey,
            email: sessionEmail
          });
          alert(response.data);
        } catch (error) {
          console.error('OTP 전송 중 오류 발생:', error);
        }
      }
    };

    fetchData();
  }, [router]);

  // OTP 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]{0,6}$/;
    if (regex.test(e.target.value)) {
      setOtp(e.target.value);
    }
  };

  const checkOTP = async () => {
    try {
      // 세션 스토리지에서 key 값을 가져옵니다.
      const sessionKey = sessionStorage.getItem("key");

      if (!sessionKey) {
        alert("세션 키가 없습니다.");
        return;
      }

      // 요청 파라미터 값 콘솔에 출력
      console.log("POST 요청 파라미터:", { otp: otp, key: sessionKey });

      const response = await axios.post(`${API_BASE_URL}/api/verify-otp`, {
        otp: otp,
        key: sessionKey, // 요청 본문에 key 값을 포함시킵니다.
      });

      // 요청 응답 콘솔에 출력
      console.log("POST 요청 응답:", response);

      const { success, message, key, auth } = response.data;

      alert(message);
      if (success) {
        sessionStorage.setItem("key", key);
        sessionStorage.setItem("auth", auth);
        // 성공 시 로직, 예: 인증 성공 페이지로 이동
        router.push('/admin');
      }
    } catch (error) {
      // 오류 메시지 콘솔에 출력
      console.error("POST 요청 오류:", error);
      alert(error);
    }
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    checkOTP();
  };

  return (
    <div className="mx-auto max-w-[350px] space-y-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">2차 인증</h1>
          <p className="text-gray-500 dark:text-gray-400">취지직 2FA.</p>
        </div>
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id">OTP 인증</Label>
              <div className="flex items-center">
                <Input id="otp" required className="w-64" value={otp} onChange={handleChange} />
                <Button type="submit" className="ml-2 bg-gray-500 text-white py-2 px-6 rounded">검증</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
