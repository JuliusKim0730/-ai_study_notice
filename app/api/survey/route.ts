import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // 설문 데이터를 이메일 형식으로 변환
    const emailContent = `
바이브코딩 스터디 신청서

=================================

1. 닉네임: ${formData.nickname}

2. 바이브코딩 지식 수준: ${formData.vibeKnowledge}

3. 바이브코딩 학습 이유:
${formData.reason}

4. 결제 의향: ${formData.paymentOk}

5. 100% 참여 동의: ${formData.attendance}

6. 만들어보고 싶은 서비스:
${formData.serviceIdea}

=================================

제출 시간: ${new Date().toLocaleString('ko-KR')}
    `.trim();

    // 실제 환경에서는 이메일 서비스 (예: SendGrid, AWS SES, Nodemailer 등)를 사용해야 합니다.
    // 현재는 콘솔에 로그를 출력하는 방식으로 대체합니다.
    console.log('=== 바이브코딩 스터디 신청서 ===');
    console.log(emailContent);
    console.log('=== 수신자: kia1026@naver.com ===');
    
    // 실제 이메일 전송 코드는 아래와 같이 구현할 수 있습니다:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // 또는 다른 이메일 서비스
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kia1026@naver.com',
      subject: '바이브코딩 스터디 신청서',
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);
    */

    return NextResponse.json({ success: true, message: '설문이 성공적으로 제출되었습니다.' });
  } catch (error) {
    console.error('Survey submission error:', error);
    return NextResponse.json(
      { success: false, message: '설문 제출에 실패했습니다.' },
      { status: 500 }
    );
  }
} 