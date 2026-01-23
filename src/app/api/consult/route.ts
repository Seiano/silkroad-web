import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface ConsultFormData {
  name: string;
  email: string;
  phone?: string;
  country: string;
  treatmentType: string;
  preferredCity?: string;
  preferredContact: string;
  description?: string;
}

// 创建 QQ 邮箱 SMTP 传输器
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.QQ_EMAIL,
    pass: process.env.QQ_EMAIL_AUTH_CODE,
  },
});

export async function POST(request: Request) {
  try {
    const data: ConsultFormData = await request.json();

    await transporter.sendMail({
      from: `"SilkRoad Health" <${process.env.QQ_EMAIL}>`,
      to: '379992546@qq.com',
      subject: `新咨询请求 - ${data.name} - ${data.treatmentType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066CC; border-bottom: 2px solid #0066CC; padding-bottom: 10px;">
            新的咨询请求
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">姓名:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">邮箱:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">电话/WhatsApp:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone || '未提供'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">国家:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">治疗类型:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #0066CC; font-weight: bold;">${data.treatmentType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">偏好城市:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredCity || '无偏好'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">偏好联系方式:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredContact}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="margin: 0 0 10px 0; color: #333;">需求描述:</h3>
            <p style="margin: 0; white-space: pre-wrap;">${data.description || '未提供'}</p>
          </div>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            此邮件由 SilkRoad Health 网站自动发送<br/>
            提交时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
